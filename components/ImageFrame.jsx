import Image from 'next/image';

export default function ImageFrame({
  src,
  alt,
  height,
  width,
  fill = false,
  sizes,
  className,
  variant,
  priority = false,
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={variant}
      />
    </div>
  );
}
