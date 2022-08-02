
//////  TUESDAY    LECTURE BY  VASANTH SIR>> >>>>>>>>>>   
// getName()
// console.log(fname);
// console.log(lname);

// let lname = 'vasanth';
// var fname = 'surya';
// function getName(){
//   printName()
//   console.log('calling');
//   function printName() {
//     console.log(place);
//     let age  = 10;
//     console.log(age);
//     var place = 'chennai'
//   }
// }                         //////outPUT >>>>>  undefined    10    calling  undefined


// 1
// 00
// 111
// 0000
// 11111

// let num=5;
// for(let i=1; i<=num; i++){
//   let stars = ''
//   for(let j=1; j<=i; j++){
//     if(i % 2==0){
//       stars += 0;
//      } else {
//         stars += 1
//       }
//     }
//     console.log(stars)
//   }



// 1
// 01
// 101
// 0101
// 10101

// let num=5;
// for(let i=1; i<=num; i++){
//   let stars = ''
//   for(let j=1; j<=i; j++){
//     if((i + j) % 2==0){
//       stars += 1;
//      } else {
//         stars += 0
//       }
//     }
//     console.log(stars)
//   }



// let num =5;
// let count= 1;
// for(let i=1; i<=num; i++){
//   let stars= ''
//   for(let j=1; j<=i; j++){
//     stars += count; + ' '
//     count +=1;
//   }
//   console.log(stars)
// }

// 1
// 23
// 123
// 1231
// 23123

// let num =5;
// let count= 1;
// for(let i=1; i<=num; i++){
//   let stars= ''
//   for(let j=1; j<=i; j++){
//     if(count > 3){
//       count = 1
//     }
//     stars += count; + ' '
//     count +=1;
//   }
//   console.log(stars)
// }


