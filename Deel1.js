const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

const amountOfElementsInArray = function (array) {
    return array.length;
};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

const selectBelgiumFromBenelux = function (array) {
    return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

const lastElementInArray = function (array) {
    return array[array.length - 1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return presidents.slice(1) //no mutation
}
const impeachTrumpSplice = function (array) {
    return presidents.splice(1) //mutation
}

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

const stringsTogether = function (array) {

    return array.join(" ")
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

const combineArrays = function (array1, array2) {
    return array1.concat(array2);

};

console.log(combineArrays([1, 2, 3], [4, 5, 6])) 