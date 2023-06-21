import Image from "next/image";

const shortPicture = (props) => (
  <Image src={props.src} height={80} width={80} quality={50} alt={props.alt} />
);

export default shortPicture;