// 5 
// 5 4 
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for(let i=5; i>=1; i--){
//   let stars= ''
//   for(let j=5; j>=i; j--){
//     stars +=  j + ' '
//     } 
//   console.log(stars)
// }


// 5 
// 4 5 
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

// for(let i=5; i>=1; i--){
//   let stars= ''
//   for(let j=i; j<=5; j++){
//     stars +=  j + ' '
//     } 
//   console.log(stars)
// }














///////WEDNESDAY    VASANT SIR  >>>>>>>>>>>

// function changeNameInDb(name){
//   console.log(`updating name $(name) in db`)
// }
// changeNameInDb('vasanth')                  /////output  >>>>   updating name $(name) in db


// function greetUser(name){
//   return `Welcome !!! $(name)`
// }
// const greeting = greetUser('vasanth');
// console.log(greeting)                          /// output>>>>  Welcome !!! $(name)


// let userPin = 1234;
// function getPin(id){
//   return 1235;
// }
// let originalPin = getPin(1)
// if(originalPin === userPin){
//   NetworkInformation
//   fnk
// } else{
//   console.log("Invalid pin"); 
// }
  













//////++++++><<<<<<<<

//   //   { 1 }
// //   *****
// //   *****
// //   *****


// //let num=3;
// // for(i=1; i<=5; i++){
// //   let stars=' '
// //   for(j=1; j<=5; j++){
// //     stars +='*'
// //   }
// //       console.log(stars)
// //     }





//     // let num=3;
//     // for(i=1; i<=num; i++){
//     //     let stars=''
//     //     for(j=1; j<=num-i; j++){
//     //         stars = stars + ''
//     //     {
//     //         for(k=1; k<=i; k++){
//     //             stars= stars + '*'
//     //         }
//     //         console.log(stars)
//     //     }
//     //     }
//     // }

//     // let num=5;
//     // let count=1;
//     // for(let i=1; i<=num; i++){
//     //     let stars=''
//     //     for(let j=1; j<=num-i; j++){
//     //         stars = stars + ' '
//     //     {
//     //         for(let k=1; k<=(2*i)-1; k++){
//     //             stars += count;
//     //             count +=1;
//     //         }
//     //         console.log(stars)
//     //     }
//     //     }
//     // }


//     //   >>>>>>>     function Topic DECLARATION AND DEFINITION   >>>>>>

//     // function sumofSquaredigit(num){
//     //     let sum=0;
//     //     while(num != 0){
//     //     let rem = num % 10;
//     //     sum = sum + (rem ** 2);
//     //     num = Math.floor(num / 10);
//     // }
//     //      return sum;
//     // }
//     // let ans = sumofSquaredigit(49)
//     // console.log(ans)
//     // console.log(sumofSquaredigit(897))

//     // >>>>>>>>    ARROW FUNCTION    >>>>>

//     // let sumofSquaredigit = (num) => {
//     //     let sum=0;
//     //     while(num != 0){
//     //     let rem = num % 10;
//     //     sum = sum + (rem ** 2);
//     //     num = Math.floor(num / 10);
//     // }
//     //      return sum;
//     // }
//     // let ans = sumofSquaredigit(49)
//     // console.log(ans)

//     //  >>>>> IIFE - Immediately invoke function expression  >>>>>>

//     // let ans = (function sumofSquaredigit(num) {
//     //     let sum=0;
//     //     while(num != 0){
//     //     let rem = num % 10;
//     //     sum = sum + (rem ** 2);
//     //     num = Math.floor(num / 10);
//     // }
//     //      return sum;
//     // }) (49);
//     // console.log(ans);

//     //>>>>>>>  ANNONYMS FUNCTION  >>>>

//     // let ans = (function (num) {
//     //     let sum=0;
//     //     while(num != 0){
//     //     let rem = num % 10;
//     //     sum = sum + (rem ** 2);
//     //     num = Math.floor(num / 10);
//     // }
//     //      return sum;
//     // }) (49)
    
//     // console.log(ans)

//     // >>>>>>>
//     //   Factorial of an number  and this is Pure Function >>>>>>
    
//     //   function fact(num){
//     // let fact =1;
//     // for(let i=num; i>0; i--){
//     //     fact= fact * i;
//     //     }
//     //     return fact;
//     // }
//     // console.log(fact(5));

// //    >>> This is Impure Function  but javascript always says make Pure Function
   
// //     let num=5;
// //     function fact(){
// //   let fact =1;
// //   for(let i=num; i>0; i--){
// //       fact= fact * i;
// //       }
// //       return fact;
// //   }
// //   console.log(fact());



// //     Factorial of an number   >>>>>>
    
// // function fact(num){
// // let fact =1;
// // for(let i=num; i>0; i--){
// //   fact= fact * i;
// //   }
// //   console.log(fact);
// // }
// // console.log(fact(5));

// //Factorial of an number   >>>>>>
    
// // function fact(num){
// // let fact =1;
// // for(let i=num; i>0; i--){
// //   fact= fact * i;
// //   }
// //   return fact;
// // }
// // let ans= fact(5)
// // console.log(ans);

// //    >> ArRow Function Of FACTORIAL  >>>
//     // let fact =(num) => {
//     // let fact =1;
//     // for(let i=num; i>0; i--){
//     //   fact= fact * i;
//     //   }
//     //   return fact;
//     // }
//     // let ans= fact(5)
//     // console.log(ans);


// // Pure function accepts some parameter and always return the result.
// // impure function is not necessary to accept the parameter as well as not always returns the result.
 
//     //  >>> IIFE FUNCTION MAKING FACTORIAL  >>>>
   
//     // let ans =(function fact(num){
//     // let fact =1;
//     // for(let i=num; i>0; i--){
//     //   fact= fact * i;
//     //   }
//     //   return fact;
//     // })  (5)
//     // console.log(ans);

//   //  Annoyms function are the function without the name  and annoyms function runs very few cases.  
//   //  function are first class citizens.
//    // function a(x,y) {
//      //   return x + y 
//     //}
//     //let b= a;       // we can pass the function into a variable
//     //console.log(b(6,7));

//    //  i can pass one function as a parameter of another function and i can return the function from the function. 

//    //    HIGH ORDER FUNCTION >>


// //    function b(x,y){
// //     return x + y;
// //    }
// //    function a(b){
// //     return b(6,7);
// //    }
// //    console.log(a(b));

//     //  >>>> Call Back Function  >>>

//     // function a(){
//     //  console.log("hello World")
//     // }
//     // setTimeout(a,4000)    //  4000 means 4 second


//     //   >>>> Differnce in SetTimeout and SetInterval >>>  Interview
//     //  in setInterval the function will run after every given time interval.
//     //  setTimeout the function will run once the given time is completed.

//     // <<< Differnce between let , char, var  >>>

//     //  Arrow function why we use. and when Arrow function introduced in Js.  >> It was introduced in ES6 in 2015

//     // function a(){
//     //     console.log("hello World")
//     //    }
//     //    setInterval(a,4000) // after every 4 second it will print hello world.


//     // setTimeout(function(){
//     //     console.log("Hello 11");
//     // },4000)
//     // function a(){
//     //     console.log("hello 22");
//     // } 
//     // a()



//     // function my_callback(a){
//     //     return a();
//     // }
//     // my_callback(() => {
//     //     console.log("hello Bhai");
//     // });



//     // setTimeout(() =>{
//     //     console.log("hello yaar 1");
//     // },3000)
//     // setTimeout(() =>{
//     //     console.log("hello yaar 2");
//     // },3000)
//     // setTimeout(() =>{
//     //     console.log("hello yaar 3");
//     // },3000)
//     // function a(){
//     //     console.log("hello");
//     // }
//     // a();

// //  >>>>>> Wednesday  >>>>>>
















// //  >>>>>> Thursday  >>>>>>>

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


// //  in Java script function is a first class citizen
// //  High Order Function --->   any function which takes functions as a parameter or returns a function is called High Order function.

// // CALLBACK FUNCTION





















// //   <<<<<< FRIDAY >>>>>>>>>

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

// // let num=5;

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



 
































// //   >>>>>>>>>> Monday  >>>>>>>>>>>>\


// //let name = ['sachin', 'raj', 'ziyz', 'priya', 'mohan']




// //// >>>>>>>>>>>>>>>  4 JULY MONDAY  >>>>>>>>>>>>>>>>>>

// let num = 10;
// console.log(num);
//  num =  'vasanth'
// console.log(num)    ///    OUTPUT >>>>>>>>       10     Vasanth


// let person = {
//   name : 'sachin',
//   age : 23,
//   daughter : {
//     name : 'shilpa',
//     age : 15
//   }
// }
// console.log(person.name)       /// >>>>>>>>>>>    Sachin










//// >>>>>>>  05 JULY  TUESDAY  >>>>>>>>>>>>>>>>>
// ++++++++++++++++++++-------------++++++++++++++++++++++++
// let nums= ['sachin', 'shivam', 'rupal', 'boss', 'raj']
// console.log(Array.isArray(nums), Array.isArray(nums))             //  >>>OUTPUT >>>>     true    true

// let nums = [ 1, 2, 3, 4, 5, 6, 7]
// let arraylength = nums.length;
// for(let index=0; index< arraylength; index++){
//   console.log(nums[index])
// }                     ///          >>>>  OUTPUT >>>>>>  1   2   3   4   5   6  7

// let nums = [ 1, 2, 3, 4, 5, 6, 7]
// nums.push('sachin')
// console.log(nums)          //  OUTPUT >>>>>>>>    [ 1, 2, 3, 4, 5, 6, 7, 'sachin' ]
// console.log(nums.pop())    
// console.log(nums.pop())      //  OUTPUT >>>>>>>>    6

// let nums = [ 1, 2, 3, 4, 5, 6, 7]
// nums.unshift("SACHIN");
// console.log("ADDING",nums)      /// OUTPUT >>>>>>    ADDING [ 'SACHIN', 1, 2, 3, 4, 5, 6, 7 ]


// let nums = [ 1, 2, 3, 4, 5, 6, 7]
// nums.shift("SACHIN");
// console.log("ADDING",nums)     //   >>>>>  OUTPUT  >>>>>>>>   ADDING [ 2, 3, 4, 5, 6, 7 ]

// let names = ['raju', 'baju', 'shalu', 'kamlu']
// delete names[1]
// console.log('delete', names, names[1])      //// OUTPUT  >>>>>>  delete [ 'raju', <1 empty item>, 'shalu', 'kamlu' ] undefined

//  >><<<>>>><  DELETE OPERATOR CAN BE REMOVE ONLY ONETHING AT A TIME >>>>> <<

// const names = ['raju', 'baju', 'shalu', 'kamlu']
// names.length = 0;
// console.log(names.length , names)         // >OUTPUT >>>>>     0 []


// const names = ['raju', 'baju', 'shalu', 'kamlu']
// names.length = 8;
// console.log(names.length , names)    // >>>> OUTPUT >>>>>>  8 [ 'raju', 'baju', 'shalu', 'kamlu', <4 empty items> ]


// const names = ['raju', 'baju', 'shalu', 'kamlu']
// names.length = 2;
// console.log(names.length , names)    //  >>>>> OUTPUT >>>>  2 [ 'raju', 'baju' ]

// const names = ['raju', 'baju', 'shalu', 'kamlu']
// names.length = 8;
// console.log(names.length , names)     //  OUTPUT >>>>  8 [ 'raju', 'baju', 'shalu', 'kamlu', <4 empty items> ]
// names.pop()
// console.log(names);    ///  >> OUTPUT >>>>  [ 'raju', 'baju', 'shalu', 'kamlu', <3 empty items> ]
// names.push('kamlu');
// console.log(names)        // >> OUTPUT >>>  [ 'raju', 'baju', 'shalu', 'kamlu', <3 empty items>, 'kamlu' ]  
// console.log(typeof(names [0]))        //  OUTPUT >>>>    string


// //>>>>>  +++++  SPLICE METHOD
// let names= ['add', 'subtract', 'boys', 'shivam', 'horse']
// names.splice(2,0, 'raju')
// console.log(names)       //  output >>>>>>  [ 'add', 'subtract', 'raju', 'boys', 'shivam', 'horse' ]

// let names= ['add', 'subtract', 'boys', 'shivam', 'horse']
// names.splice(2,1, 'sachin')
// console.log(names)       //  OUTPUT >>>>>     [ 'add', 'subtract', 'sachin', 'shivam', 'horse' ]

// let names= ['add', 'subtract', 'boys', 'shivam', 'horse']
// names.splice(2,3, 'sachin')
// console.log(names)           ///  OUTPUT  >>>>>>>      [ 'add', 'subtract', 'sachin' ]

// let names= ['add', 'subtract', 'boys', 'shivam', 'horse']
// names.splice(2,3, 'sachin', 'male', 'shiva')       //   splice (index  , delete,  and add any name)
// console.log(names)        ////   >>>>   OUTPUT >>>>><<<>>><<<<<   [ 'add', 'subtract', 'sachin', 'male', 'shiva' ]



// let names = ['prakash', 'vinay', 'jamu', 'sachin', 'prince']
// names.splice(2, 10, 'joker', 'jio', 'mango')
// console.log(names)           //  <<OUTPUT <<<<<<        [ 'prakash', 'vinay', 'joker', 'jio', 'mango' ]

// let names = ['prakash', 'vinay', 'jamu', 'sachin', 'prince']
// names.splice(10, 10, 'joker', 'jio', 'mango')
// console.log(names)         // >><<<OUTPUT<<<<<<<<<      prakash', 'vinay',    'jamu',    'sachin',   'prince',  'joker',    'jio',     'mango'     

// let names = ['prakash', 'vinay', 'jamu', 'sachin', 'prince']
// names.slice(0,2)
// console.log(names)      /// <<<<  OUTPUT   >>>>     [ 'prakash', 'vinay', 'jamu', 'sachin', 'prince' ]

// let names = ['prakash', 'vinay', 'jamu', 'sachin', 'prince']
// console.log(names.slice(0,2));        //   OUTPUT  >>>>>     [ 'prakash', 'vinay' ]
// console.log(names)        //  <<<  OUTPUT  >>>>>    [ 'prakash', 'vinay', 'jamu', 'sachin', 'prince' ]


// // +++++++++++++++++++++++++++++++++++++

// // >>>>>>>>>>>>>>>>>>  06 july WedNESDAY  >>>>>>>>>>>>>






// //  ++++++      slice(starting value < ending value)


// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.slice(0,2))      //   <<<OUTPUT  >>>     [ 'vasanth', 'kumar' ]

//let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.slice(2,5))  // 'sangakara, dravid
//   console.log(names.slice(3,0))    // []   Empty value 
//console.log(names.slice(3,3))   // []     Empty array
//console.log(names.slice(1,3))  //  kumar, sangakara
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

   //let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
//  console.log(names.slice(0, -2))    /// [ 'vasanth', 'kumar' ]
// console.log(names.slice(0, -3))  //  [ 'vasanth' ]
//console.log(names.slice(-4, 2))   //    [ 'vasanth', 'kumar' ]
 //console.log(names.slice(1, 0))  //        []
 //console.log(names.slice(-1, 0))  //     []

// console.log(names.slice(0, -1))  //   [ 'vasanth', 'kumar', 'sangakara' ]
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




// let nums = [ 1, 3, 4, 3, 2, 5, 7,1,3 ]
//  for(let i = 0; i<nums.length; i++){
//   let value = nums [i]
//   console.log(value, nums.slice(i))
//     if(nums.includes(value, i+1)) {
//    console.log(value[i]);
//    break
//   } 
//   else{
//     nums.shift()
//   } 
//  }    


// let nums = [ 1, 3, 4, 3, 2, 5, 7,1,3 ]
//  for(let i = 0; i<nums.length; i++){
//   console.log(nums[i])
//   let value = nums [i]
//   if(nums.includes(value, i+1) === false) {
//    console.log(value);
//    break
//   } 
//   else{
//     nums.shift()
//   } 
//  }    



//  let nums = [ 1, 3, 4, 3, 2, 5, 7,1,3 ]
//  for(let i = 0; i<nums.length; i++){
//   nums.push(1)
//   console.log(nums)
//  }

// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.indexOf('sachin'));



// let names = ['vasanth', 'kumar', 'sangakara', 'dravid']
// console.log(names.indexOf('kumar'));      //  output  >>>>  1


// let names = ['vasanth', 'kumar', 'sangakara', 'dravid', 'kumar']
// console.log(names.indexOf('kumar' , 2));

// let names = ['vasanth', 'kumar', 'sangakara', 'dravid', 'kumar']
// console.log(names.indexOf('kumar' , 4));


// let names = ['vasanth', 'sangakara', 'dravid', 'kumar']
// names.reverse()
// console.log(names);

// let nums = [3, 2, 6, 4, 9]
// console.log(nums.sort());      ///   OUTPUT  >>>>   [ 2, 3, 4, 6, 9 ]



// let nums = [3, 2, 6, 4, 9]
// //let names = ['vasanth', ]
// console.log(name.sort());







// //>>>>>>>>>>>>>>>  7 JULY 2022 THURSDAY  >>>>>>>>>>>>>

// let n1 = 10;
// let n2= 15;
// if(n1 >n2) console.log("n1");
// else console.log("n2")

// n1 > n2 && n1 > n3  -> n1
// n2 > n1 && n2 > n3  -> n2
// n3 > n1 && n3 > n2   -> n3



// let nums= [-1, -20, -32, -17, -89, -10, -27, -100]
// nums.sort((a, b) => a-b);
// console.log(nums)              //  OUTPUT <<<>>>>.... [ -100, -89, -32, -27, -20, -17, -10,  -1 ]


// let nums= [1, 20, 32, 17, 89, 10, 27, 100]
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//   if(max < nums[i]){
//     max = nums[i]
//   }
//   }
// console.log(max)         //   OUTPUT  >><<<<<  100




// let nums= [1, 20, 32, 17, 89, 10, 27, 100]
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//   let currentValue = nums[i]
//   if(max < currentValue){
//     max= currentValue

//   }
//   }
// console.log(max)     ///  output >>>>     100


// let nums= [-1, -20, -32, -17, -89, -10, -27, -100]
// let max = nums[0];
// for(let i=0; i<nums.length; i++){
//   let currentValue = nums[i]
//   if(max < currentValue){
//     max= currentValue

//   }
//   }
// console.log(max)        //   OUTPUT  <<<>>>>>>  -1




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
// console.log(nums.indexOf(1));          //  OUTPUT >><<<<<<<<     0


// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// console.log(nums.lastIndexOf(2));

// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// console.log(nums.lastIndexOf(1));         //  output >>>>>>>    4


// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// for(let i=0; i<nums.length; i++){
//   if(nums.indexOf(nums[i])=== nums.lastIndexOf(nums[i])){
//     console.log(nums[i]);
//   }
// }        //..  >>>>>>>>>  OUTPUT  >>>    3   4


// let  nums = [ 1, 2, 1, 2, 1, 3, 4]
// for(let i=0; i<nums.length; i++){
//   if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
//     console.log(nums[i]);
//   }
// }              //  OUTPUT <<<<<<<<<<<      1   2   1   2   1



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

// console.log(getFirstNonRepeatingNo(nums));   ///   >>>> OUTPUT   >>>   3




// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// console.log(names.toString());                            // OUTPUT>>>>>       mahi,ramu,jamu,praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// console.log(names.join());                                   // OUTPUT>>>>>  mahi,ramu,jamu,praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
//  console.log(names.join('*'));                           // >>>. OUTPUT>>>  mahi*ramu*jamu*praveen

// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// let nums = [1, 2, 3]
// console.log(names.join(nums))       // OUTPUT <<<<   >>  mahi1,2,3ramu1,2,3jamu1,2,3praveen



// let names = ['mahi', 'ramu', 'jamu', 'praveen']
// let nums = [1, 2, 3]
// console.log(names.concat(nums));     //  OUTPUT <<<<<<<<<<<     [ 'mahi', 'ramu', 'jamu', 'praveen', 1, 2, 3 ]

// let nums = [1, 2, 1, 2, 3, 4, 2, 8, 9]
// let newArr =[]
// for(let i=0; i<nums.length; i++){
//   if(nums[i] >= 3){
//     newArr.push(nums[i])
//   }
// }
// console.log(newArr)    //  OUTPUT >><<<<<     [ 3, 4, 8, 9 ]



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
//   console.log(num)
 
// })  
// console.log(newArr)    //  OUTPUT <<<<   1  2  3  4  []

// let newArr = [1, 2, 3, 4].filter((num) => {
//     console.log(num)
//     return num < 3
//   })  
// console.log(newArr)        //  OUTPUT  ><<<<<   1  2   3  4  [ 1, 2 ]



// let newArr = [1, 2, 3, 4].filter((num) => {
//     console.log(`${num} ---> ${num < 3 }`);
//     return num < 3
//   })      
// console.log(newArr)                 //  OUTPUT>>>>>           1 ---> true    2 ---> true    3 ---> false      4 ---> false    [ 1, 2 ]

// let nums = ['vasanth', 'kumar', 'ramu', 'jamu']
// let newArr = nums.filter(function (num){
// console.log(`${num} ---> ${num < 3 }`);
//     return nums.length < 5 ;
//   })      
// console.log(newArr)    // OUTPUT >>>>>  vasanth ---> false  kumar --> false  ramu ---> false  jamu ---> false  [ 'vasanth', 'kumar', 'ramu', 'jamu' ]


// let nums = [1, 2, 3, 4]
// let newArr = nums.filter(function(num){
//   console.log(`$(num)---> $(num < 3)`);
//   return num * num
// })
//   console.log(newArr)     //  OUTPUT  <<<<>>>  $(num)---> $(num < 3)    $(num)---> $(num < 3)    $(num)---> $(num < 3)    $(num)---> $(num < 3)    [ 1, 2, 3, 4 ]

// let nums = [1, 2, 3, 4]
// function square(num){
//   return num * num
// }
// let squaredArray = []
// for(let i=0; i<nums.length; i++){
//   squaredArray.push(square(nums[i]))

// }
// console.log(squaredArray)     //  OUTPUT <<<<   [ 1, 4, 9, 16 


// let nums = [1, 2, 3, 4]
// let newArr = nums.filter(function(num){
//     console.log(`$(num)---> $(num < 3)`);
//     return num * num
//   })
// function square(num){
//   return num * num
// }
// let squaredArray = []
// for(let i=0; i<nums.length; i++){
//   squaredArray.push(square(nums[i]))

// }
// console.log(squaredArray)

// let nums = [1, 2, 3, 4]
// let factorialArray = nums.map((num) => {
//   let fact = 1;
//   for(let i=num; i>0; i--){
//   fact = fact * i;
//   }
//   return fact
// })
// console.log(factorialArray)     //  OUTPUT <<<>>>>> [ 1, 2, 6, 24 ]


// let nums = [1, 2, 3, 4]
// let factorialArray = nums.map((num) => {
//   let fact = 1;
//   for(let i=num; i>0; i--){
//   fact = fact * i;
//   }
//   return fact
// })
// console.log(factorialArray, nums)      //  output >>><<<<<    [ 1, 2, 6, 24 ] [ 1, 2, 3, 4 ]


// let nums = [1, 2, 3, 4]
// let factorialArray = nums.map((num) => {
//   let fact = 1;
//   for(let i=num; i>0; i--){
//   fact = fact * i;
//   }
//   return fact > 5
// })
// console.log(factorialArray, nums)       // output <<<<<< [ false, false, true, true ] [ 1, 2, 3, 4 ]


// let nums = [1, 2, 3, 4]
// let factorialArray = nums.filter((num) => {
//   let fact = 1;
//   for(let i=num; i>0; i--){
//   fact = fact * i;
//   }
//   return fact > 5
// })
// console.log(factorialArray, nums)      //  OUTPUT <<<<<,   [ 3, 4 ] [ 1, 2, 3, 4 ]

 

// let nums = [ 1, '', false, true, 'vasanth', null , undefined]
// let truthyValues = nums.filter((value) =>{
//   return true

// })
// console.log(truthyValues);


// let nums = [ 1, '', false, true, 'vasanth', null , undefined, 0]
// let truthyValues = nums.filter(Boolean)
// console.log(truthyValues);         // output  <<  [ 1, true, 'vasanth' ]
// console.log(Boolean)         //  Output  <<<    [Function: Boolean]


// let nums = [ 1, '', false, true, 'vasanth', null , undefined, 0, -1]
// let truthyValues = nums.filter(Boolean)
// console.log(truthyValues);
// if(undefined){
// console.log('vasanth')
// }


//  let nums = [ 1, [], {}, '', false, true, 'vasanth', null , undefined, 0, -1]
// let truthyValues = nums.filter(Boolean)
// console.log(truthyValues);
// if([]){
// console.log('vasanth')
// }



// let nums = [ 1, [], {}, '', false, true, 'vasanth', null , undefined, 0, -1]
//  let truthyValues = nums.filter(Boolean)
// if(true){
// console.log('vasanth')
//  }



// let nums = [ 1, [], {}, '', false, true, 'vasanth', null , undefined, 0, -1]
//  let falsyValues = nums.filter((num) => !num)
// console.log(falsyValues)        // output  >><<<<  [ '', false, null, undefined, 0 ]


// let nums = [1, 2, 3, 4, 5]
// let sum = 0;
// for(let i=0; i<nums.length; i++){
//   sum =sum + nums[i]
// }
// console.log(sum)       //  output<<<<      15


// let nums = [1, 2, 3, 4, 5]
// let sum =nums.reduce(function(prev, current){
//   return prev + current
// })
// console.log(sum)        //OUTPUT  <<<<>>>>>>>>>>>>>>   15




// let nums = [5, 1, 2, 3, 4, 5]
// let sum =nums.reduce(function(prev, current){
//   console.log('prev', prev)
//   return prev + current
// })
// console.log(sum) 




// let nums = [5, 1, 2, 3, 4, 5]
// let sum =nums.reduce(function(prev, current){
//   console.log('prev', prev, prev + current)
//   return prev + current
// })
// console.log(sum) 



// let nums = [5, 1, 2, 3, 4, 5]
// let sum =nums.reduce(function(prev, current){
//   console.log('prev', prev, prev + current)
//   return prev + current
// }, 10)
// console.log(sum)


// let nums = ['names', 'sachin', 'vasanth', 'kumar']
// let sum =nums.reduce(function(prev, current){
//   if(prev.length > current.length) return prev
//   else return current
//   })
// console.log(sum)


// let nums = [1, 2, 3, 4, 5]
// let initial = true
// for(let i=0; i<nums.length; i++){
//   if(nums[i] > 5) initial = false
// }
// console.log(initial)       //  output   >>>  true


// let nums = [1, 2, 3, 4, 5, 6, 1]
// let initial = true;
// for(let i=0; i<nums.length; i++){
//   if(nums[i] > 5) initial = false
// }
// console.log(initial)


// let nums = [1, 2, 3, 4, 5, 6, 1]
// console.log(nums.every((num) =>{
//   return num > 5
// }))


// let nums = [1, 2, 3, 4, 5, 6, 1]
// console.log(nums.every((num) => {
//   return num <= 5
// }));


// let nums = [1, 2, 3, 4, 5, 1]
// console.log(nums.some((num) => {
//   return num <= 3
// }));



// let nums = [1, 2, 3, 4, 5, 1]
// console.log(nums.some((num) => num > 10));




// //>>>>>>  11 JULY   MONDAY   >>>>>>>>>>>>>>>>

// let nums = [1, 2, 3]
// nums.map(function(num){
//   console.log(num)
// })



// function print(num){
//   console.log(num);
// }
// for(let i = 0; i< nums.length; i++){
//   ProcessingInstruction(nums[i])
// }





// let nums = [2, 3, 5, 6, 7, 8]
// let target = 9;
// for(let i=0; i<nums.length; i++){
//   for(let j=i+1; j<nums.length; j++){
//     if(nums[i] + nums[j]) === target) {

//     }
//   }
// }


// let nums = [2, 3, 5, 6, 7, 8]
// let target = 9;

// let traversedArray = []

// for(let i=0; i<nums.length; i++){
//   if(traversedArray.includes(trget - nums[i])){
//     console.log(nums[i], target - nums[i]);
//   }
//   else{
//     traversedArray.push(nums[i])
//   }
      
//     }
  


//     let nums = [2, 3, 5, 6, 7, 8]
//     let target = 9;
//      let left = 0;
//      let right = nums.length - 1;

//      while( left < right ){
//       if(nums[left] + nums[right] == target){
//         console.log(nums[left], nums[right]);
//         left += 1;
//         right -= 1;
//         } else if(nums[left] + nums[right] > target){
//           right -=1;
//         } else if(nums[left] + nums[right] < target){
//           left += 1;
//         }
//      }






// let nums = [1, 2, 3, 4, 5]
// let count = 0;
// for(let i=0; i<nums.length; i++){
//   for(let j=0; j<nums.length; j++){
//     console.log(`${++count} ==> ${nums[i]} ---->$(nums[j])`);
//       }
// }















//  12 july Tuesdy >>>>>>>>>>>>

// let matrix = [ 
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]
//console.log(matrix[2][2]);      //  output>>>>   11
// let rows = matrix.length
// let cols = matrix[0].length
// console.log(matrix.length);
// console.log(rows, cols);     // output >>>>>>>    4  , 4
// let sum = 0;
// for(let i=0; i<rows; i++){
//   for(let j=0; j<cols; j++){
    
