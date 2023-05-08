function binarySearch(array: Array<number>, val: number):number{
  let arr = array.sort();
  let lo = 0;
  let hi = arr.length;

  do{
    let mid = Math.floor((lo+hi)/2);
    if (arr[mid]==val){
      return mid;
    } else if (arr[mid]>val){
      lo += mid+1;
    } else {
      hi -= mid;
    }
  }while(hi>lo);

  return -1;
}

console.log(binarySearch([2,3,1,5,4], 3));
