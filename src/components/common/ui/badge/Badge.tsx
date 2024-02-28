interface Props{
    badge?: string,
    price: number,
    sale_price?: number
}

export function Badge({badge, price, sale_price}: Props) {
    if(badge && badge.toLowerCase() === "hot"){
        return (
            <span className="absolute p-2 rounded-r-full text-center top-0 font-[500] tracking-[2px] font-jost inline bg-primary-300 text-white">
                {badge}
            </span>
        )
    }else if(!badge && sale_price){
        return (
            <span className={`${sale_price>price?"bg-red-500":"bg-primary-300"} absolute p-2 rounded-r-full text-center top-0 font-[500] tracking-[2px] font-jost inline text-white`}>
                {sale_price < price && "-"}
                {Math.round((sale_price / price) * 100)}%
            </span>
        )
    }
    return (<></>)
}

