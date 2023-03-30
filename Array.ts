function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  const numbers = [4, 8, 2, 1, 5, 10];
  const max = findMax(numbers);
  console.log(max); 
    


