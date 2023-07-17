import Image from "next/image";

const backgroundImage = (props) => (
  <Image
    src={props.src}
    fill
    quality={50}
    alt={props.alt}
    priority
    style={{
      zIndex: "-2",
      position: "absolute",
      objectFit: "cover",
      overflow: "hidden",
    }}
  />
);

export default backgroundImage;
