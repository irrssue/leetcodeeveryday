// source = https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};


// Explanation:
// so the problem is to create a function that no matter the input in it the only ouput is "Hello Wold" so, first create a function using var and named it as you like here in my case its createHelloWorld with carmal case and since its funciton, make it a function using function keyword and since we don't need input from user you can leave the function's parameters and all you need to do is return soemthing when the funcion is called, here in this case "Hello World" so we return it by donig so.