//     sum += matrix[i][j]
//   }
// }
// console.log(sum)    //    output >>>>>  136


// let sum = 0
// for(let i=0; i<rows; i++){
//   for(let j=0; j<cols; j++){
//     if(i == j){


//     }
    
//     sum += matrix[i][j]
//   }
// }
// console.log(sum)     //  outPUT >>>>   136


// let matrix = [ 
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]

// let rows = matrix.length
// let cols = matrix[0].length

// let sum = 0
// for(let i=0; i<rows; i++){
//   for(let j=0; j<cols; j++){
//     if(i === j){
//       sum += matrix[i][i]
 
//     }
//     }
// }
// console.log(sum)


// let sum = 0
// for(let i=0; i<rows; i++){
//   for(let j=0; j<cols; j++){
//           sum += matrix[i][i]
 
//     }
//     }
// console.log(sum)



// let sum = 0
// for(let i=0; i<rows; i++){
//    sum += matrix[i][i]
 
//     }
    
// console.log(sum)


// let matrix = [ 
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [16, 14, 15, 16]
// ]

// let rows = matrix.length
// let start = 0;

// let sum = 0
// for(let i=0; i<rows; i++){
// sum += matrix[i][start]
// }     
// console.log(sum)                                 //    output >>>>>      31




    // let matrix = [ 
    //   [1, 2, 3, 4],
    //   [5, 6, 7, 8],
    //   [9, 10, 11, 12],
    //   [16, 14, 15, 16]
    // ]
    
    // let rows = matrix.length
    // let start = 0;
    
    // let sum = 0
    // for(let i=0; i<rows; i++){
    // sum += matrix[start][i]
    // }  
    // console.log(sum)  //   output>>>   10



    // let matrix = [ 
    //   [1, 2, 3, 4],
    //   [5, 6, 7, 8],
    //   [9, 10, 11, 12],
    //   [16, 14, 15, 16]
    // ]
    
    // let rows = matrix.length
    // let start = 2;
    
    // let sum = 0
    // for(let i=0; i<rows; i++){
    // sum += matrix[start][i]
    // }  
    // console.log(sum)      /// OUTPUT >>>>>>>>>>>   42



  //   let matrix = [ 
  //     [1, 2, 3, 4],
  //     [5, 6, 7, 8],
  //     [9, 10, 11, 12],
  //     [16, 14, 15, 16]
  //   ]
    
  //   let rows = matrix.length
  //   let start = 0;
    
  //   let sum = 0
  //   for(let i=0; i<rows; i++){
  //   sum += matrix[i] [start]
  //   start += 1;
  // }  
  //   console.log(sum)       //  OUTPUT >>>>>   34



    // let matrix = [ 
    //   [1, 2, 3, 4],
    //   [5, 6, 7, 8],
    //   [9, 10, 11, 12],
    //   [16, 14, 15, 16]
    // ]
    
    // let rows = matrix.length
    // let start = matrix[0].length - 1
    
    // let sum = 0
    // for(let i=0; i<rows; i++){
    // sum += matrix[i][start]
    // //start += 1;
    // }  
    // console.log(sum) 


