

let person_Name :string = 'Hamza';

const personName_Array :string[] = ['Ahmed', 'Amir', 'Arham'];

//Datatype of person objects 
interface person {
age : number,
name : string,
nationalty : string,
student : Boolean,


}

//person object
let person :person = {
    age : 25 ,
    name : 'Hamza' ,
    nationalty : 'pakistan' ,
    student : true
}

//print person
console.log(person);

//DataTypr of car object
interface car {

maker : string,
color : string
autometic : boolean
}
//car object
let car = {
    maker : 'toyota',
    color : 'black',
    autometic : 'true',


}
// print car
console.log(car);