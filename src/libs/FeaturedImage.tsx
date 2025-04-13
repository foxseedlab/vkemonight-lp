type Props = {
  imageSrc: string;
};

export default function FeaturedImage({ imageSrc }: Props) {
  return (
    <figure className="w-full md:w-1/2">
      <div className="w-full aspect-square">
        <img
          src={imageSrc}
          alt="アイキャッチ画像"
          className="w-full h-full object-cover"
        />
      </div>
    </figure>
  );
}
