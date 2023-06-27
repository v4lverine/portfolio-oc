import Image from "next/image";

const backgroundImage = (props) => (
  <Image
    src={props.src}
    height={1500}
    width={1600}
    quality={50}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    alt={props.alt}
    // placeholder='blur'
    // blurDataURL='' lorsque l'image aura un domaine (?), ajouter via next.config.js
    priority
    style={{ zIndex: "-2", position: "fixed" }}
  />
);

export default backgroundImage;
