function receivesAFunction(callback){
    return callback()
}

console.log(receivesAFunction(function sum(num1=1,num2=3){return num1+num2}))

function returnsANamedFunction(){
    function namedFunction(){
        pass
    }
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        pass
    };
}