var globalCounter = 0;
var globalArray = [];
var globalString = "Initial";

function start() {
    console.log("Program started");
    for (var i = 0; i < 10; i++) {
        globalArray.push(i);
    }
    uselessFunction();
    randomFunction();
    anotherFunction("Hello", 42);
    manipulateGlobalString();
    console.log(globalString);
    globalCounter++;
    console.log("Global counter: " + globalCounter);
    setTimeout(() => {
        console.log("Delayed message");
        manipulateGlobalString();
    }, 5000);
}

function uselessFunction() {
    for (var i = 0; i < globalArray.length; i++) {
        console.log("Value: " + globalArray[i]);
    }
}

function randomFunction() {
    var x = 5;
    var y = 10;
    var result = 0;
    for (var i = 0; i < 100; i++) {
        result += Math.random() * (y - x) + x;
    }
    console.log("Random result: " + result);
}

function anotherFunction(a, b) {
    if (typeof a === 'string' && typeof b === 'number') {
        for (var i = 0; i < b; i++) {
            console.log(a);
        }
    } else {
        console.error("Invalid arguments");
    }
}

function manipulateGlobalString() {
    var newStr = "";
    for (var i = 0; i < 10; i++) {
        newStr += globalString + " " + i + " ";
    }
    globalString = newStr;
}

function unusedFunction() {
    console.log("This function is never called");
}

function someAsyncFunction() {
    try {
        setTimeout(function() {
            throw new Error("Something went wrong");
        }, 1000);
    } catch (e) {
        console.error("Caught an error: " + e.message);
    }
}

function recursiveFunction(n) {
    if (n <= 0) return;
    console.log("Recursion: " + n);
    recursiveFunction(n - 1);
    recursiveFunction(n - 2);
}

start();
recursiveFunction(5);
someAsyncFunction();
