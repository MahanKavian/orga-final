interface Props{
    badge?: string,
    price: number,
    sale_price?: number
}

export function Badge({badge, price, sale_price}: Props) {
    if(badge && badge.toLowerCase() === "hot"){
        return (
            <span className="absolute py-2 pl-2 pr-4 rounded-r-full text-center text-sm top-0 font-normal inline bg-red text-white">
                {badge}
            </span>
        )
    }else if(!badge && sale_price){
        return (
            <span className={`${sale_price>price?"bg-red":"bg-primary-300"} absolute py-2 pl-2 text-sm pr-4 rounded-r-full text-center top-0 font-normal inline text-white`}>
                {sale_price < price && "-"}
                {Math.round((sale_price / price) * 100)}%
            </span>
        )
    }
    return (<></>)
}

