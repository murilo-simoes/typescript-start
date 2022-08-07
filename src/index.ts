// string
//boolean
//number

// inferencia x annotation

let x: number = 10;  //annotation
x = 25;

console.log(x);


let y = 12; // inferencia

//tipos básicos

let firstName: string = "Murilo"
let age: number = 30;
const isAdmin: boolean = true;

//String != string

console.log(typeof firstName)

firstName = "murilo 2"
console.log(firstName)

//object

const myNumbers: number []= [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
console.log(firstName.toUpperCase());
myNumbers.push(5)
console.log(myNumbers)

//tuplas -> tuple

let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["teste", "teste"]]

console.log(myTuple)

// object literals -> {prop:value}

const user: {name: string, age: number} = {
    name:"roberto",
    age:12
};


console.log(user)

//any - má pratica

let a: any = 0

a = "teste";
a = true;
a = [];

// union type - aceita mais tipos de variavel

let id: string | number | boolean = '10'
id = 200;

console.log(id)



//type alias - criar meu própio tipo

type myIdType = number | string

let id2: myIdType = 2;
id2 = "meu pai";

console.log(id2)

//enum - básicamente, ele agrupa varias variaveis para utilizar rapidamente
//tamanho de roupas (size: Médio, size: Pequeno)

enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola v",
    size: Size.G
}

console.log(camisa)


//literal types

let teste: "autenticado" | null
teste = "autenticado";


//funcoes

function sum(a: number, b: number){
    return a + b;
}

console.log(sum(12, 12))


function sayHelloTo(name:string):string{
    return `Hello ${name}`
    
}
console.log(sayHelloTo("Murilo"));

function logger(msg:string):void{
    console.log(msg)
}
//void serve para especificar que aquela função não possui retorno
logger("Teste!")

function greeting(name: string, greet?:string){
    if(greet){
        console.log(`Olá ${greet} ${name}`)
        return;
    }
    console.log(`Olá ${name}`)
    
}

greeting("José")
greeting("Murilo", "Sir")

//interface

interface MathFunctionParams{
    n1:number,
    n2:number
}

function sumNumbers(nums:MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1:1, n2: 2}))

function multiplyNumbers(nums:MathFunctionParams){
    return nums.n1 * nums.n2;
}

const numbers:MathFunctionParams = {
    n1:5,
    n2:20
}

console.log(multiplyNumbers(numbers))

//narrowing
//checagem de tipos

function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log("Isso não é um número");
}
doSomething(5);
doSomething(false);

//generics

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)

//classes 

class User {
    name
    role
    isApproved

    constructor(name:string, role:string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }
    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`O nome do usuário é ${this.role}`)
            return
        }
        console.log("Informação restrita")
    }
}

const zeca = new User("Zeca" , "Admin" , true)
console.log(zeca)
zeca.showUserName();
zeca.showUserRole(false)

//interfaces em classes

interface IVehicle{
    brand:string
    showBrand():void
}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand:string, wheels: number){
        this.brand =brand,
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 3);

fusca.showBrand();

// herança

class SuperCar extends Car {
    engine
    
    constructor(brand:string, wheels: number, engine:number){
        super(brand, wheels)
        this.engine = engine;
    }
}

const a4 = new SuperCar ("Audi", 4 , 2.0)

console.log(a4)

a4.showBrand()

// decorators 

//constructor decorator
function BaseParamters(){
    return function<T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}
// o @ determina um decorator
@BaseParamters()

class Person{
    name

    constructor(name:string){
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)