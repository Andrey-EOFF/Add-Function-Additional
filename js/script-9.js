const person = {
  name: "Іван",
  age: 35,
  city: "Київ",
  password: "asasa8sqw",
  agreeToTerm: false,
};

function checkAge(person) {
  return person.age > 18;
}
function checkPass(person) {
  return person.password.length > 8;
}

function checkTerms(person) {
  return person.agreeToTerm === false;
}

function validate(obj, ...test) {
  for (let i = 0; i < test.length; i++)
    if (test[i](obj) === false) {
      return false;
    } else {
      return true;
    }
}

console.log(validate(person, checkAge, checkPass, checkTerms));

function creatValidate(...test) {
  return function (obj) {
    for (let i = 0; i < test.length; i++)
      if (test[i](obj) === false) {
        return false;
      } else {
        return true;
      }
  };
}

const validate1 = creatValidate(checkAge, checkPass, checkTerms);

console.log(validate1(person));
