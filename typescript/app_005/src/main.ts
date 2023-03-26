import * as $ from "jquery";
import { debounceTime, distinctUntilChanged, fromEvent, interval } from "rxjs";
import { from, auditTime } from "rxjs";
import { event } from "jquery";
import { MainApp } from "./main_app";
import { ScreenFeatures } from "./screen_features";
import { distinct } from "rxjs";

class FirstClass extends MainApp {
    age: number;
	constructor(name: String, initAge: number){
      super(name, initAge);      
    }
    setAge(newAge: number){
        let currentDate = new Date();
        this.age = newAge + currentDate.getDate();
        super.calculateAge();
        $("body").css('background-color','green');
        $("body").html("<h1>" + this.age + "</h1>");
    }
}

let firstclassA = new FirstClass('My First Class A', 0);
let firstclassB = new FirstClass('My First Class B', 0);
console.log(firstclassA.age);
console.log(firstclassB.age);
firstclassA.calculateAge();
firstclassB.calculateAge();
setInterval(() => {firstclassA.setAge(89)}, 1500);


class MainScreen extends ScreenFeatures {
    constructor(){
        super()
    }
    addExec(){
        const input = document.getElementById('userid');
        const input$ = fromEvent(input, 'input');
    }
}
// Main Screen Features
let mainScreen = new MainScreen();
mainScreen.execMouseWatch();
// mainScreen.addExec();

const data = [ 1, 2, 1, 3, 4, 4, 5 ];
// from(data).pipe(distinct()).subscribe((val) => console.log(val));
from(data).pipe(distinctUntilChanged()).subscribe((val) => console.log(val));
