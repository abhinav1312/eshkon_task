import Image from "next/image";

interface TwoColumnRowProps {
  data: {
    leftTitle: string;
    leftDescription: string;
    rightImage: { url: string };
  };
}

export default function TwoColumnRow({ data }: TwoColumnRowProps) {
  return (
    <section
      style={{
        display: "flex",
        padding: "2rem",
        gap: "2rem",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "3rem" }}>{data.leftTitle}</h2>
        <p style={{ color: "gray" }}>{data.leftDescription}</p>
      </div>
      <div style={{ flex: 1, position: "relative", height: "500px" }}>
        {data.rightImage?.url && (
          <Image
            src={data.rightImage.url}
            alt="Right Column"
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        )}
      </div>
    </section>
  );
}
