import Link from "next/link";

interface Props {
    icon: string;
    link?: string;
    size?: number;
    title?: string;
    badge?: number;
    onClick?: MouseEvent
    hideTitleMobile?: boolean;
    titleClassName?: string;
    path?: number;
    linkClassName?: string;
    iconClassName?: string;
    functionHandler?: ()=> void;
}

export function IconBox({
                            icon,
                            size = 22,
                            link,
                            title,
                            badge = 0,
                            hideTitleMobile,
                            titleClassName = '',
                            path = 0,
                            linkClassName = '',
                            iconClassName = '',
                            functionHandler
                        }: Props) {
    let span = [];
    for (let i = 0; i <= path; i++) {
        span.push(<span className={`path${i}`}></span>);
    }

    if (link) {
        return (
            <Link href={link} className={`flex items-center gap-2 w-fit ${linkClassName}`}>
                {
                    badge
                        ?
                        <div className="relative">
                            <span
                                className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-primary-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} ${iconClassName}`} style={{fontSize: size}}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} ${iconClassName}`} style={{fontSize: size}}>{span}</i>
                }
                {
                    title
                    &&
                    <span
                        className={`${hideTitleMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>
                        {title}
                    </span>
                }
            </Link>
        )
    } else {
        return (
            <div className={`flex items-center gap-2 w-fit ${linkClassName}`} onClick={functionHandler}>
                {
                    badge
                        ?
                        <div className="relative">
                        <span
                            className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i className={`${icon} ${iconClassName}`} style={{fontSize: size}}>{span}</i>
                        </div>
                        :
                        <i className={`${icon} ${iconClassName}`} style={{fontSize: size}}>{span}</i>
                }
                {
                    title
                    &&
                    <span
                        className={`${hideTitleMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName}`}>
                    {title}
                </span>
                }
            </div>
        )
    }
}
