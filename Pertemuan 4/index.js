//Array

//let numbers = [1, 2, 3, 4, 5];
//let Garren = ['Garren', 'Axel', 20, true];

//let numbers = new Array(1,2,3,4,5);
//let garren = new Array('Garren', 'Axel', 20, true);

//garren[3] = false;

//console.log(numbers[numbers.lenght - 1]);
//console.log(garren[garren.lenght - 1]);

//Object

const garren = {
      firstName : "Garren",
      lastName : "Axel Arie",
      age : 33,
      isSingle : true,
      sayHello : function (){
          console.log("Hello");
      },
};

//const garren = new Object();
//garren.firstName = "Garren";
//garren.lastName = "Axel Arie";
//garren.age = "20";
//garren.isSingle = true;

console.log(garren.lastName);
console.log(garren["isSingle"]);

garren.address = "Maumbi";
garren["Nationality"] = "Indonesian";
console.log(garren);

garren.sayHello();
