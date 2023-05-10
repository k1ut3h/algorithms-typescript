function quicksort(arr:number[]):number[]{
  if (arr.length<2){
    return arr;
  }
  let idx = Math.floor(arr.length/2);
  let pivot = arr[idx];
  let smaller:number[] = [];
  let larger:number[] = [];
  for (let i=0; i<arr.length; ++i){
    if (i!=idx){
      if (arr[i]<=pivot){
        smaller.push(arr[i]);
      } else {
        larger.push(arr[i]);
      }
    }
  }
  return quicksort(smaller).concat([pivot]).concat(quicksort(larger));
}

console.log("Non Sorted: ", [5,4,3,2,1]);
console.log("Sorted: ", quicksort([5,4,3,2,1]));