// let nums = [1, 2, 3, 4]
// console.log(nums.reverse())

// let nums = [1, 2, 3, 4]
// for(let i= nums.length - 1; i>=0; i--){
//   console.log(nums[i])
// }                                     //  outPUT>>>>>    4  3  2  1




//     let matrix = [ 
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [16, 14, 15, 16]
//     ]
    
//     let rows = matrix.length
//     let cols= matrix[0].length;

//  for(let i=0; i<rows; i++){
//   if(i % 2 == 0){
//     for(let j=0; j<cols; j++){
//   console.log(matrix[i][j])
//     }
//   }
// }                         //  OUTPUT >>>>>.  1   2   3   4  9  10   11  12


// let matrix = [ 
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
//   [17, 18, 19, 20]
// ]

// let rows = matrix.length
// let cols= matrix[0].length;

// for(let i=0; i<rows; i++){
// if(i % 2 == 0){
// for(let j=0; j<cols; j++){
// console.log(matrix[i][j])
// }
// } else{
//   for(let j=cols-1; j>= 0; j--){
//     console.log(matrix[i][j])
// }
// }
// }                       //  OUTPUT >>>>>.  1   2   3   4  9  10   11  12  16  15  14  13  17  18  19  20


// let nums = [1, 2, 3, 4]
// for(let j=cols - 1; j>= 0; j++){
//   console.log(matrix[i][j])
// }

















