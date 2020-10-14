
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
    if(matrix.length>0)
    {
    for(let i in matrix)
    {
        for(let j in matrix[i])
        arr.push(matrix[i][j]);
    }
    arr.sort(function (a,b) { return a-b;});
    }
    return arr;
}
