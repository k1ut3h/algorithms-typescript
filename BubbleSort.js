function BubbleSort(arr) {
    var j = 0;
    while (j < arr.length) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
        j++;
    }
    console.log(arr);
}
var arr = [1, 2, 4, 5, 3, 7, 123, 134, 5, 234, 5, 12, 45, 75, 6, 34, 67, 84, 679, 5, 65, 8679];
console.time("test_timer");
BubbleSort(arr);
console.timeEnd("test_timer");
