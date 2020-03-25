const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (findSuperheroFilter) {
    return findSuperheroFilter.find(function (superheroes) {
        return superheroes.name === "Spiderman"

    });
};

console.log(findSpiderMan(superheroes));



const doubleArrayValues = function (array) {
    let doubled = [];
    array.forEach(number => {
        doubled.push(number * 2);
    });
    return doubled;
};
console.log(doubleArrayValues([1, 2, 3]))

const doubleArrayValues2 = function (d) {
    return d.map(n => n + n)

};
console.log(doubleArrayValues2([1, 2, 3]))


const containsNumberBiggerThan10 = function (array) {
    return array.some(number => {
        return number > 10;

    });
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))


const isItalyInTheGreat7 = function (array) {
    return array.includes("Italy")

}
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
)

const tenfold = function (array) {
    return array.map(number => {
        return number * 10;
    });
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))


const isBelow100 = function (array) {
    return array.every(number => {
        return number < 100;
    });
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function (array) {
    return array.reduce((accumulator, number) => {
        return accumulator + number;
    });
};
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))

