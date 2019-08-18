/*
Problems

You are given an n x n 2D matrix representing an image.
 
Rotate the image by 90 degrees (clockwise).
 
You need to do this in place.
 
Note that if you end up using an additional array, you will only receive partial score.
 
Example:
 
If the array is 
 
1 2 3 4 5 6 7 8 9
 
Then the rotated array becomes: 
 
7 4 1 8 5 2 9 6 3
 
Input:
 
The first line contains an integer 'T' denoting the total number of test cases.
In each test cases, the first line contains an integer 'N' denoting the size of the 2D square matrix.
 
And in the second line, the elements of the matrix A[][], each separated by a space in row major form.
 
 
Output:
 
For each test case, print the elements of the rotated array row wise, each element separated by a space. Print the output of each test case in a new line.
 
 
Constraints:
 
1 ≤ T ≤ 70
1 ≤ N ≤ 10
1 ≤ A [ i ][ j ] ≤ 100
 
 
Example:
 
Input:
 
2
3
1 2 3 4 5 6 7 8 9
2
56 96 91 54
 
Output:
 
7 4 1 8 5 2 9 6 3
91 56 54 96 
*/
function rotate90(lineSize, array) {
    let k = 0;
    for (let i = lineSize; i > 0; --i) {
        for (let j = 1; j <= lineSize; ++j) {
            let tmp = array[i * j - 1 + k];
            array.splice(i * j - 1 + k, 1);
            array.unshift(tmp);
        }
        k += lineSize
    }

    return array;
}

console.log(rotate90(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(rotate90(2, [56, 96, 91, 54]))

