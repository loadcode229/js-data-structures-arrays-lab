// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    return appendDriver = [...drivers, name];
}

function prependDriver(name) {
    return prependDriver = [name, ...drivers];
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}