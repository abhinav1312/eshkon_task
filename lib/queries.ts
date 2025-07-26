const queries: Record<string, string> = {
  hero: `
    query ($id: String!) {
      heroBlock(id: $id) {
        heading
        subtitle
        cta
        backgroundImage { url }
      }
    }
  `,
  'two-column': `
    query ($id: String!) {
      twoColumnRow(id: $id) {
        heading
        subtitle
        cta
        image { url }
      }
    }
  `,
  'image-grid': `
    query ($id: String!) {
      imageGrid(id: $id) {
        imagesCollection {
          items { url }
        }
      }
    }
  `,
};
