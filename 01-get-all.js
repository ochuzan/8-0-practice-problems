const petsData = require("./pets-data.js");

/**
 * getAllPetNames()
 * -----------------------------
 * Returns all names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pet names.
 *
 * EXAMPLE: getAllPetNames(pets);
 * > ["Deloba", "Tuba", "Percy", "Monkey", "Gia", "Gumby"]
 */

function getAllPetNames(pets) {
    // if (pets.length === 0){
    //     return [];
    // }

    let namesArr = [];
    for (let i=0; i<pets.length; i++){
        if (pets.length === 0){ // Another way to return an array, but less efficient since it iterates through the array first
            return [];
        } else { 
            namesArr.push(pets[i].petName);
        }
    }
    return namesArr;
}

console.log(getAllPetNames(petsData));

/**
 * getAllCaretakerNames()
 * -----------------------------
 * Returns all of the pets' caretaker's names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the names of the pets' caretakers.
 *
 * EXAMPLE: getAllCaretakerNames(pets);
 * > ["Sam", "Ari", "Nicole", "Katie", "Steven", "John"]
 */

function getAllCaretakerNames(pets) {
    if (pets.length === 0){
        return [];
    }

    let namesArr = [];
    for (let i=0; i<pets.length; i++){
        namesArr.push(pets[i].caretakerName);
    }
    return namesArr;
}

console.log(getAllCaretakerNames(petsData));

/**
 * getAllFavoriteFoods()
 * -----------------------------
 * Returns all favorite foods from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pets' favorite foods.
 *
 * EXAMPLE: getAllFavoriteFoods(pets);
 * > ["watermelon", "mealworms", "fish", "dog food", "salami", "bacon"]
 */

function getAllFavoriteFoods(pets) {
    if (pets.length === 0){
        return [];
    }

    let namesArr = [];
    for (let i=0; i<pets.length; i++){
        namesArr.push(pets[i].favoriteFood);
    }
    return namesArr;
}

console.log(getAllFavoriteFoods(petsData));

/**
 * getAllPetSpecies()
 * -----------------------------
 * Returns all pet species from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the pets' species.
 *
 * EXAMPLE: getAllPetSpecies(pets);
 * > ["dog", "spotted gecko", "cat", "cat", "dog", "cat"]
 */

function getAllPetSpecies(pets) {
    if (pets.length === 0){
        return [];
    }

    let species = [];
    for (let i=0; i<pets.length; i++){
        species.push(pets[i].species);
    }
    return species;
}

console.log(getAllPetSpecies(petsData));

/**
 * getAllPetAges()
 * -----------------------------
 * Returns all ages from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {number[]} An array of numbers, which are pet ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > [8, 2, 1, 10, 3, 6]
 */

function getAllPetAges(pets) {
    if (pets.length === 0){
        return [];
    }

    let petsAges = [];
    for (let i=0; i<pets.length; i++){
        petsAges.push(pets[i].age);
    }
    return petsAges;
}

console.log(getAllPetAges(petsData));

/**
 * totalAllPetAges()
 * -----------------------------
 * Returns a total of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is a total of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 30
 */

function totalAllPetAges(pets) {
    if (pets.length === 0){
        return 0;
    }

    let totalPetAge = 0;
    for (let i=0; i<pets.length; i++){
        totalPetAge += pets[i].age;
    }
    return totalPetAge;
}

console.log(totalAllPetAges(petsData));

/**
 * averageAllPetAges()
 * -----------------------------
 * Returns an average of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 5
 */

function averageAllPetAges(pets) {
    if(pets.length === 0){
        return 0;
    }

    let totalAge = 0;
    for (let i=0; i<pets.length; i++){
        totalAge += pets[i].age;
    }

    return totalAge/pets.length;
}

console.log(averageAllPetAges(petsData));

/**
 * averageAllCaretakerAges()
 * -----------------------------
 * Returns an average of all caretakers' ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' caretakers' ages.
 *
 * EXAMPLE: getAllCaretakerAges(pets);
 * > 32.3333333
 */

function averageAllCaretakerAges(pets) {
    if(pets.length === 0){
        return 0;
    }

    let totalAge = 0;
    for (let i=0; i<pets.length; i++){
        totalAge += Number(pets[i].caretakerAge);
    }
    return totalAge/pets.length;
}

console.log(averageAllCaretakerAges(petsData));