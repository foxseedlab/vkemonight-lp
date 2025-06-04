import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { recommendFeaturedSrc } from './imgix/image';
import type { Image } from './stores/init';

type FeaturedImageProps = {
  image: Image;
  right?: boolean;
};

export default function FeaturedImage({ image, right }: FeaturedImageProps) {
  return (
    <figure className="relative">
      <div className="w-full aspect-square">
        <img
          src={recommendFeaturedSrc(image.url)}
          alt="アイキャッチ画像"
          className={`w-full h-full object-cover mask-contain ${
            right
              ? 'mask-none md:mask-featured-image-right'
              : 'mask-none md:mask-featured-image-left'
          }`}
        />
      </div>

      <div className="w-full absolute -bottom-4 left-0 z-10">
        <img
          src={
            right
              ? '/featured-image-frame-right.svg'
              : '/featured-image-frame-left.svg'
          }
          alt="縁エフェクト"
          className="w-full select-none pointer-events-none"
          draggable={false}
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
    <figure className="relative">
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
          right
            ? 'mask-none md:mask-featured-image-right'
            : 'mask-none md:mask-featured-image-left'
        }`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.url}>
            <div className="w-full aspect-square">
              <img
                src={recommendFeaturedSrc(image.url)}
                alt={`アイキャッチ画像${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full absolute -bottom-4 left-0 z-10">
        <img
          src={
            right
              ? '/featured-image-frame-right.svg'
              : '/featured-image-frame-left.svg'
          }
          alt="縁エフェクト"
          className="w-full select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </figure>
  );
}