// //// searching algos

/////  linear
// let nums = [10, 13, 69, 45, 36, 76]
// let target = 45;
// console.log(nums.includes(45))       ////output  >>>>>   true


// let nums = [10, 13, 69, 45, 36, 76]
// let target = 450;
// function isPresent(nums,target){
//   for(let i=0; i<nums.length; i++){
//     if(nums[i] === target) return true
//   }
//   return false
// }
// console.log(isPresent(nums, target))         /////  outPUT >>>>  false


// let nums = [10, 13, 36, 45, 69, 76, 89, 98];
// let target = 45







// let nums = [10, 13, 36, 45, 69, 76, 89, 98];
// let target = 100;

// let start = 0;
// let end = nums.length - 1;
//  while(start <= end){
//   let middle = Math.floor(start + end / 2);

//   if (nums[middle]== target) {
//     console.log('found at', middle);
//     } else if(nums[middle] < target ){
//       start = middle + 1
//     }
//     }
 

//     let nums - [10, 13, 36, 45, 69, 76, 89, 98];
// let target = 100;

// let start = 0;
// let end = nums.length - 1;
//  while(start <= end){
//   let middle = Math.floor(start + end / 2);

//   if (nums[middle]== target) {
//     console.log('found at', middle, start, end);
//     } else if(nums[middle] < target ){
//       start = middle + 1;
//     }else{
//       end = middle - 1;
//     }
//     }



















