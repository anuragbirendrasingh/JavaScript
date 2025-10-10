function* simpleCounter(){
    let count = 1 ;
    yield count ;

    count = count + 1;
    yield count ;

    count = count + 1;
    yield count ;
}

// const counter = simpleCounter();  // it willnot invoked immediately rather it will return a Itertor object
// console.log(counter);  // Object [Generator] {}

// console.log(counter.next());   // { value: 1, done: false }

// console.log(counter.next());  // { value: 2, done: false }

// console.log(counter.next());  // { value: 3, done: false }

// console.log(counter.next());  // { value: undefined, done: true}

const counter = simpleCounter();
counter.next();
counter.next();
console.log(counter.next());





