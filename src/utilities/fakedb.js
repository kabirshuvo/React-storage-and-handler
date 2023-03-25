// To Manage Local Storage cart Data :
const addToDb = id => {
    let shoppingCart ;

    //*get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart =JSON.parse(storedCart);
    }else{
        shoppingCart ={};
    }
    
    const quantity = shoppingCart[id];
        if(quantity){
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
            //localStorage.setItem(id, newQuantity);
        } else {
            shoppingCart[id] = 1;
            // localStorage.setItem(id, 1);
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = id => {
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-crt', JSON.stringify(shoppingCart));
            }
        }
}

const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
}


export { addToDb, removeFromDb, deleteCart };

