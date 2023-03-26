export class MainApp {
    age: number;
	constructor(name: String, initAge: number){
        console.log("Running, my first class: " + name)
        this.age = initAge
    }    
    calculateAge(){
        let date = new Date()
        let calculateAge = 100 + date.getDate()
        console.log(calculateAge)
    }
}