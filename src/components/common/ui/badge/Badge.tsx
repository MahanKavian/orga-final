interface Props{
    badge?: string,
    price: number,
    sale_price?: number,
    badgeIsBig?: boolean
}

export function Badge({badge, price, sale_price, badgeIsBig = true}: Props) {
    if(badge && badge.toLowerCase() === "hot"){
        return (
            <span className={`${badgeIsBig ?'p-2 rounded-r-full' : 'p-0.5 px-3 rounded-md'} w-fit text-sm bg-yellow text-white`}>
                {badge}
            </span>
        )
    }
    if(!badge && sale_price){
            return (
                <span className={`${badgeIsBig ? "p-2 rounded-r-full" : "p-0.5 px-3 rounded-md"} bg-primary-300 w-fit text-sm text-white`}>
                    {Math.round((sale_price / price) * 100)}%
            </span>
            )
    }
    return (<></>)
}

