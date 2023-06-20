import Image from "next/image";

const largePictures = (props) => (
  <Image
    src={props.src}
    height={500}
    width={500}
    quality={50}
    alt={props.alt}
    // placeholder='blur'
    // blurDataURL='' lorsque l'image aura un domaine (?), ajouter via next.config.js
    priority
    style={{
      borderRadius: "300px",
      border: "solid var(--greenish) 8px",
      marginRight: "15px",
      //   boxShadow: "-2px 6px 6px 5px rgba(66,158,68,0.43)",
      padding: "8px",
    }}
  />
);

export default largePictures;
