const pets = require("./pets-data.js")

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
        caretaker: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    }
 */
    function findPetById() {}



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
        caretaker: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    }
 */
    function findPetByName() {}


/**
 * findPetByCaretaker()
 * -----------------------------
 * Returns a pet object from an array of objects based on the input `caretaker`. If the inputted `pets` array is
 * empty or the `petName` does not match any pets, return error message: `Could not find pet with name of '${name}'.`
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
 */
    function findPetByCaretaker() {}



/**
 * findPetByFavoriteFood()
 * -----------------------------
 * Returns a `petName` from an array of pets based on the input `FavoriteFood`. If the inputted `pets` array is
 * empty or the inputted `food` does not match any pets, return error message: `Could not find pet with favorite food of '${food}'.`
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} food - A pet's `favoriteFood`.
 * @returns {string} The `petName` of the pet whose `favoriteFood` matches the input `food` 
 * if the input doesn't match any pets `favoriteFood`, return an error message
 *
 * EXAMPLE:
 *  findPetByFavoriteFood(pets, "watermelon");
 *  > "Deloba"
 */
    function findPetByFavoriteFood() {}

