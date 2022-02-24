module.exports = function towelSort (matrix) {
  let result = [];

  if(matrix == undefined) return result;

  for(let i = 0; i < matrix.length; i++) {
    let x = matrix[i];
    if(i % 2 != 0) {
      x.reverse();
    }
    for(let j = 0; j < x.length; j++) {
      result.push(x[j]);
    }
  }

  return result;
}
