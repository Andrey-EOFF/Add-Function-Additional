if (false) {
  function f1() {
    console.log("f1 - if");
  }
} else {
  function f1() {
    console.log("f1 - else");
  }
}
f2();
function f2() {
  console.log("f2 - !!!");
}
f2();

//f3(); error
const f3 = function () {
  console.log("f3 - !!! - const");
};
f3();

const f4 = function () {
    console.log("f3 - !!! - const")
};

console.log(f4 === f3);
