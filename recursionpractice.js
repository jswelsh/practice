// Only change code below this line
/* function countdown(n){
    
    if (n < 1) {
        return [];
    } else {
        const countDownArray = countdown(n-1);
        countDownArray.unshift(n);
        return countDownArray;
    }
    }
  console.log(countdown(6))

 */
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
    return [];
    } else {
      const range = rangeOfNumbers(startNum + 1, endNum)
      range.unshift(startNum);
      return range
    }
  };
console.log(rangeOfNumbers(1,5))  