/// +++++++++         13  JULY   WEDNESDAY           >>>>>>>>>>>>>>>>>



// let nums1 = [ 1, 2, 3]
// let nums2 = [4, 5, 6]
// let nums3 = [7, 8, 9]
// console.log(nums1.concat('vasanth', nums2, nums3));        // output>>>> [ 1, 2, 3, 'vasanth', 4, 5, 6, 7, 8, 9 ]
// console.log([nums1, 'vasanth', nums2, nums3])                   // output>>>>       [ [ 1, 2, 3 ], 'vasanth', [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// console.log([...nums1, 'vasanth', ...nums2, ...nums3])         // output>>>>   [ 1, 2, 3, 'vasanth', 4, 5, 6, 7, 8, 9 ]
// console.log(...nums1, 'vasanth', ...nums2, ...nums3)          // output>>>>          1 2 3 vasanth 4 5 6 7 8 9     
// console.log(nums1, nums2, nums3)                             // output >>>>>>>>  [ 1, 2, 3 ] [ 4, 5, 6 ] [ 7, 8, 9 ]

// let nums1 = [1 , 2, 3]
// let nums2 = [...nums1]
// nums2[0] = 10
// console.log(nums1, nums2)    //   ///// output>>>>>>   [ 1, 2, 3 ] [ 10, 2, 3 ]



// let nums1 = [1 , 2, 3]
// nums2[0] = 10
// console.log(nums1, nums2)



// let fname ='sachin'
// let lname = 'vasanth'
// for(let i=0; i<fname.length; i++){
//   console.log(fname[i], lname[i])
// }




// let fname= 'vasanthkumar'
// let lname = 'vasanth'
// console.log(fname === lname)       /// output>>>>   false



// let fname= [1, 2, 3]
// let lname = [5, 6, 7]
// console.log(fname === lname);          // output >>>>   false


// let fname= [1, 2, 3]
// let lname = fname;
// console.log(fname == lname);      //  output>>>>>  true


// let fname = 'vasanthkumar'
// console.log(fname.slice(0,7), fname);       //output>>>       vasanth vasanthkumar
// console.log(fname.slice(-12, -5));         //output    >>>    vasanth
// console.log(fname.slice(-12, 7));           //output    >>>   vasanth


