// link - https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

// it has function and the accepting permieter n, so bascially if you put 5 it bascially equal to n and return n++ means n + 1 so 5 + 1 = 6,
