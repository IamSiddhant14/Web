//Window object carries all the bowser methods
'use strict'
//********************************************************

//console.log(this) // It will result in window objectwindow Object

//********************************************************

// function f(){
//        console.log(this)
// }

// f() //Undefined

// 


//********************************************************

// let obj = {
//     f: function(){
//            console.log(this)
//     }
// }

// obj.f() //This will result in object itself 


// let obj = {
//        f: function(){
//               function g(){
//                      console.log(this)
//               }
//               g()
//        }
// }

// obj.f() //This will result window object



//Sumarry -

//Context : Browser +strict ->

// global area -> Window Object

// function - > Undefined

// obj -> function - object Itself

// obj - function - function -  Undefined