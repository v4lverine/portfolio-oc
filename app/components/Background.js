import Image from "next/image";

const backgroundImage = (props) => (
  <Image
    src={props.src}
    fill
    quality={80}
    sizes="(max-width: 768px) 50vw, 33vw, (max-width: 1200px), 100 vw "
    alt={props.alt}
    // placeholder='blur'
    // blurDataURL='' lorsque l'image aura un domaine (?), ajouter via next.config.js
    priority
    style={{ zIndex: "-2" }}
  />
);

export default backgroundImage;
