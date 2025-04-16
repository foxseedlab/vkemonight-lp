import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { Image } from './stores/init';

type FeaturedImageProps = {
  image: Image;
  right?: boolean;
};

export default function FeaturedImage({ image, right }: FeaturedImageProps) {
  return (
    <figure className="w-full md:w-1/2">
      <div className="w-full aspect-square">
        <img
          src={image.url}
          alt="アイキャッチ画像"
          className={`w-full h-full object-cover mask-contain ${
            right ? 'mask-featured-image-right' : 'mask-featured-image-left'
          }`}
        />
      </div>
    </figure>
  );
}

type FeaturedImageSlideProps = {
  images: Image[];
  right?: boolean;
};

export function FeaturedImageSlide({ images, right }: FeaturedImageSlideProps) {
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
        className={`mask-contain ${
          right ? 'mask-featured-image-right' : 'mask-featured-image-left'
        }`}
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
