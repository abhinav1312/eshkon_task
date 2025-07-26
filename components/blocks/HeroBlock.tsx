import CustomCtaButton from "../CustomCtaButton";

interface HeroBlockProps {
  data: {
    heading: string;
    subHeading: string;
    ctaText: string;
    backgroundImage: { url: string };
  };
}

export default function HeroBlock({ data }: HeroBlockProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${data.backgroundImage?.url})`,
        backgroundSize: 'cover',
        padding: '4rem',
        color: '#fff',
        textAlign: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
      }}
    >
      <h1 style={{fontSize: "4rem"}}>{data.heading}</h1>
      <h3 style={{color: "gray"}}>{data.subHeading}</h3>
      <CustomCtaButton text={data.ctaText} />
    </section>
  );
}
