const petsData = require("./pets-data.js");

/**
 * filterBySpecies()
 * -----------------------------
 * Returns all pet objects with a matching species. If the inputted `pets` array is empty or no pets match the inputted `species`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} species - The species of a pet.
 * @returns {Object[]} An array of pets where the species matches the `species` inputted.
 *
 * EXAMPLE:
 *  filterBySpecies(pets, "cat");
 *  > [
 * {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    },
    {
        petName: "Monkey",
        petId: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    },
    {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    }
 * ]
 *
 * EXAMPLE:
 *  filterBySpecies(pets, "parakeet")
 *  > []
 */
function filterBySpecies(pets, species) {
    if (!pets.length){
        return [];
    }

    let specificSpeciesArr = [];
    for (let i=0; i<pets.length; i++){
        if (pets[i].species === species){
            specificSpeciesArr.push(pets[i]);
        }
    }
    return specificSpeciesArr;
}

// console.log(filterBySpecies(petsData, "cat"));
// console.log(filterBySpecies(petsData, "parakeet"));

/**
 * getNamesBySpecies()
 * -----------------------------
 * Returns all pets' `petNames` that match the species. If the inputted `pets` array is empty or no pets match the inputted `species`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} species - The species of a pet.
 * @returns {String[]} An array of pets' `petNames` where the species matches the `species` inputted.
 *
 * EXAMPLE:
 *  getNamesBySpecies(pets, "dog");
 *  > ["Deloba", "Gia"]
 *
 * EXAMPLE:
 *  getNamesBySpecies(pets, "parakeet")
 *  > []
 */
function getNamesBySpecies(pets, species) {
    if (!pets.length){
        return [];
    }

    let specificSpeciesArr = [];
    for (let i=0; i<pets.length; i++){
        if (pets[i].species === species){
            specificSpeciesArr.push(pets[i].petName);
        }
    }
    return specificSpeciesArr;    
}

// console.log(getNamesBySpecies(petsData, "dog"));
// console.log(getNamesBySpecies(petsData, "parakeet"));


/**
 * filterByMinAge()
 * -----------------------------
 * Returns all pet objects with an `age` greater than or equal to the given number. If the inputted `pets` array is empty or all pets are younger than the given number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} minAge - The minimum acceptable age.
 * @returns {Object[]} An array of pets with an `age` greater than or equal to `minAge`.
 *
 * EXAMPLE:
 *  filterByMinAge(pets, 5);
 *  > [
 * {
        petName: "Deloba",
        petId: 101,
        species: "dog",
        caretakerName: "Sam",
        age: 8,
        favoriteFood: "watermelon",
        caretakerAge: '27',
        weightInPounds: 15
    },
    {
        petName: "Monkey",
        petId: 104,
        species: "cat",
        caretakerName: "Katie",
        age: 10,
        favoriteFood: "dog food",
        caretakerAge: "17",
        weightInPounds: 14
    },
 * {
        petName: "Gumby",
        petId: 106,
        species: "cat",
        caretakerName: "John",
        age: 6,
        favoriteFood: "bacon",
        caretakerAge: "61",
        weightInPounds: 18
    },
 * ]
 *
 * EXAMPLE:
 *  filterByMinAge(pets, 12)
 *  > []
 */
function filterByMinAge(pets, minAge) {
    if (!pets.length){
        return [];
    }

    let petsByMinAgeArr = [];
    for (let i=0; i<pets.length; i++){
        if(pets[i].age >= minAge){
            petsByMinAgeArr.push(pets[i]);
        }
    }
    return petsByMinAgeArr;
}

// console.log(filterByMinAge(petsData, 5));
// console.log(filterByMinAge(petsData, 12));

/**
 * filterByMaxAge()
 * -----------------------------
 * Returns all pet objects with an `age` less than or equal to the given number. If the inputted `pets` array is empty or all pets are older than the given number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {number} maxAge - The maximum acceptable age.
 * @returns {Object[]} An array of pets with an `age` less than or equal to `maxAge`.
 *
 * EXAMPLE:
 *  filterByMaxAge(pets, 3);
 *  > [
 *   {
        petName: "Tuba",
        petId: 102,
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    },
    {
        petName: "Percy",
        petId: 103,
        species: "cat",
        caretakerName: "Nicole",
        age: 1,
        favoriteFood: "fish",
        caretakerAge: "29",
        weightInPounds: 12
    },
      {
        petName: "Gia",
        petId: 105,
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 * ]
 *
 * EXAMPLE:
 *  filterByMaxAge(pets, 0)
 *  > []
 */
function filterByMaxAge(pets, maxAge) {
    if (!pets.length){
        return [];
    }

    let petsByMaxAgeArr = [];
    for (let i=0; i<pets.length; i++){
        if(pets[i].age <= maxAge){
            petsByMaxAgeArr.push(pets[i]);
        }
    }
    return petsByMaxAgeArr;
}

// console.log(filterByMaxAge(petsData, 3));
// console.log(filterByMaxAge(petsData, 0));

/**
 * findFriendsOf()
 * -----------------------------
 * Returns all pets' `petNames` that include the inputted `friend` in their `friendsWith` array. If the inputted `pets` array is empty or no pets match the inputted `friend`, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} friend - A name to check for in the pets' `friendsWith` arrays.
 * @returns {String[]} An array of pets' `petNames` where the pet's `friendsWith` array includes the inputted `friend`.
 *
 * EXAMPLE:
 *  findFriendsOf(pets, "Remy");
 *  > ["Percy", "Monkey", "Gumby"]
 *
 * EXAMPLE:
 *  findFriendsOf(pets, "Kevin")
 *  > []
 */
function findFriendsOf(pets, friend) {
    if (!pets.length){
        return [];
    }

    let isFriendsWith = [];
    for (let i=0; i<pets.length; i++){
        let petFriendsArr = pets[i].friendsWith
        for (let j=0; j<petFriendsArr.length; j++){
            if(petFriendsArr[j].includes(friend)){
                isFriendsWith.push(pets[i].petName);
            }
        }
    }
    return isFriendsWith;
}

// console.log(findFriendsOf(petsData, "Remy"));
// console.log(findFriendsOf(petsData, "Kevin"));
// console.log(findFriendsOf(petsData, "Gumby"));

/**
 * maxNumberOfFriends()
 * -----------------------------
 * Returns all pets' `petNames` whose`friendsWith` array length is less than or equal to given number. If the inputted `pets` array is empty or all pets have more friends than given `maxFriends` number, return `[]`.
 * @param {Object[]} pets - An array of pets. See the `pets-data.js` file for an example of this array.
 * @param {string} maxFriends - A maximum acceptable number of friends.
 * @returns {String[]} An array of pets' `petNames` where the pet's `friendsWith` array is shorter than the given `maxFriends` number.
 *
 * EXAMPLE:
 *  maxNumberOfFriends(pets, 3);
 *  > ["Deloba", "Tuba", "Percy", "Monkey", "Gia"]
 *
 * EXAMPLE:
 *  maxNumberOfFriends(pets, 0)
 *  > []
 */
function maxNumberOfFriends(pets, maxFriends) {
    if (!pets.length){
        return [];
    }

    let hasMaxNumFriends = [];
    for (let i=0; i<pets.length; i++){
        if (pets[i].friendsWith.length <= maxFriends){
            hasMaxNumFriends.push(pets[i].petName);
        }
    }
    return hasMaxNumFriends;
}

// console.log(maxNumberOfFriends(petsData, 3));
// console.log(maxNumberOfFriends(petsData, 0));
