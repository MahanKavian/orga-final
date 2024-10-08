interface Props {
    price: number,
    sale_price?: number
}

export function PriceText({price, sale_price}: Props) {
    return (
        <>
            {
                sale_price ?
                <div className="flex items-center gap-1 text-center">
                    <span className="font-medium mr-1 text-primary-300 text-xl">${sale_price}</span>
                    <span className="font-normal text-md text-silver-300 line-through">${price}</span>
                </div>
                    :
                    <div className="font-jost">
                        <span className="font-medium mr-1 text-primary-300 text-xl">${price}</span>
                    </div>            }
        </>
    );
}