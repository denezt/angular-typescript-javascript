import { MainApp } from "./main_app";

class FirstClass extends MainApp {
    age: number;
	constructor(name: String, initAge: number){
      super(name, initAge)
    }
    setAge(newAge: number){
        let currentDate = new Date()
        this.age = newAge + currentDate.getDate()
        super.calculateAge()
    }
}

let firstclassA = new FirstClass('My First Class A', 0)
let firstclassB = new FirstClass('My First Class B', 0)
console.log(firstclassA.age);
console.log(firstclassB.age);
firstclassA.calculateAge()
firstclassB.calculateAge()
