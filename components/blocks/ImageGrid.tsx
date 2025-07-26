import Image from "next/image";

interface ImageGridProps {
  data: {
    imagesCollection: {
      items: { url: string }[];
    };
  };
}

export default function ImageGrid({ data }: ImageGridProps) {
  return (
    <section style={{ padding: "2rem", height: "100vh" }}>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "1fr",
          gap: "1rem",
        }}
      >
        {data.imagesCollection.items.map((img, idx) => (
          <div
            key={idx}
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <Image
              src={img.url}
              alt={`Grid ${idx}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
