import Image from 'next/image'

const profilePic = () => (
    <Image
    src='/images/profile.jpg'
    height={144}
    width={144}
    quality={50}
    alt='Photo de profil du site de Valentine B.'
    />
);

export default profilePic