//let fname = 'vasanthkumar'
//console.log(fname.charAt(11), fname[13]);    ///  output >>>      r  undefined
//console.log(fname[13]);                         ///  output >>>    undefined
//console.log(fname.slice(7));                    ////  output >>>    kumar 
//console.log(fname.substring(7));            ///// output>>>>>   kumar        substring takes only +ve value.
//console.log(fname.substring(-5, -3));           //// output >>>>  substring is not contain -ve value but slice is take both +ve And -ve value. so we use slice.
//console.log(fname.substring(1, 5));    //  ////output >>>>>   asan
// substring is used to before the creation of slice

// console.log(fname.toLowerCase());                  //////output><    >>>>>>>>>>>>>   vasanthkumar     
// console.log(fname.toUpperCase());             //////output><    >>>>>>>>>>>>>       VASANTHKUMAR

// let fname = '   vasanThkumar     '
// console.log(fname);
// console.log(fname.trim());                     //////output><    >>>>>>>>>>>>>     vasanthkumar
// console.log(fname.replace('a', 'j'));


// let news = 'India won the world cup. India become the first country to win 10-10 cup';
// console.log(news.replace(/India))





////// >+++++++++  14 JULY Thursday >>>>>>>>>>>>///;;;;;;;;;

// let array = [1, 2, 3, 4]
// let newArr = []
// for(let i=0; i<array.length; i++){
//   newArr.push(array[i])
// }
// console.log(newArr)


// let array = [1, 2, 3, 4]
// let newArr = [...array]
// console.log(newArr)



//////  Searching Properties  >>> 

// let news = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam dicta repellendus fuga nam sapiente ullam. Numquam, ad! Esse, temporibus?"
// let target = 'dhoni'
// console.log(news.includes(target));        ///// outPUT ?>>>>>    false


// let news = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam dicta repellendus fuga nam sapiente ullam. Numquam, ad! Esse, temporibus?"
// let target = 'dhoni'

// let newArray = news.split(' ')

// for(let i=0; i<newArray.length; i++){
//   if(newArray[i] === target ){
//     console.log(true)
//   }
//   console.log(false)
// }



// let news = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam dhoni ullam. Numquam, ad! Esse, temporibus?"
// let target = 'dhoni'

// let newArray = news.split(' ')
// let isPresent = false;
// for(let i=0; i<newArray.length; i++){
//   if(newArray[i] === target ){
//     isPresent = true
//   }
// }
//   console.log(isPresent)             ///// OUTPUT ??>>>>><<<<<<<<<<   true




// let email =  'vasizebron10@gmail.com'
// if(email.endsWith('@gmail.com')){
//   console.log('valid email');
// } else{
//   console.log('invalid email');
// }


// let email =  'vasizebron10@gmail.com'
// if(email.startsWith('+91')){
//   console.log('valid number');
// } else{
//   console.log('invalid number');
// }



// let mobile =  ' 84928428020'
// if(mobile.trim().length == 10){
//   console.log('valid number');
// } else{
//   console.log('invalid number');
// }

















// for(var i=0; i<5; i++){
//   setTimeout(() =>{
//     console.log(i);
//   }, 1000)
// }


// for(let i=0; i<5; i++){
//   setTimeout(() =>{
//     console.log(i);
//   }, 1000)
// }



////////  16 JULY SATURDAY VASANT SIR ARRAY AND STRING PRACTICE <<<+++++++++++++++


  ///  ['a', 'b', 'a', 'c', 'b']  => ['a', 'b', 'c']
/////  unique chars

// let chars = ["a", "b", "a", "c", "b"]
// let UniqueChars = [];
// for(let i=0; i<chars.length; i++){
//   if(UniqueChars.includes(chars[i])){
//     UniqueChars.push(chars[i]);
//   }
// }
// console.log(UniqueChars)



////   Callback method/////

// let chars = ["a", "b", "a", "c", "b"]
// let UniqueChars = chars.filter((char, index, arr) =>{
//   console.log(char, index, arr)
// })



// let chars = ["a", "b", "a", "c", "b"]
// let UniqueChars = chars.filter((char, index) => chars.indexOf(char) ===index);
// console.log(UniqueChars)  



// let chars = ["a", "b", "a", "c", "b"]
// let UniqueChars = chars.filter((char, index) =>{

// return chars.indexOf(char) ===index;
// })
// console.log(UniqueChars)  


//let chars = ["a", "b", "a", "c", "b"]

// Array.prototype.myfilter = function(callback){
//   let newArr = []
//   for(let i=0; i<this.length; i++){
//     if(callback(this[i], i, this)){
//       newArr.push(this[i])
//     }
//   return newArr;
// };
// let UniqueChars = chars.myFilter((char, index) =>{
//   return chars.indexOf(char) === index;
// })
// console.log(Uniquechars)


// let nums = [11, 9, 4, 17, 25, 33, 19]
// nums.sort((a, b) => a - b);
// console.log(nums[nums.length - 3])


// let nums = [11, 9, 4, 17, 25, 33, 19]
// function getNthLargest(nums, pos){
// nums.sort((a, b) => a - b);
// console.log(nums);
// return nums[pos - 1];
// }
// console.log(getNthLargest(nums, 3))


// let news = 'Vasanth is a average teacher';
// let newsArray = news.split(" ");
// console.log(newsArray)

// for(let i=0; i<newsArray.length; i++){
//   console.log(newsArray[i].split("").reverse().join(""));
// }



// let news = 'Vasanth is a average teacher';
// let newsArray = news.split(" ");
// console.log(newsArray)
// for(let i=0; i<newsArray.length; i++){
//   newsArray[i] = (newsArray[i].split("").reverse().join(""));
// }
// console.log(newsArray)                            //////output>>>><<<<<   [ 'Vasanth', 'is', 'a', 'average', 'teacher' ]  [ 'htnasaV', 'si', 'a', 'egareva', 'rehcaet' ]


// let news = 'Vasanth is a average teacher';
// let newsArray = news.split(" ");
// console.log(newsArray)
// for(let i=0; i<newsArray.length; i++){
//   newsArray[i] = (newsArray[i].split("").reverse().join(""));
// }                                                                                    
// console.log(newsArray.join(" "))                    //////////outPUT>>><<<< [ 'Vasanth', 'is', 'a', 'average', 'teacher' ]  htnasaV si a egareva rehcaet


// let string = 'AirCampus'   ///  rotate by  char --> irCampusA    //// rotate by  char --> rCampusAi   ////  rotate by 3 char -->>  CampusAir  

// let slicedString = string.slice(1);
// console.log(slicedString)


// let string = 'AirCampus'   ///// rotate by  char --> rCampusAi   ////  rotate by 3 char -->>  CampusAir  
// let rotatingString = string.slice(0, 3)
// let slicedString = string.slice(1);
// console.log(rotatingStringslicedString)



// let marix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// //////output ////>> 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// let top = 0; bottom = 0; left = 0;  right = 3;

