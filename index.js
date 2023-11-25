console.log("Hello");

//Polyfill for Map function

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const res1 = [1, 2, 3, 4].myMap((ele) => {
  return ele * 3;
});

console.log(res1);

//Polyfill for Filter function

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) temp.push(this[i]);
  }
  return temp;
};

const res2 = [1, 2, 3, 4, 5, 6].myFilter((ele) => {
  return ele % 2 == 0;
});

console.log(res2);

//Polyfill for Reducer function

Array.prototype.myReducer = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const res3 = [1, 2, 3, 4, 5].myReducer((acc, cur) => {
  return acc + cur;
}, 0);

console.log(res3);

//PolyFill for ForEach

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const arr2 = [1, 2, 3, 4];
arr2.myForEach((ele, i) => {
  arr2[i] = ele * ele;
});
console.log(arr2);


//remove duplicates elements from Array
const arr1 = [1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 6, 7];
console.log([...new Set(arr1)]);

//Call Apply Bind

const obj1 = {
  name: "Shadab",
  age: 26,
};

const myInfo = function (city, state) {
  console.log(
    `My Name is ${this.name} of ${this.age} from ${city} and ${state}`
  );
};

//Polyfill for Call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }

  context.fn = this;
  context.fn(...args);
};

//Polyfill for Apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Arguments is not arrayList");
  }
  context.fn = this;
  context.fn(...args);
};

//Polyfill for Bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot bind as function is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

myInfo.myCall(obj1, "Bsp", "CG");
myInfo.myApply(obj1, ["Mumbai", "MH"]);
const newFunction = myInfo.myBind(obj1);
newFunction("Hyd", "TL");
