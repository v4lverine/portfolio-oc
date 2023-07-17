import Image from "next/image";

const largePictures = (props) => (
  <Image
    src={props.src}
    height={250}
    width={250}
    quality={50}
    alt={props.alt}
    priority
    style={{
      borderRadius: "300px",
      border: "solid var(--greenish) 8px",
      marginRight: "15px",
      padding: "8px",
      zIndex: "1",
    }}
  />
);

export default largePictures;
