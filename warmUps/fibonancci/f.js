var arr  = [0,1];
var sum = 0;
for(var i=1 ; i< 99 ; i++){
    arr.push(arr[i] + arr[i-1]);
}
console.log(arr.length);
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(arr);
console.log(sum);