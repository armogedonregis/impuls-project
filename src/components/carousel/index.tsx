import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { NavigationOptions } from 'swiper/types';

type Props = SwiperProps & {
    children: React.ReactNode;
    navigation?: boolean | NavigationOptions | undefined;
}

export const Carousel = ({ children, navigation, ...props }: Props) => {
    return (
        <Swiper
            {...props}
            navigation={navigation}
            speed={1000}
            pagination={false}
            mousewheel={false}
            modules={[Navigation, Mousewheel, Autoplay]}
            loop={true}
            autoplay={{
                delay: 6000
            }}
        >
            {children}
        </Swiper >
    );
};