interface Props {
    price: number,
    sale_price?: number
}

export function PriceText({price, sale_price}: Props) {
    return (
        <>
            {
                sale_price ?
                <div className="font-jost text-center">
                    <span className="font-[600] mr-1 text-dark text-xl">{sale_price}</span>
                    <span className="font-[500] text-blue-silver text-medium line-through">{price}$</span>
                </div>
                    :
                    <div className="font-jost">
                        <span className="font-[500] mr-3 text-dark text-xl">{price}$</span>
                    </div>            }
        </>
    );
}