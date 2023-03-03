
const ItemInCart = localStorage.getItem("CartItem") !== null ? JSON.parse(localStorage.getItem("CartItem")) : []

const initState = {
    Product: ItemInCart
}

const RootReducers = (state = initState, action) => {
    switch (action.type) {
        case "AddPro":
            const proInCart = state.Product.find((item) =>
                item.product_ID === action.payload.product_ID
            );
            if (!proInCart) {
                let pro = [...state.Product, action.payload]
                localStorage.setItem("CartItem", JSON.stringify(pro.map(a => a)))
                return {
                    Product: pro
                };

            } else {
                let product = state.Product
                console.log(product)
                const find = product.findIndex((obj) =>
                    obj.product_ID === action.payload.product_ID
                )
                product[find].quantity = product[find].quantity + action.payload.quantity

                localStorage.setItem("CartItem", JSON.stringify(product.map(a => a)))
            }

            return state
        case "DeletePro":
            const findPro = state.Product.find((item) =>
                item.product_ID === action.payload.product_ID
            );
            if (findPro) {
                let a = state.Product.filter(item => item.product_ID !== action.payload.product_ID)
                localStorage.setItem("CartItem", JSON.stringify(a.map(a1 => a1)))
                return {
                    Product: a
                }
            }
            return state
        case "AddQuantity":
            const findtoAddPro = state.Product.find((item) =>
                item.product_ID === action.payload.product_ID
            );
            if (findtoAddPro) {
                let product = state.Product
                const find = product.findIndex((obj) =>
                    obj.product_ID === action.payload.product_ID
                )
                product[find] = action.payload
                localStorage.setItem("CartItem", JSON.stringify(product.map(a => a)))
            }
            return state
        case "SubQuantity":
            const findtoSubPro = state.Product.find((item) =>
                item.product_ID === action.payload.product_ID
            );
            if (findtoSubPro) {
                let product = state.Product
                console.log(product)
                const find = product.findIndex((obj) =>
                    obj.product_ID === action.payload.product_ID
                )
                product[find] = action.payload
                localStorage.setItem("CartItem", JSON.stringify(product.map(a => a)))
            }
            return state
        default:
            return state
    }

}

export default RootReducers;