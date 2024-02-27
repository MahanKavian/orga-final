import Image from "next/image";
interface Props {
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}
export function ImageView({ className = "", src, alt, width, height }: Props) {
    return (
        <Image className={className} src={src} alt={alt} width={width} height={height} />
    )
}
