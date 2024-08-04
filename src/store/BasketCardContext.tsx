import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductType } from "@/types/api/Product";
import { EntityType } from "@/types/api/ResponseApi";
import {ProductItem} from "@/types/productItemLocal";

interface Props {
    children: ReactNode
}



export const BasketCardContext = createContext<{
    BasketItems: Array<ProductItem>,
    addItem: (product: EntityType<ProductType>) => void,
    increaseItem: (productId: number, maxQuantity: number) => void,
    decreaseItem: (productId: number) => void,
    deleteItem: (productId: number) => void,
    getItem: (productId: number) => undefined | ProductItem,
    totalPrice: number
}>({
    BasketItems: [],
    addItem: () => { },
    increaseItem: () => { },
    decreaseItem: () => { },
    deleteItem: () => { },
    getItem: () => undefined,
    totalPrice: 0
})

export function CardContextProvider({ children }: Props) {
    const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const storedBasketItems = window.localStorage.getItem("basket");
        if (storedBasketItems) {
            setBasketItems(JSON.parse(storedBasketItems));
        }
    }, []);

    const addItemHandler = (product: EntityType<ProductType>) => {
        const newProduct: ProductItem = {
            productId: product.id,
            title: product.attributes.title,
            price: product.attributes.price,
            img: product.attributes.thumbnail?.data?.attributes.url,
            sale_price: product.attributes.sale_price,
            quantity: 1
        }
        setBasketItems(prevState => [
            ...prevState,
            newProduct
        ]);
        window.localStorage.setItem("basket", JSON.stringify([...basketItems, newProduct]));
    }

    const increaseItemHandler = (productId: number, maxQuantity: number) => {
        const newBasket = basketItems.map((item) => {
            if (item.productId === productId && item.quantity < maxQuantity) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setBasketItems(newBasket);
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    const decreaseItemHandler = (productId: number) => {
        const currentProduct = basketItems.find((item) => item.productId === productId);
        if (currentProduct && currentProduct.quantity === 1) {
            deleteItemHandler(productId);
        } else {
            const newBasket = basketItems.map((item) => {
                if (item.productId === productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setBasketItems(newBasket);
            window.localStorage.setItem("basket", JSON.stringify(newBasket));
        }
    }

    const deleteItemHandler = (productId: number) => {
        const newBasket = basketItems.filter((item) => item.productId !== productId);
        setBasketItems(newBasket);
        window.localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    useEffect(() => {
        const total = basketItems.map((item)=> item.quantity * item.price )
        const totalSum = total.reduce((total, number) => total + number, 0);
        setTotalPrice(totalSum)
    }, [basketItems]);
    const getItemHandler = (productId: number) => basketItems.find((item) => item.productId === productId);

    return (
        <BasketCardContext.Provider value={{
            BasketItems: basketItems,
            addItem: addItemHandler,
            increaseItem: increaseItemHandler,
            decreaseItem: decreaseItemHandler,
            deleteItem: deleteItemHandler,
            getItem: getItemHandler,
            totalPrice: totalPrice
        }}>
            {children}
        </BasketCardContext.Provider>
    );
}
