function BubbleSort(arr:number[]):number[]{
  let bound = arr.length;
  let i = 0;
  while(i<bound){
    for(let j=0; j<arr.length; ++j){
      if(arr[j+1]<arr[j]){
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
    bound-=1;
    i+=1;
  }
  return arr;
}

let arr = [23,1,54,2,7,4,3];
console.log("Given Array: ", arr);
console.time("test_timer");
console.log("Sorted Array", BubbleSort(arr));
console.timeEnd("test_timer");
