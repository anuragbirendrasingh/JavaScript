function introduce(language, country, extraLang) {
  console.log(this.naam + language + country + extraLang);
}

const developer1 = { naam: "anurag " };

const developer2 = { naam: "kishan " };

introduce.call(developer1, "js ", "india "); // anurag kakoi 3rd argiment nhi hai isliye yanha isko bhaiundefined de dega last wale ke liye
introduce.call(developer2, "java ", "itlay ", " sql"); // sql apne aap haat jayega nhi lega



introduce.apply(developer1 , ['js ' , "india "]);

// dint use primitive data type
// use only the object 
function parichay(age,height){
  console.log(this.naam) 
  console.log(age);
  console.log(height);
  
  return;
  
}

// let naam = String('anurag');
var naam = 4 ;
parichay.call(naam,32,3.5);