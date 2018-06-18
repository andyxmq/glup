define(['myLib'],function(aaa){
    var add = function(x,y){
        return x+y+aaa.doSomething();
    }
    return {
        add: add
    };
});