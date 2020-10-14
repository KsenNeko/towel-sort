
// You should implement your task here.

module.exports = function towelSort (matrix) {
  function towelSort (matrix) {
    let arr = [];
    if(matrix.length>0)
    {
    for(let i in matrix)
    {
        for(let j in matrix[i])
        if(i%2==0)
        arr.push(matrix[i][j]);
        else arr.push(matrix[i][matrix[i].length-j-1])
    }
    
    }
    return arr;
}

