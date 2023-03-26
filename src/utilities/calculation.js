const add = (first, second) => {
        return first + second;
}

const multiply =(first, second) =>{
    return first * second;
}

// const number = [10, 20, 30, 40, 50];
// const sumReducer = (previous, current) => previous + current;
// const total = number.reduce(sumReducer ,0)

// console.log(total);

//   const items = [
//     {id: 1, name: 'jama', price: 500},
//     {id: 2, name: 'tama', price: 600},
//     {id: 3, name: 'pajama', price: 700},
//     {id: 4, name: 'jamama', price: 800},
//   ]
// const itemReducer = (previous, current) => previous + current.price;
// const total = items.reduce( itemReducer, 0 )
// console.log(total);

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { add, 
    multiply, 
    getTotalPrice as totalPrice };

