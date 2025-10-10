let bro = 'kishan';

function intro(){
    let name ;
    let age = 25 ;
    name = 'anurag';
    console.log(name);
    
    console.log(age);
    
}
intro() ;




// the above function s not a pure func

function introPure(){
    let name ;
    let age = 25 ;
    name = 'anurag';
    return {
        name ,
        age
    }
}

introPure()