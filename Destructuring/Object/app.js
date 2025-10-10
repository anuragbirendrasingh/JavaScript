const person = {
    name : ' anurag',
    age : 32 ,
    class : 10 ,
    jilla :"ballia bagi"
}

const {name, age , ...bakiSab} = person ;
console.log(naam);
console.log(age);
console.log(bakiSab);

// the value assigning of key in the object is done by matching the key ame of the origianl 
// object so keep the name of the ariable same as the name of the original object name 
// otherwise it will return undefined 