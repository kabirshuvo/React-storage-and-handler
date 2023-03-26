const add = (first, second) => {
        return first + second;
}

const multiply =(first, second) =>{
    return first * second;
}

const number = [10, 20, 30, 40, 50];
const sumReducer = (previous, current) => previous + current;
const total = number.reduce(sumReducer ,0)

console.log(total);


export { add, multiply };

