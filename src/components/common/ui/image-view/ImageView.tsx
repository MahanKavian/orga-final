import Image from "next/image";
interface Props {
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}
// export function ImageView({ className = "", src, alt, width, height }: Props) {
//     return (
//         <Image className={className} src={src} alt={alt} width={width} height={height} />
//     )
// }
export function ImageView({src = "", alt, width, height, className = ""}: Props) {
    const imageSrc = src ? (src.startsWith("/uploads") ? "https://cmahanali.navaxcollege.com"+ src : src) : ""
    if(src && src.length > 0) {
        return (
            <Image src={imageSrc} alt={alt} width={width} height={height} className={className}/>
        );
    }else{
        return (
            <Image src={"/assets/images/Logo.png"} alt={alt} width={width} height={height} className={className}/>
        )
    }
}