type Props = {
  imageSrc: string;
}

export default function FeaturedImage({ imageSrc }: Props) {
  return (
    <figure className="w-1/2">
      <div className="w-full aspect-square bg-gray-900" />
    </figure>
  )
}
