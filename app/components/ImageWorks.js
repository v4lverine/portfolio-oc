import Image from "next/image";

const WorkImages = (props) => (
  <Image
    src={props.src}
    height={450}
    width={750}
    quality={30}
    alt={props.alt}
    priority
    style={{
      opacity: "0.2",
    }}
  />
);

export default WorkImages;
