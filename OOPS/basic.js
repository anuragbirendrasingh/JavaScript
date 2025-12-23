
class Person{
   constructor(naam,age){
    this.naam = naam ;
    this.age = age ;
   }
}

const p = new Person("Annad Bhai",25);

console.log(p); //Person { naam: 'Annad Bhai', age: 25 }

const obj1 = {
    naam : "Anu Bhai",
    age : 25 ,
    getNaam(){
        // this.naam = naam ;
        console.log(this.naam);
        
    }
}
obj1.getNaam(); // Anu Bhai

const fn = obj1.getNaam;
fn(); //undefined
