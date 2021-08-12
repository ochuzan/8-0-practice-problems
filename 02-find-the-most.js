const pets = require("./pets-data.js");
const petsData = require("./pets-data.js");

/**
 * getHighestPetAge()
 * -----------------------------
 * Returns the highest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The highest `age` of all pets.
 *
 * EXAMPLE:
 *  getHighestPetAge(pets);
 *  > 10
 */
function getHighestPetAge(pets) {
    if (!pets.length){
        return 0;
    }
    let oldestPet = 0;
    for (let i=0; i<pets.length; i++){
        if (pets[i].age > oldestPet){
            oldestPet = pets[i].age;
        }
    }
    return oldestPet;
}

petsData2 = [];
console.log(getHighestPetAge(petsData));
// console.log(getHighestPetAge(petsData2));

/**
 * getLowestPetAge()
 * -----------------------------
 * Returns the lowest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `age` of all pets.
 *
 * EXAMPLE:
 *  getLowestPetAge(pets);
 *  > 1
 */
function getLowestPetAge(pets) {
    if (!pets.length){
        return 0;
    }

    let youngestAge = pets[0].age;
    for (let i=1; i<pets.length; i++){
        if (pets[i].age < youngestAge){
            youngestAge = pets[i].age;
        }
    }
    return youngestAge;
}

console.log(getLowestPetAge(petsData));

/**
 * getHeaviestPet()
 * -----------------------------
 * Returns the pet object with the highest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the highest `weightInPounds`.
 *
 * EXAMPLE:
 *  getHeaviestPet(pets);
 *  > {
        petName: "Gia",
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 */
function getHeaviestPet(pets) {
    if (!pets.length){
        return {};
    }

    let chonkiestPet = pets[0];
    for (let i=1; i<pets.length; i++){
        if (pets[i].weightInPounds > chonkiestPet.weightInPounds){
            chonkiestPet = pets[i];
        }
    }
    return chonkiestPet;
}

console.log(getHeaviestPet(petsData));

/**
 * getLightestPet()
 * -----------------------------
 * Returns the pet object with the lowest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the lowest `weightInPounds`.
 *
 * EXAMPLE:
 *  getLightestPet(pets);
 *  > {
        petName: "Tuba",
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    }
 */
function getLightestPet(pets) {
    if (!pets.length){
        return {};
    }

    let lightestPet = pets[0];
    for (let i=1; i<pets.length; i++){
        if (pets[i].weightInPounds < lightestPet.weightInPounds){
            lightestPet = pets[i];
        }
    }
    return lightestPet;
}

console.log(getLightestPet(petsData));

/**
 * getLowestCaretakerAge()
 * -----------------------------
 * Returns the `caretakerAge` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `caretakerAge` of all pets as a number (not a string).
 *
 * EXAMPLE:
 *  getLowestCaretakerAge(pets);
 *  > 17
 */
function getLowestCaretakerAge(pets) {
    if (!pets.length){
        return {};
    }

    let youngestCaretakerObj = pets[0];
    for (let i=1; i<pets.length; i++){
        if (Number(pets[i].caretakerAge) < Number(youngestCaretakerObj.caretakerAge)){
            youngestCaretakerObj = pets[i];
        }
    }
    return Number(youngestCaretakerObj.caretakerAge);
}

console.log(getLowestCaretakerAge(petsData));

/**
 * getNameOfYoungestCaretaker()
 * -----------------------------
 * Returns the `caretakerName` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return an empty string: ''.
 * @param {Object[]} pets - An array of pets.
 * @returns {string} The `caretakerName` of the pet with the lowest `caretakerAge` of all pets.
 *
 * EXAMPLE:
 *  getNameOfYoungestCaretaker(pets);
 *  > "Katie"
 */
function getNameOfYoungestCaretaker(pets) {
    let youngestCaretakerObj = pets[0];

    for (let i=1; i<pets.length; i++){
        if (Number(pets[i].caretakerAge) < Number(youngestCaretakerObj.caretakerAge)){
           youngestCaretakeObj = pets[i];
        }
    }
    return youngestCaretakeObj.caretakerName;;
}

console.log(getNameOfYoungestCaretaker(petsData));