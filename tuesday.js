'use strict';

function arrayMe(start, finish) {
  var outputArray = [];
  for (var i = start; i <= finish; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

console.log(arrayMe(1, 10));

function sumMe(inputArray) {
  var outputSum = 0;
  inputArray.forEach(function(arrayMember) {
    outputSum += arrayMember;
  });
  return outputSum;
}

console.log(sumMe(arrayMe(1, 10)));

function incrementMe(start, finish, increment) {
  var outputArray = [];
  if (start < finish) {
    for (var i = start; i <= finish; i += increment) {
      outputArray.push(i);
    }
  } else {
    for (var i = start; i >= finish; i += increment) {
      outputArray.push(i);
    }
  }
  return outputArray;
}

console.log(incrementMe(1, 10, 2));
console.log(incrementMe(10, 1, -2));

function reverseMe(inputArray) {
  var outputArray = [];
  for (var i = inputArray.length - 1; i >= 0; i--) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
}

console.log(reverseMe(arrayMe(1, 10)));
console.log(reverseMe("corgi".split("")));

function imperfectArgument() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

imperfectArgument("corgis", "are", "too", "cute", "for", "words");

function lessPerfectArgument() {
  var outputArray = [];
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "number") {
      outputArray.push(Math.sqrt(arguments[i]).toFixed(3));
    } else {
      console.log(arguments[i]);
    }
  }
  return outputArray;
}

console.log(lessPerfectArgument("corgis", 2, "are", "too", 3, "cute", 6, "for", "words", 11));

function areYouAMember(inputArray, inputElement) {
  return inputArray.indexOf(inputElement) < 0 ? false : true;
}

console.log(areYouAMember(arrayMe(1, 10), 5));
console.log(areYouAMember(arrayMe(1, 10), 20));
console.log(areYouAMember(["a","b","c"], "b"));
