import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);
console.log("SPACE:", process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
export async function fetchLandingPage(slug: string) {
  const query = `
    query GetLandingPage($slug: String!) {
      landingPageCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          layoutConfig
        }
      }
    }
  `;
  const { landingPageCollection } = await client.request(query, { slug });
  return landingPageCollection.items[0];
}

export async function fetchBlockEntryData(type: string, entryId: string) {
  let query = '';
  let key = '';

  if (type === 'hero') {
    query = `
      query ($id: String!) {
        heroBlock(id: $id) {
          heading
          subHeading
          ctaText
          backgroundImage {
            url
          }
        }
      }
    `;
    key = 'heroBlock';
  }

  if (type === 'two-column') {
    query = `
      query ($id: String!) {
        twoColumnRow(id: $id) {
          leftTitle
          leftDescription
          rightImage {
            url
          }
        }
      }
    `;
    key = 'twoColumnRow';
  }

  if (type === 'image-grid') {
    query = `
      query ($id: String!) {
        imageGrid(id: $id) {
          imagesCollection {
            items {
              url
            }
          }
        }
      }
    `;
    key = 'imageGrid';
  }

  if (!query || !key) {
    console.error('Invalid block type:', type);
    return null;
  }

  try {
    const variables = { id: entryId };
    const res = await client.request(query, variables);
    return res[key];
  } catch (err) {
    console.error('Request Failed:', JSON.stringify(err, null, 2));
    throw err;
  }
}
