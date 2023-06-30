import Image from "next/image";

const WorkImages = (props) => (
  <Image
    src={props.src}
    height={500}
    width={500}
    quality={30}
    alt={props.alt}
    // placeholder='blur'
    // blurDataURL='' lorsque l'image aura un domaine (?), ajouter via next.config.js
    // sizes="(max-width: 768px) 200px, 200px"
    priority
    style={{
      width: "750px",
      height: "450px",
      opacity: "0.2",
    }}
  />
);

export default WorkImages;
