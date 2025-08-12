function generateSpiralMatrix(n) {
  const matrix = new Array(n).fill(null).map(() => new Array(n).fill(0));
 let top = 0,
      bottom = n - 1,
      left = 0,
      right = n - 1;
 let num = 1;
  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;
    // Traverse downwards
      for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;
    // Traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }
    // Traverse upwards
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }
 return matrix;
}
console.log(generateSpiralMatrix(3));