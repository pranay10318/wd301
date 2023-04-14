// interface User {
//     name: String;
//     id: number;
//     isAdmin: boolean;
// }

// function addUser(user: User): string {
//     return user.name + " added successfully";
// }
// let newUser: User = {
//     name: "Jane",
//     id: 1,
//     isAdmin: false
// };
// console.log(addUser(newUser));
console.log("this is typescript file!!!");

console.log("lv2-3:::::");
let name: any = "hello";
name = 42;
name = false;
console.log(name);

function printHello(): void {
    console.log("function called..");
}
printHello()

// function throwError(): never {
//     throw new Error("An error occurred!");
// }
// console.log(throwError())
let userName = "Jane";  // type: string
let userID = 10;  // type: number
let uniqueID = userName + userID;

console.log(uniqueID);//automatically checks datatypes and concats as a string

interface User {
  name: string,
  id: number,
  greet(): string,
}

let user: User = {
    name : "prnay",
    id:1,
    greet() {
        return 'hello mister man' + ` ${this.name}`;
    }
}
console.log(user.greet());
function greeting(): string {
return "hello this is satwicks thing ";
}
const user2 : User = {name: 'satwick', id: 123,greet() {return "this";}};
console.log(user2.greet());

interface greetFn {
    (user2: User): string;
}

const func = (user: User) => {
return user.name;
} 
console.log(func(user));

