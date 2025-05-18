export default function cartReducer(items, action) {
    if (action.type === "addedToCart") {
        return [...items, action?.item];
    }
    else if (action.type === "removedFromCart") {
        return items.filter((item) => item.id !== action.item.id);
    }
    else if (action.type === "INCREASE_QUANTITY" || action.type === "DECREASE_QUANTITY") {
        return items.map((item) => {
            if (item.id === action.item.id) {
                let quantity;
                if (action.type === "INCREASE_QUANTITY") {
                    quantity = action.item.quantity + 1;
                } else {
                    quantity = action.item.quantity - 1;
                }
                const price = quantity * action.item.unitPrice;
                return { ...item, price, quantity };
            } else {
                return item;
            }
        });
    }
    else if (action.type === "RESET_CART") {
        return [];
    }

}