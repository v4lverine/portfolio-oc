import Image from 'next/image'

const profilePic = (props) => (
    <Image
    src={props.src}
    height={100}
    width={100}
    quality={50}
    alt={props.alt}
    />
);

export default profilePic