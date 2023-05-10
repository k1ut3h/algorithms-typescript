function BubbleSort(arr:number[]):number[]{
  let i = 0;
  while(i<arr.length){
    for(let j=0; j<arr.length - 1 -i; ++j){
      if(arr[j+1]<arr[j]){
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
    i+=1;
  }
  return arr;
}

let arr = [6,5,4,3,2,1,0];
console.log("Given Array: ", arr);
console.time("test_timer");
console.log("Sorted Array", BubbleSort(arr));
console.timeEnd("test_timer");
