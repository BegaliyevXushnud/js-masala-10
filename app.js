
// 53-masala
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 20 },
//     { name: 'David', age: 15 }
// ];
//
// function filterAdultUsers(users) {
//   return   users.filter(user => user.age < 18);
// }
//
// // Test case
// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]





// 54-masala
// function findZeroIndices(matrix) {
//    let result = [];
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if(matrix[i][j] === 0) {
//             result.push([i,j]);
//         }
//     }
// }
// return result;
// }
// console.log(findZeroIndices([
//     [1, 0, 3],
//     [4, 5, 0],
//     [7,  0,9]
// ]));
// // Output: [[0, 1], [1, 2], [2, 1]]






// 55-masala
// function mostFrequentElement(arr) {
//    let element = {};
//    let maxcount = 0;
//    let mostFrequent = 0;
//     for(let num of arr) {
//         element[num] = (element[num] || 0) + 1;
//         if(element[num] > maxcount ) {
// maxcount = element[num];
// mostFrequent = num;
//         }
//     }
//     return mostFrequent;
// }
//
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4








// 56-masala
// function rotateMatrix(matrix) {
//     let new_matri = new Array();
//     for (let j = 0; j < matrix[0].length; j++) {
// new_matri.push([])
//         for(let i = matrix.length-1; i >-1; i--){
//             new_matri[j].push(matrix[i][j])
//         }
//     }
//     return new_matri
// }
// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));
// // Output: [
// //   [7, 4, 1],
// //   [8, 5, 2],
// //   [9, 6, 3]
// // ]







// 57-masala
// function filterUniqueElements(arr) {
// let count =  arr.reduce(function (x,y) {
//     x[y] = x[y] ? x[y] + 1 : 1;
//     return x;
// },{});
// return Object.keys(count).filter(function (k){
//     return count[k] === 1;
// })
// }
// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5]).join()); // Output: [1, 3, 5]





// 58-masala
// function rotateArray(nums, k) {
//   let n = nums.length;
//   k = k % n;
//   return nums.slice(-k).concat(nums.slice(0,n-k))
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// // Output: [5, 6, 7, 1, 2, 3, 4]