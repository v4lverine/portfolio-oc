import Image from "next/image";

const backgroundImage = (props) => (
  <Image
    src={props.src}
    width={2500}
    height={1500}
    quality={50}
    alt={props.alt}
    priority
    style={{
      zIndex: "-2",
      position: "fixed",
      overflow: "hidden",
    }}
  />
);

export default backgroundImage;
