export function recommendFeaturedSrc(src: string) {
  const format = 'webp';
  const width = 1080;
  const quality = 85;
  const compression = 'webp-lossless-compression';

  return `${src}?w=${width}&fm=${format}&q=${quality}&auto=compress,format&${compression}=1`;
}

export function recommendTicketSrc(src: string) {
  const format = 'webp';

  return `${src}?fm=${format}`;
}

export function recommendStillSrc(src: string) {
  const format = 'webp';
  const width = 512;
  const quality = 85;

  return `${src}?w=${width}&fm=${format}&q=${quality}&auto=compress,format`;
}

export function recommendAvatarSrc(src: string) {
  const format = 'webp';
  const width = 200;
  const quality = 85;

  return `${src}?w=${width}&fm=${format}&q=${quality}&auto=compress,format`;
}

export function recommendPlaceholderSrc(src: string) {
  const format = 'webp';
  const width = 20;
  const quality = 50;

  return `${src}?w=${width}&fm=${format}&q=${quality}&blur=200`;
}
