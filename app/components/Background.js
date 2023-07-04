import Image from "next/image";

const backgroundImage = (props) => (
  <Image
    src={props.src}
    height={1500}
    width={2560}
    quality={50}
    alt={props.alt}
    // placeholder='blur'
    // blurDataURL='' lorsque l'image aura un domaine (?), ajouter via next.config.js
    priority
    style={{ zIndex: "-2", position: "fixed" }}
  />
);

export default backgroundImage;
