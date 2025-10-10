function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 500);
}

function step3() {
  console.log("Step 3 done");
}

step1(() => step2(() => step3()));
