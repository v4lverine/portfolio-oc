import Image from 'next/image'

const largePictures = (props) => (
    <Image
    src={props.src}
    height={500}
    width={500}
    quality={50}
    alt={props.alt}
    />
);

export default largePictures