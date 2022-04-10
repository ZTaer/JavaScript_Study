// third-party
import Carousel, { ViewType } from 'react-images';

// ==============================|| POPUP IMAGES BOX / LIGHT BOX ||============================== //

interface PhotoProps extends ViewType {
    srcSet: string;
    title: string;
}

interface LightBoxProps {
    currentImage: number;
    photos: PhotoProps[];
}

const LightBox = ({ currentImage, photos }: LightBoxProps) => (
    <>
        <Carousel
            currentIndex={currentImage}
            views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
            }))}
        />
    </>
);

export default LightBox;
