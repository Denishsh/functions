// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]
  max = arr[0]
  sum = 0

  for(let i of arr){
    sum += i
    if (i < min){
      min = i
    }
    if (i > max){
      max = i
    }
  }

  avg = parseFloat((sum/arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i of arr){
    sum += i
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for(let arr of arrOfArr){
    let sum = func(arr)
    if(sum>max){
      max = sum
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0]
  let max = arr[0]
  for(let i of arr){
    if (i < min){
      min = i
    }
    if (i > max){
      max = i
    }
  }
  let diff =  Math.abs(max - min)
  return diff
}
