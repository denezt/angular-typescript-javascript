import * as $ from "jquery";
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
        $("body").css('background-color','green')
        $("body").html("<h1>" + this.age + "</h1>");
    }
}

let firstclassA = new FirstClass('My First Class A', 0)
let firstclassB = new FirstClass('My First Class B', 0)
console.log(firstclassA.age);
console.log(firstclassB.age);
firstclassA.calculateAge()
firstclassB.calculateAge()
firstclassA.setAge(89)