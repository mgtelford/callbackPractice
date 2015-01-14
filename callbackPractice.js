/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 


   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function (arr, callback) {
  callback(arr[0]);
}

var firstName = function (thing) {
  console.log("The first name in names is " + thing);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(arr, callback) {
  callback(arr[arr.length-1]);
}

var lastName = function(name) {
  console.log('The last name in names is ', name);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var cb = function (x) {
  console.log("The answer is " + x)
}

var multiply = function (num1, num2, callback) {
  callback(num1 * num2);
}


multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var cb = function(x, name) {
  if(x === true){
    console.log(name + ' is in the array');
  } else {
    console.log(name + ' is not in the array');
  }
}

var contains = function (arr, str, callback) {
   var x = false;
   if (arr.indexOf(str) !== -1) {
       x = true;
   } else {
        x = false;
   } 
   callback(x, str);   
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
var remove = function (x) {
 console.log(x);

}

var uniq = function (arr, callback) {
   var newArray = [];
   var seen = {};
   var j = 0;
   for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
         if (seen[arr[i]] !== 1) {
           seen[item] = 1;
           newArray[j++] = item;
    }
  }
   callback(newArray);    
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var name;
var indice;
var each = function (arr, callback, location) {  
     name = arr[location];
     indice = location;
     callback(name, location)
}

var order = function(name, indice) {
  console.log("The name in the " + indice + " position is " + name);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
---------------Incomplete-----------------------------------

var getUserById = function(arr, idnum, callback) {
 for (var i = 0; i < arr.length; i++) {
    var name = arr[i].name;

 }
  }
    callback();
}

var cb = function (user) {
  console.log("The user with the id 16t has the email of " + user.email + " the name of " + user.name + " and the address of " + user.address)

}


 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