// while(left <=right && top <+ bottom){
//   if(direction ==0){
//     for(let i=left; i<=right; i++){
//       console.log(matrix[top[i]]);
//     }
//     top += 1;
//     direction = 1;
//   }
//   if(direction == 1);
//   for(let i= top; i<=bottom; i++){
//     console.log(matrix[i][right]);
//       }
// }

















/////////////18 JULY    MONDAY   VASANTH SIR >><<<<<<<<<>>>>>>>>>++++++++++++
////// TOPIC OBJECT



// let radius = 1;
// let x = 2;
// let y = 2;
// function drawCircle(){
//   console.log("drawing circle");
// }


// cons circle = {
//   radius : 1,
// };
// console.log(circle["radius"])



// cons circle = {
//   radius :1,
//   location : {
//     x: 2,
//     y: 2
//   },
//   draw : function (){
//     return "drawing circle";
//   },
// };
// console.log(circle.draw(), circle.radius);



// function createCircle(radius, location){
//   cons circle = {
//     radius : radius,
//     draw : function (){
//       return "drawing circle";
//     },
//     };
//     return  circle;
//     }
   
//     let circle1 = createCircle(1);
//     console.log(circle1.radius, circle.draw(), circle1)
//     let circle2 = createCircle(2);
//     console.log(circle1.radius, circle.draw(), circle1)



// let name = 'vasanth';
// let job = 'building career';
// let place = 'chennai';

// let name1 = 'sachin';
// let job1 = 'cricket';
// let place1 = 'mumbai';

// let vasanth = {
// let name : 'vasanth',
// let job : 'building career',
// let place : 'chennai',
// };

// console.log(vasanth.name, vasanth.job, vasanth.place);














///// 19 JULY  2022  VASANTH SIR >>>>>>>>>>>>>><<<<<<<<<<<<<<<<+++++++++++


// let person  ={
//   name : 'vasanth',
//   job : "don",
// };

// let keys = []
// let value = []
// for(let key in car) {
//   key.(push)
// }



// let nums = [1, 2, 3]
// console.log(Object.entries(nums));





// let person = {
//   name :'akash',
//   age : 5,
// };
// let copy = {...person};
// copy("age") = 20;
// console.log(person , copy);


// let person= {
//   name : 'vasanth',
//   wife : 'samantha',
//   son: {
//     name : 'cherry',
//     age:10,
//   },
// };

// let copy ={...person};
// person["son"]["name"] = 'vikram'
//   console.log(person, copy)





// let person= {
//   name : 'vasanth',
//   wife : 'samantha',
//   son: {
//     name : 'cherry',
//     age:10,
//   },
// };
// JSON.stringify
// let copy ={...person};
// person["son"]["name"] = 'vikram'
//   console.log(person, copy)






//////  WedNESDAY   20  JULY 2022  >>>>>>>>>
let car = {
  name : "maruti",
  model: 2022,
  key: 10,
};
  // car["color"] = "red";
  // car.color scheme = "red"
for(let key in car){
  console.log(car[key])
  console.log(key, car.key)
}















  ////////   21 JULY     THURSDAY     VASANT   SIR  >>>>>>>>>>..

// let vasanth ={
//   title : "sachin",
//   flat : function () {
//     console.log(this);
//   },
// };
// vasanth.flat();            /////// output >>>>>  { title: 'sachin', flat: [Function: flat] }


// function log(){
//   console.log("logging");
// }
// log(),
// log(),
// log(),
// log(),
// log(),
// log()



// function log(){
//   let count = 0;
//   console.log(count++);
//   console.log("logging");
// }
// log(),
// log(),
// log(),
// log(),
// log(),
//  log()



//  function wrapperlog(){
//   let count = 1;
//    return function (){
//     if(count % 3 == 0){
//   console.log("logging");
// };
//  }
//   count++
// }
// const log = wrapperlog();
// log(),
// log(),
// log(),
// log(),
// log(),
//  log()


 //////   ARRAY  destructuring >>>>
 
//  let nums =  [1, 2, 3, 4, 5];
//  let [num1, num2] = nums;
//  console.log(num1, num2);        /////output >> 1  2


//  let nums =  [1, 2, 3, 4, 5];
//  let [num1, num2,  ...rest] = nums;
//  console.log(num1, num2, rest);      /////output ..>>   1 2 [ 3, 4, 5 ]



// let nums =  [1, 2];
//  let [num1, num2, num3] = nums;
//  console.log(num1, num2, num3);   ////// output  >>>>    1 2 undefined


/////  object destructuring

// let obj = {
//   name : 'satya prakash',
//   Class : 'engineering',
//   profession : 'developer',
// };
//  let {name, Class} = obj
//  console.log(name, Class);       //////output>>>>> satya prakash engineering



////// RECURSION means calling the same function again and again  >>>>>


// function add(){
//   console.log("calling");
//   add()
// }
// add()

/////// recursion is used to breakdown the problems  //////

// function add(){
//   let name = 'vasanth';
//   console.log("calling", name)
// add();
// }
// add();


///// factorial

// let num=5;
// let factorial = 1;
// for(let i=5; i>0; i--){
//   factorial *= i;
// }
// console.log(factorial)


// function getFactorial(num){
// if(num === 1){
//   return 1;
// }
// return num *= getFactorial(1)
// }
// console.log(getFactorial(5));














//////  22  JULY   FRIDAY VASANT SIR  >>>>>>>

///find power of a number

// function getPower(base, exponential){
// let total = 1;
// for(let i=0; i<exponential; i++){
// total *= base
// }
// return total 
// }
// console.log(getPower(2,4))



// function getPower(base, exponential){
//   if(exponential === 0) return 1;
//   let total = 1 
//  for(let i=0; i< exponential; i++){
//   total *= base;
//  }
//  return total;
// }
// console.log(getPower(2, 0))




// function getPower(base, exponential){
//   if(exponential < 0) return -1;
//   if(exponential === 0) return 1;
//   let total = 1 
//  for(let i=0; i< exponential; i++){
//   total *= base;
//  }
//  return total;
// }
// console.log(getPower(2, -1))


// function getPower(base, exponential){
// if(exponential === 0) return 1;
// return base* getPower(base, exponential - 1)
// }
// console.log(getPower(2, 4))



// let arr= [1, 2, 4, [5,7]]
// console.log(arr.flat(1))


// function flatten(arr){
// let flattenedArray = [];
// if(Array.isArray(arr) === false){
//   return arr
// }
// for(let i=0; i<arr.length; i++){
//   if(Array.isArray(arr[i]))
//   return flatten(arr[i]);

// }else { 
//   flattenedArray.push(arr[i])
// }

// let arr= [[1, 2, [3,4]]]
// console.log(flatten(arr))
