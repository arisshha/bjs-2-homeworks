function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function equallyNull(...arr) {
  if (arr.length === 0) {
    return 0;
  }
}

function summElementsWorker(...arr) {
  if (equallyNull(...arr) === 0) return 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (equallyNull(...arr) === 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (equallyNull(...arr) === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (equallyNull(...arr) === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
