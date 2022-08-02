  //   { 1 }
//   *****
//   *****
//   *****


//let num=3;
// for(i=1; i<=5; i++){
//   let stars=' '
//   for(j=1; j<=5; j++){
//     stars +='*'
//   }
//       console.log(stars)
//     }





    // let num=3;
    // for(i=1; i<=num; i++){
    //     let stars=''
    //     for(j=1; j<=num-i; j++){
    //         stars = stars + ''
    //     {
    //         for(k=1; k<=i; k++){
    //             stars= stars + '*'
    //         }
    //         console.log(stars)
    //     }
    //     }
    // }

    // let num=5;
    // let count=1;
    // for(let i=1; i<=num; i++){
    //     let stars=''
    //     for(let j=1; j<=num-i; j++){
    //         stars = stars + ' '
    //     {
    //         for(let k=1; k<=(2*i)-1; k++){
    //             stars += count;
    //             count +=1;
    //         }
    //         console.log(stars)
    //     }
    //     }
    // }


    //   >>>>>>>     function Topic DECLARATION AND DEFINITION   >>>>>>

    // function sumofSquaredigit(num){
    //     let sum=0;
    //     while(num != 0){
    //     let rem = num % 10;
    //     sum = sum + (rem ** 2);
    //     num = Math.floor(num / 10);
    // }
    //      return sum;
    // }
    // let ans = sumofSquaredigit(49)
    // console.log(ans)
    // console.log(sumofSquaredigit(897))

    // >>>>>>>>    ARROW FUNCTION    >>>>>

    // let sumofSquaredigit = (num) => {
    //     let sum=0;
    //     while(num != 0){
    //     let rem = num % 10;
    //     sum = sum + (rem ** 2);
    //     num = Math.floor(num / 10);
    // }
    //      return sum;
    // }
    // let ans = sumofSquaredigit(49)
    // console.log(ans)

    //  >>>>> IIFE - Immediately invoke function expression  >>>>>>

    // let ans = (function sumofSquaredigit(num) {
    //     let sum=0;
    //     while(num != 0){
    //     let rem = num % 10;
    //     sum = sum + (rem ** 2);
    //     num = Math.floor(num / 10);
    // }
    //      return sum;
    // }) (49);
    // console.log(ans);

    //>>>>>>>  ANNONYMS FUNCTION  >>>>

    // let ans = (function (num) {
    //     let sum=0;
    //     while(num != 0){
    //     let rem = num % 10;
    //     sum = sum + (rem ** 2);
    //     num = Math.floor(num / 10);
    // }
    //      return sum;
    // }) (49)
    
    // console.log(ans)

    // >>>>>>>
    //   Factorial of an number  and this is Pure Function >>>>>>
    
    //   function fact(num){
    // let fact =1;
    // for(let i=num; i>0; i--){
    //     fact= fact * i;
    //     }
    //     return fact;
    // }
    // console.log(fact(5));

//    >>> This is Impure Function  but javascript always says make Pure Function
   
//     let num=5;
//     function fact(){
//   let fact =1;
//   for(let i=num; i>0; i--){
//       fact= fact * i;
//       }
//       return fact;
//   }
//   console.log(fact());



//     Factorial of an number   >>>>>>
    
// function fact(num){
// let fact =1;
// for(let i=num; i>0; i--){
//   fact= fact * i;
//   }
//   console.log(fact);
// }
// console.log(fact(5));

//Factorial of an number   >>>>>>
    
// function fact(num){
// let fact =1;
// for(let i=num; i>0; i--){
//   fact= fact * i;
//   }
//   return fact;
// }
// let ans= fact(5)
// console.log(ans);

//    >> ArRow Function Of FACTORIAL  >>>
    // let fact =(num) => {
    // let fact =1;
    // for(let i=num; i>0; i--){
    //   fact= fact * i;
    //   }
    //   return fact;
    // }
    // let ans= fact(5)
    // console.log(ans);


// Pure function accepts some parameter and always return the result.
// impure function is not necessary to accept the parameter as well as not always returns the result.
 
    //  >>> IIFE FUNCTION MAKING FACTORIAL  >>>>
   
    // let ans =(function fact(num){
    // let fact =1;
    // for(let i=num; i>0; i--){
    //   fact= fact * i;
    //   }
    //   return fact;
    // })  (5)
    // console.log(ans);

  //  Annoyms function are the function without the name  and annoyms function runs very few cases.  
  //  function are first class citizens.
   // function a(x,y) {
     //   return x + y 
    //}
    //let b= a;       // we can pass the function into a variable
    //console.log(b(6,7));

   //  i can pass one function as a parameter of another function and i can return the function from the function. 

   //    HIGH ORDER FUNCTION >>


