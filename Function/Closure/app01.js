function mahtaBahi() {
  let paisa = 100;
  console.log("baap ne diya " + paisa);

  return function kishan() {
    paisa = paisa - 50;
    console.log("kishan ke paas " + paisa);
    return function chhotka() {
      paisa = paisa - 20;
      console.log("chhotka ke paas " + paisa);
    };
  };
}
const baapHisab = mahtaBahi();
const beta1 = baapHisab();
// console.log(beta1);
const beta2 = beta1();
// mahtaBahi();
// kishan();
// chhotka();


// Statte Preservation
//  mahta bhai apna function ka execution band kar diya hai tab bhi dekho aaram se uss state
//ko beta log bachha paa raha hai avr use kar paa raha hai