// ex-1.

let bok = { title: "abc", author: "Jhon", numPages: 102 };

// ex-2.

let array = [
  { title: "ABCD", author: "Stina", numPages: 101 },
  { title: "ABCE", author: "Ela", numPages: 202 },
  { title: "ABCDE", author: "Ela", numPages: 303 },
];

let result = array[1].numPages; // för att testa
console.log("ex-2: " + result);

// ex-3.

function lookForTitle(nyTitle) {
  if (array[2].title == nyTitle) {
    return array[2];
  }
  return null;
}

console.log(lookForTitle("ABCDE"));

// letterFrequency

function letterFrequency(string) {
  let newArray = [...string];
  let object = {};

  for (let i = 0; i < newArray.length; i++) {
    let a = newArray[i];
      if (object[a]) { // if key is in object double/same it will increase by 1. It means key values will increase.
          object[a]++;
      } else {
          object[a] = 1; // if no similar key then key will have 1 as it's value.
    }
    
  }

  return object;
}

console.log(letterFrequency("ni talar bra latin"));

//Randfom -------------------------------------exercise-----Math.random-----------
function randomElement(array) {
  let output = Math.floor(Math.random() * array.length);
  return array[output];
}

function main() {
  let array = ["Kalle", "Olof", "Gösta"];
  let res = randomElement(array);
  console.log(res);
}

main();
