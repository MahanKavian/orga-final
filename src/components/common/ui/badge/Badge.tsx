interface Props{
    badge?: string,
    price: number,
    sale_price?: number,
    badgeIsBig?: boolean
}

export function Badge({badge, price, sale_price, badgeIsBig = true}: Props) {
    if(badge && badge.toLowerCase() === "hot"){
        return (
            <span className={`${badgeIsBig ?'p-2 rounded-r-full' : 'p-0.5 px-3'} w-fit text-sm bg-yellow text-white`}>
                {badge}
            </span>
        )
    }
    if(!badge && sale_price){
            return (
                <span className={`${badgeIsBig ? "p-2 rounded-r-full" : "p-0.5 px-3"} bg-primary-300 w-fit text-sm text-white`}>
                    {Math.round((sale_price / price) * 100)}%
            </span>
            )
        // }else{
        //     return (
        //         <span className={`${sale_price>price?"bg-red":"bg-primary-300"} w-fit p-0.5 px-3 text-sm text-white`}>
        //         {sale_price < price && "-"}
        //             {Math.round((sale_price / price) * 100)}%
        //     </span>
        //     )
        // }
    }
    return (<></>)
}

