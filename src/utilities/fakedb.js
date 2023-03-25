// To Manage Local Storage cart Data :
const addToDb = id => {
    const quantity = localStorage.getItem(id);
    
        if(quantity){

            console.log('already there');

        } else {
            console.log('new Item added');
            localStorage.setItem(id, 1);

        }
}




export { addToDb };

