//Objects - They exist in key value pair 
//key && value collectively is know as property
//keys are by default string if written in double quotes or not in object

let obj = {}; //Creating an empty object

let cap = {

    fristname : 'Siddhant',//string
    lastname : "sharma",//string
    friends : [ 'Siddhant-55', 'no-one', 8], //Array
    placedatgoodpbc : true, //Boolean
    age: 21, //integer
    placedatsbc : true,//Boolean
    address : {  //Object
        country : 'canada', //string
        city : 'Toronto' //string
    },

    rich : function rich(){  //function
        console.log("1.5 cr per year pacakage"); 
    }
    
}

// if in case the name of the variable is invaild or in case we are accessing the prop of the object dynamically then we are suppose to ue only square bracket notation only and dot notation will give a error in this case

// adding prop to object
cap.awesomeLife = true ;

// updating value of object 
cap.placedatsbc =  false ;

//delete a prop
delete cap.placedatsbc ;

//Accessing element
console.log(cap);
console.log(cap.friends[1]);//Dotted notation
console.log(cap.fristname);//Dotted notation
console.log(cap['fristname']);//Dotted notation
console.log(cap['friends']);//Square bracket notation,To be used in loops as dot notation dont work with it
console.log(cap['friends']["0"]);
console.log(cap['friends'][0]);//We could either write 0 in commas or without it as well but it is not true for strings
console.log(cap.address.city);
console.log(cap['address']['city']);//Here single commas is compulsory
cap.rich();//Her "cap.rich" wont run but "cap.rich()" will

//Here everything which is written inside bracket should be in semicolons expect integers

//Applying loop on a object (for-in-loop)  :::::

for( let key in cap){//Here cap is the name of the object
    console.log(key ,' -->', cap[key]);// Here "ele "is the key while iterating over an object
}

 
// Objects having key value starting from "-" or any numbet is consider invalid to acces that key in an object we
// need to use the squre bracket notation and dot notation wont work here


// Arrays , Functions , Promises , objects are all objects