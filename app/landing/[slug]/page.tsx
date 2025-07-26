
import { fetchLandingPage } from '@/lib/contentful';
import BlockRenderer from '@/components/BlockRenderer';


export default async function LandingPage({ params }: { params: { slug: string } }) {
  const page = await fetchLandingPage(params.slug);
  if (!page) return <div>Not found</div>;

  return (
    <main>
      {page.layoutConfig?.blocks?.map((block: any) => (
        <BlockRenderer type={block.type} key={block.id} entryId={block.entryId} />
      ))}
    </main>
  );
}