//    function b(x,y){
//     return x + y;
//    }
//    function a(b){
//     return b(6,7);
//    }
//    console.log(a(b));

    //  >>>> Call Back Function  >>>

    // function a(){
    //  console.log("hello World")
    // }
    // setTimeout(a,4000)    //  4000 means 4 second


    //   >>>> Differnce in SetTimeout and SetInterval >>>  Interview
    //  in setInterval the function will run after every given time interval.
    //  setTimeout the function will run once the given time is completed.

    // <<< Differnce between let , char, var  >>>

    //  Arrow function why we use. and when Arrow function introduced in Js.  >> It was introduced in ES6 in 2015

    // function a(){
    //     console.log("hello World")
    //    }
    //    setInterval(a,4000) // after every 4 second it will print hello world.


    // setTimeout(function(){
    //     console.log("Hello 11");
    // },4000)
    // function a(){
    //     console.log("hello 22");
    // } 
    // a()



    // function my_callback(a){
    //     return a();
    // }
    // my_callback(() => {
    //     console.log("hello Bhai");
    // });



    // setTimeout(() =>{
    //     console.log("hello yaar 1");
    // },3000)
    // setTimeout(() =>{
    //     console.log("hello yaar 2");
    // },3000)
    // setTimeout(() =>{
    //     console.log("hello yaar 3");
    // },3000)
    // function a(){
    //     console.log("hello");
    // }
    // a();

//  >>>>>> Wednesday  >>>>>>
















//  >>>>>> Thursday  >>>>>>>

// setTimeout (function(){
// console.log('first')
// },5000)

// setTimeout (function(){
// console.log('second')
// },4000)


// let a= 10;
// console.log(a);
// let b= 12;
// console.log(b);



// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 2000);
// console.log('second');


// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 5000);
// setTimeout(function(){
//     console.log('Secondcalling');
// }, 2000);
// console.log('second');



// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 0);
// console.log('second');


// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 0);
// console.log('second');
// console.log('third');
// console.log('fourth');
// console.log('fifth');



// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 2000);
// let i = 0;
// while(i <= 10000)
// console.log('second');


// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 2000);
// let i = 0;
// while(i <= 10000){
// console.log('second',i);
// i++;
// }


// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 2000);
// setTimeout(function(){
//     console.log('Secondcalling');
// }, 2000);
// console.log('second');


// console.log('first');
// setTimeout(function(){
//     console.log('calling');
// }, 2000);
// setTimeout(function(){
//     console.log('Secondcalling');
// }, 1000);
// let i = 0;
// while(i <= 10000){
//     console.log("Second ")
// }


//  in Java script function is a first class citizen
//  High Order Function --->   any function which takes functions as a parameter or returns a function is called High Order function.

// CALLBACK FUNCTION





















//   <<<<<< FRIDAY >>>>>>>>>

// console.log('initial')
// function logger() {
//     console.log('third')
// }
// setTimeout(function(){
//     console.log('first')
// }, 3000)
// setTimeout(function(){
//     console.log('Sachin');
//     logger();
// },0)
// console.log('second')

















//     1
//     12 
//     123
//     1234
//     12345

// let num=5;
// for(let i=1; i<=5; i++){
//   let stars= ''
//     for(let j=1; j<=i; j++){
//         stars = stars + j
//     }
//     console.log(stars)
// }


// 1
// 22
// 333
// 4444
// 55555

// let num=5;
// for(let i=1; i<=5; i++){
//   let stars= ''
//     for(let j=1; j<=i; j++){
//         stars = stars + i
//     }
//     console.log(stars)
// }

// 1
// 23
// 456
// 78910
// 1112131415

// let num=5;
// let count = 1;
// for(let i=1; i<=5; i++){
//   let stars= ' '
//     for(let j=1; j<=i; j++){
//         stars = stars + count
//         count = count + 1
//     }
//     console.log(stars)
// }



// 1
// 00
// 111
// 0000
// 11111

// let num=5;

// for(let i=1; i<=num; i++){
//   let stars= ''
//     for(let j=1; j<=i; j++){
//         let count = 0;
//         if(i % 2 ===0){
//          count= 0;
//         } 
//         else {
//              count = 1;
//         }
//         stars = stars + count;

//     }
//     console.log(stars)
// }


// 1
// 10
// 101
// 1010
// 10101

// let num=5;

// for(let i=1; i<=num; i++){
//   let stars= ''
//     for(let j=1; j<=i; j++){
//         let count = 0;
//         if(j % 2 ===0){
//          count= 0;
//         } 
//         else {
//              count = 1;
//         }
//         stars = stars + count;

//     }
//     console.log(stars)
// }



//  let num=5;

