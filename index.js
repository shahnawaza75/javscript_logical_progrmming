// prime number :
// // let n=18;
// // let x=0;

// // for (let i=2; i<n; i++){
// //     if (n%i==0){
// //         x=1;
// //     }

// Prime number:




// function primenum(n) {

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return "prime not number";
//         }

//     }
//     return "prime number";
// }

// console.log(primenum(17));


// }
// if (x==1){
//     console.log("it is not a prime number");
// }else {
//     console.log("it is a prime number");
// }

// let n = 5;
// if (n % 2 == 0) {
//     console.log("it is a even number");
// } else {
//     console.log("not a even number");
// }


// for (let i = 1; i <= 5; i++) {

//     for (let k = 5; k >= i; k--)
//         document.write("&nbsp ");


//     for (j = 1; j <= i; j++)
//         document.write("* ");


//     document.write("<br>");

// }

// function func(n){
// let i=1;
// let fact=1;
// for(i=1; i<=n; i++){
//     fact *=i;
// }
// return fact;

// }

// console.log(func(5));

// function func(n){
//    let i =1;
//    fact=1;
//    while(i<=n){
//     fact*=i;
//     i++;
//    }
//    return fact;

//     }

//     console.log(func(5));





// function func() {

//     let str = "madam";
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[str.length - 1 - i]) {


//             return "no";
//         }

//     }
//     return "yes";
// }
// console.log(func());

// function func(n) {
//     var sum = 0, r, temp;
//     temp = n;

//     //Armstrong Number
//     while (n != 0) {
//         r = n % 10;
//         sum = sum + r * r * r;
//         n = parseInt(n / 10);

//     }

//     if (temp == sum)
//         document.write("Armstrong");
//     else
//         document.write("Not Armstrong");

// }
// func(153);

//Palindrome Number
//  while(n!=0)
//    {
//      r= n%10;
//      sum= sum*10 + r;
//      n= parseInt(n/10);

//    }

//    if(temp==sum)
//    document.write("Palindrome");
//    else
//    document.write("Not Palindrome");

//  }
//    func(373);

//Reverse Number

// var n = prompt("enter a number");

// var sum = 0, r;
// let temp = n;

// while (temp != 0) {
//     r = n % 10;
//     sum = sum * 10 + r;
//     temp = parseInt(temp / 10);
// }
// document.write(sum)


// */
// //sum of digits wrong
// // function func(n) {
// //     var sum = 0, r;
// //     while (n != 0) {
// //         r = n % 10;
// //         sum = sum + r;
// //         n = parseInt(n / 10);
// //     }
// //     console.log(sum);
// // }
// // func(342);


