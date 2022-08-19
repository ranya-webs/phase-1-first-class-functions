// This function receives a function and calls it back.
const receivesAFunction = callBack => callBack();


// This function returns a named function (i.e. not an anonymous function)
const returnsANamedFunction = () => {
    const add = (a,b) => a + b;
    return add
}


// This function returns an anonymous function (unnamed function)
const returnsAnAnonymousFunction = () => {
    return (a,b) => a + b
}