// for(let i=1; i<=num; i++){
//   let stars= ''
//   if(i % 2 === 0){
//     for(let j=i; j>=i; j--){
//         let count = 0;
//         if(j % 2 ===0){
//          count= 0;
//         } 
//         else {
//              count = 1;
//         }
//         stars = stars + count;

//     }
//     console.log(stars)
//   } else {
//     for(let j=1; j<=i; j++){
//         let count = 0;
//         if(j % 2 ===0){
//          count= 0;
//         } 
//         else {
//              count = 1;
//         }
//         stars = stars + count;

//     }
//     console.log(stars)
//   }
  
// }

// let num=5;
// for(let i=1; i<=num; i++){
//     let stars= ''
//     for(j=1; j<=num-1; j++){
//     stars += ''
//     }
//     for(let k=1; k<=i; k++){
//         stars += k
//         }
//     console.log(stars)
// }

// for(let i=5; i>=1; i--){
//     let stars =''
//     for(let j=5; j>=1; j--){
//         stars ='*'
//     }
//     console.log(stars)
// }


// let num= 3;
// for(let i=1; i<=num; i++){
//     let stars = ''
//     for(let j=1; j<=num-i; j++){
//         stars += ' '
//     }
//         for(let k=1; k<=i; k++){
//             stars += '*'
//         }
//         console.log(stars)
//     }



 
































//   >>>>>>>>>> Monday  >>>>>>>>>>>>\


//let name = ['sachin', 'raj', 'ziyz', 'priya', 'mohan']













/// >>>>>>>>>>>>>  4 july MONDAY  >>>>>>>>> 

let num = 10;
console.log(num);
num = 'vasanth'
console.log(num)












// >>>>>>>>>>>>>>>>>>  06 july WedNESDAY  >>>>>>>>>>>>>














// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.slice(0,2))

//let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.slice(2,5))  // 'sangakara, dravid
//   console.log(names.slice(3,0))    // Empty value 
//console.log(names.slice(3,3))   // Empty array
//console.log(names.slice(1,3))  // kumar, sangakara
//console.log(names.slice(1))  //   [ 'kumar', 'sangakara', 'dravid' ]
//names.splice(4,0, 'sachin');
//console.log(names)  //  [ 'vasanth', 'kumar', 'sangakara', 'dravid', 'sachin' ]

//names.slice(1,3) 
//console.log(names)  //   [ 'vasanth', 'kumar', 'sangakara', 'dravid' ]


//let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// names.splice(1,0, 'sachin');
// console.log(names)   //  [ 'vasanth', 'sachin', 'kumar', 'sangakara', 'dravid' ]

//  names.splice(2,1, 'sachin');
//  console.log(names)  //   [ 'vasanth', 'kumar', 'sachin', 'dravid' ]



// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names[0], names[1], names[2]);  //    vasanth kumar sangakara
// names.splice(1,0, 'sachin');
// console.log(names[0], names[1], names[2]);   ///   OUTPUT >> Vasanth sachin kumar

  /// >>>>>  special property of slice----  for revese a index.

  // let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
//  console.log(names.slice(0, -2))    /// [ 'vasanth', 'kumar' ]
// console.log(names.slice(0, -3))  //  [ 'vasanth' ]
//console.log(names.slice(-4, 2))   // [ 'vasanth', 'kumar' ]
// console.log(names.slice(1, 0))  // []

// console.log(names.slice(0, -1))  // [ 'vasanth', 'kumar', 'sangakara' ]
// console.log(names.slice(1))   //   [ 'kumar', 'sangakara', 'dravid' ]
// console.log(names.slice(1, -1))    //  [ 'kumar', 'sangakara' ]


// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.slice(2, -1));  // [ 'sangakara' ]
// console.log(names.slice(-4, 3));  //   ['vasanth', 'kumar', 'sangakara' ]
// console.log(names.slice(2));    //   [ 'sangakara', 'dravid' ]
// console.log(names.slice(-2));     //    [ 'sangakara', 'dravid' ]


// console.log(names.slice(-7));   //        [ 'vasanth', 'kumar', 'sangakara', 'dravid' ]




// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// function findName(name){
// for(let i=0; i<names.length; i++){
//   if(names[i] === name) return true;

//   }
//   return false
// }
// console.log(findName('sangkara'));   ///   true



// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// function findName(name){
// for(let i=0; i<names.length; i++){
//   //if(names[i] === name) return true;
// console.log(names[i])
//   }
//  // return false
// }
// console.log(findName('sachin'));     //   vasanth  kumar sangakara dravid undefined


// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// function findName(name){
// for(let i=0; i<names.length; i++){
//   if(names[i] === name) return true;
// console.log(names[i])
//   }
//  return false
// }
// console.log(findName('sachin'));

















// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.includes('sachin'));  // >>  false

// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.includes('kumar'));   // >> true


// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.includes('kumar', 2));     //  >>> false

// let names = ['vasanth', 'kumar', 'sangakara', 'dravid', 'kumar'] 
// console.log(names.includes('kumar', 2));    // >> true







// first non repeating number
//  let leftHand = [ 1, 3, 4, 3, 2, 5, 7, 1 ]
//  let rightHand = []
//  for(let i = 0; i<leftHand.length; i++){
//   if(rightHand.includes(leftHand[i])) {
//    console.log(leftHand[i]);
//    break
//  }
//   else{
//     rightHand.push(leftHand[i])
//   }
// }      //  >>>>>>>> outPUT  >>    3
 


//find repeating number
// let nums = [ 1, 3, 4, 3, 2, 5, 7 ]
//  for(let i = 0; i<nums.length; i++){
//   if(nums.includes(nums[i], i+1)) {
//    console.log(nums[i]);
//   }  
//  }         // >>>> OUTPUT>>>>> 3
  

//  let nums = [ 1, 3, 4, 3, 2, 5, 7,1 ]
//  for(let i = 0; i<nums.length; i++){
//   if(nums.includes(nums[i], i+1)) {
//    console.log(nums[i]);
//    break
//   }  
//  }       //    >>>> OUTPUT>>>>> 1




// let nums = [ 1, 3, 4, 3, 2, 5, 7,1 ]
//  for(let i = 0; i<nums.length; i++){
//   let value = nums [i]
//   if(nums.includes(value, i+1)) {
//    console.log(value[i]);
//    break
//   }  
//  }    





















































//>>>>>>>>>>>>>>>  7 JULY 2022 THURSDAY  >>>>>>>>>>>>>



// let nums= [-1, -20, -32, -17, -89, -10, -27, -100]
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//   let currentValue = nums[i]
//   if(max < currentValue){
//     max= currentValue

//   }
//   }
// console.log(max)     ///  output >>>> 




// let nums= [-1, -20, -32, -17, -89, -10, -27, -100]
// let min = nums[0];
// for(let i=1; i<nums.length; i++){
//   let currentValue = nums[i]
//   if(min < currentValue){
//     min= currentValue

//   }
//   }
// console.log(min)     //  OUTPUT >>>  -1



// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// console.log(nums.lastIndexOf(2));



// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// for(let i=0; i<nums.length; i++){
//   if(nums.indexOf(nums[i])=== nums.lastIndexOf(nums[i])){
//     console.log(nums[i]);
//   }
// }        //..  >>>>>>>>>  OUTPUT  >>>    3   4


// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// function getFirstNonRepeatingNo(nums){
//   for(let i=0; i<nums.length; i++){
//      if(nums.indexOf(nums[i])=== nums.lastIndexOf(nums[i])) return nums[i]

//      }
//     }

// console.log(getFirstNonRepeatingNo(nums));   ///   >>>> OUTPUT   >>>   3


// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// function getFirstNonRepeatingNo(nums){
//   for(let i=0; i<nums.length; i++){
//      if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) 
//      return nums[i]

//      }
//     }

// console.log(getFirstNonRepeatingNo(nums));   ///   >>>> OUTPUT   >>>   




// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// console.log(names.toString());                            // OUTPUT>>>>>       mahi,ramu,jamu,praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// console.log(names.join());                                   // OUTPUT>>>>>  mahi,ramu,jamu,praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
//  console.log(names.join('*'));                           // >>>. OUTPUT>>>  mahi*ramu*jamu*praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// let nums = [1, 2, 3]
// console.logs(names.concat(nums));



// let nums = [1, 2, 1, 2, 3, 4, 2, 8, 9]
// let newArr =[]
// for(let i=0; i<nums.length; i++){
//   if(nums[i] < 3){
//     newArr.push(nums[i])
//   }
// }
// console.log(newArr)             //>>>>>>>>>>>>>OUTPUT>>>  [1, 2, 1, 2, 2 ]


// let nums = [1, 2, 1, 2, 3, 4 ]
// let newArr = nums.filter((num) => {
//   console.log(num)
// })                  //  OUTpUT>>>>>>    1  2  1  2  3  4               




// let newArr = [1, 2, 3, 4].filter((num) => {
//   console.log(num)
// })                     //  >>>>OUTPUT >>>>>>>>>>>>>>             1 2 3  4

// let newArr = [1, 2, 3, 4].filter((num) => {
//     console.log(`${num} ---> ${num < 3 }`);
//     return num < 3
//   })      
// console.log(newArr)                 //  OUTPUT>>>>>           1 ---> true    2 ---> true    3 ---> false      4 ---> false    [ 1, 2 ]



















