/*
Given an array with positive number the task to find the largest subsequence from array that contain elements which are Fibonacci numbers.

Input:
The first line of input contains an integer T denoting the no of test cases. Then T test cases follow. Each test case contains an integer N denoting the size of the array. Then in the next line are N space separated values of the array.

Output:
For each test case in a new line print the space separated elements of the  longest fibonacci subsequence.

Constraints:
1<=T<=100
1<=N<=100
1<=A[]<=1000

Example:
Input:
2
7
1 4 3 9 10 13 7
9
0 2 8 5 2 1 4 13 23

Output:
1 3 13
0 2 8 5 2 1 13 
** For More Input/Output Examples Use 'Expected Output' option **
*/

function fibonacci(n) {
    if (this.cache === undefined){
        this.cache = [];
    } else if (this.cache[n] !== undefined) {
        return this.cache[n];
    }

    if (n < 0) {
        throw new Error("Negative number");
    }
    else if (n == 0) return 0;
    else if (n == 1) return 1
    else {
        this.cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        return this.cache[n];
    }
}

const fibos = Array.from(Array(1000).keys()).map(x => fibonacci(x));

function getFibos(suit){
    return suit.filter((x) => fibos.find(y => x == y));
}

console.log(getFibos([1, 4, 3, 9, 10, 13, 7]));

console.log(getFibos([0, 2, 8, 5, 2, 1, 4, 13, 23]))


