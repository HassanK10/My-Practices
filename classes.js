class toyotacar{
    constructor(){
        console.log("hey class");
    }
    start = () => {
        console.log("start");
    }
    stop = () => {
        console.log("stop");
    }
    setBrand = (brand) => {
        this.brand = brand;
    }
}

let fortuner = new toyotacar();
fortuner.setBrand("fortuner");
let lexus = new toyotacar();
lexus.setBrand("lexus");

class person{
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
        console.log("enter parent constructor");
    }
    eat = () => {
        console.log("eat");
    }
    sleep = () => {
        console.log("sleep");
    }
    work = () => {
        console.log("Do Nothing");
    }
}

class Engineer extends person {
    constructor(branch){
        console.log("enter child constructor");
        super("hassan"); //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work = () => {
        console.log("solve problems , build something");
    }
}

class Doctor extends person {
    work = () => {
        console.log("treat patients");
    }
}

let obj1 = new Engineer("software engineer");
let obj2 = new Doctor();
let obj3 = new person();