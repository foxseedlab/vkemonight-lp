import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { Image } from './stores/init';

type Props = {
  image: Image;
};

export default function FeaturedImage({ image }: Props) {
  return (
    <figure className="w-full md:w-1/2">
      <div className="w-full aspect-square">
        <img
          src={image.url}
          alt="アイキャッチ画像"
          className="w-full h-full object-cover"
        />
      </div>
    </figure>
  );
}

export function FeaturedImageSlide({ images }: { images: Image[] }) {
  const intervalMilliseconds = 3000;

  return (
    <figure className="w-full md:w-1/2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: intervalMilliseconds,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.url}>
            <div className="w-full aspect-square">
              <img
                src={image.url}
                alt={`アイキャッチ画像${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  );
}
