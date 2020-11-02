// Please swap values 5 and 7
let arr = [3, 5, 6, 7];

temp = arr[1]; // We now make 5 an abstract "x" value--5 == temp // [3, temp, 6, 7]

arr[1] = arr[3]; // That "x" value is now assigned to the array's 3rd place--7 == temp // [3, 5,]

arr[3] = temp; // Now the array's 3rd place's value, the abstract "x", is turned in...

console.log(arr);