export function recommendFeaturedSrc(src: string) {
  const format = 'webp';
  const width = 1080;

  return `${src}?w=${width}&fm=${format}`;
}

export function recommendStillSrc(src: string) {
  const format = 'webp';
  const width = 512;

  return `${src}?w=${width}&fm=${format}`;
}

export function recommendAvatarSrc(src: string) {
  const format = 'webp';
  const width = 200;

  return `${src}?w=${width}&fm=${format}`;
}

export function recommendLogoSrc(src: string) {
  const format = 'webp';
  const width = 512;

  return `${src}?w=${width}&fm=${format}`;
}
