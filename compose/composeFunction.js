

//Compose function (x -number, fns - array function)
const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
//Compose function (x -array number, fns - array function)
const composeWithArgs =  (...fns) => fns.reduceRight((res, fn) => (...arg) =>fn(res(...arg)));

