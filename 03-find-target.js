const petsData = require("./pets-data.js");

/**
 * findPetById()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `id`. If the inputted `pets` array is
 * empty or the `id` does not match any pets, return error message: `Could not find pet with ID of '${id}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} id - A unique pet `petId`.
 * @returns {Object||string} The pet object with the matching `petId`. || If input `id` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetById(pets, 104);
 *  > {
        petName: "Monkey",
        id: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    }

EXAMPLE:
 *  findPetById(pets, 100);
 *  > "Could not find pet with ID of '100'."
 */
function findPetById(pets, id) {
    if (!pets.length){
        return `Could not find pet with ID of '${id}'`;
    }

    for (let i=0; i<pets.length; i++){
        if (id === pets[i].petId){
            return petObj = pets[i];
        }
    }
    return `Could not find pet with ID of '${id}'`;
}

// console.log(findPetById(petsData, 104));
// console.log(findPetById(petsData, 100));

/**
 * findPetByName()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `petName`. If the inputted `pets` array is
 * empty or the `petName` does not match any pets, return error message: `Could not find pet with name of '${name}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} name - A unique pet `petName`.
 * @returns {Object||string} The pet object with the matching `petName`. || If input `name` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetByName(pets, "Gumby");
 *  > {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    }

EXAMPLE:
 *  findPetByName(pets, "Steven");
 *  > "Could not find pet with name of 'Steven'."
 */
function findPetByName(pets, name) {
    if (!pets.length){
        return `Could not find pet with ID of '${name}'`;
    }

    for (let i=0; i<pets.length; i++){
        if (pets[i].petName === name){ 
            return pets[i];
        }
    }

    return `Could not find pet with ID of '${name}'`;
}

// console.log(findPetByName(petsData, "Gumby"));
// console.log(findPetByName(petsData, "Steven"));

/**
 * findPetByCaretaker()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `caretaker`. If the inputted `pets` array is
 * empty or the `caretakerName` does not match any pets, return error message: `Could not find pet with caretaker named '${name}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} name - A pet `caretakerName`.
 * @returns {Object||string} The pet object with the matching `petName`. || If input `name` cannot be found, return error message string.
 *
 * EXAMPLE:
 *  findPetByCaretaker(pets, "Nicole");
 *  > {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    }

    EXAMPLE:
 *  findPetByCaretaker(pets, "Sabrina");
 *  > "Could not find pet with caretaker named 'Sabrina'."
 */
function findPetByCaretaker(pets, name) {
    if (!pets.length){
        return `Could not find pet with caretaker named '${name}'`;
    }

    for (let i=0; i<pets.length; i++){
        if (pets[i].caretakerName === name){ 
            return pets[i];
        }
    }

    return `Could not find pet with caretaker named '${name}'`;
}

// console.log(findPetByCaretaker(petsData, "Nicole"));
// console.log(findPetByCaretaker(petsData, "Sabrina"));

/**
 * findPetByFavoriteFood()
 * -----------------------------
 * Returns a `petName` from an array of pets based on the input `FavoriteFood`. If the inputted `pets` array is
 * empty or the inputted `food` does not match any pets, return null
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} food - A pet's `favoriteFood`.
 * @returns {string || null} The `petName` of the pet whose `favoriteFood` matches the input `food`
 * if the input doesn't match any pets `favoriteFood`, return null
 *
 * EXAMPLE:
 *  findPetByFavoriteFood(pets, "watermelon");
 *  > "Deloba"
 *
 * EXAMPLE:
 *  findPetByFavoriteFood(pets, "steak");
 *  > null
 */
function findPetByFavoriteFood(pets, food) {
    if (!pets.length){
        return null;
    }

    for (let i=0; i<pets.length; i++){
        if (pets[i].favoriteFood === food){ 
            return pets[i].petName;
        }
    }

    return null;
}

// console.log(findPetByFavoriteFood(petsData, "watermelon"));
// console.log(findPetByFavoriteFood(petsData, "steak"));
