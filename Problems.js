// Task 1: Simple Programs todo for variables
// 1)let myvar =1;
// console.log(myvar);

// 2)let a,b,c,d;
// console.log(a,b,c,d);

// 3)var a= "arun";
// var b= "kumar";
// var age =20;
// console.log(a,b,age);

// 4)var a="arun",b="kumar",age=20;
// console.log(a,b,age);

// 5)let a="arun",b=true, c,d=null ;
// console.log(typeof(d));

// 6)let a="20";
// console.log(parseInt(a));
// console.log(Number(a));
// console.log(+a);

// Print the contents of the input variable
// var input = [
//     ["0001”, “Roman Alamsyah”, “Bandar Lampung”, “21/05/1989”, “Membaca"],
//     ["0002”, “Dika Sembiring”, “Medan”, “10/10/1992”, “Bermain Gitar"],
//     ["0003”, “Winona”, “Ambon”, “25/12/1965”, “Memasak"],
//     ["0004”, “Bintang Senjaya”, “Martapura”, “6/4/1970”, “Berkebun"]]
//     function dataHandling(e){
//         for (var i = 0; i < input.length; i++)
//         {
           
//            }
//            console.log(e);     
//     }
// dataHandling(input);

// find Output
// obj = {1:"one","11":1,"name" : "arun"}
// By Theory Object keys cannot be a Number.

var Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var s = "";
 
for (var i = 0; i < 11; i++) {
 s+=Arr[i]; 
}
console.log(s);
