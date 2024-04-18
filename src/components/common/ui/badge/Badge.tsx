interface Props {
    badge?: string,
    price: number,
    sale_price?: number,
    badgeIsBig?: boolean
}

export function Badge({badge, price, sale_price, badgeIsBig = true}: Props) {
    return (
        <div className={"flex flex-col gap-1 py-4"}>
            {
                badge && <span
                    className={`${badgeIsBig ? 'p-2 rounded-r-full' : 'p-0.5 px-3 rounded-md'} w-fit text-sm ${badge === "NEW" ? "bg-yellow" : badge === "FRESH" ? "bg-blue-200" : badge === "HOT" ? "bg-red" : "bg-red"} text-white pr-3`}>
                    {badge}
                </span>
            }
            {
                sale_price && <span
                    className={`${badgeIsBig ? "p-2 rounded-r-full" : "p-0.5 px-3 rounded-md"} bg-primary-300 pr-3 w-fit text-sm text-white z-10`}>
                    {Math.round(((price - sale_price) / price) * 100)}%
                 </span>
            }
        </div>
    )
}

