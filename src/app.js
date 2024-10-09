  // Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element.['Spider-Man', 'Batman', 'Iron Man', 'Wonder Woman', 'Superman'].
  function createSuperheroesArray() {
    let myFavSuperheroes = ['Spider-Man', 'Batman', 'Iron Man', 'Wonder Woman', 'Superman'];
    console.log(myFavSuperheroes);
    return ['Spider-Man', 'Batman', 'Iron Man', 'Wonder Woman', 'Superman'];
  }

  // Challenge 2: Print (in console) the first superhero's name in your array "myFavSuperheroes".
  function getFirstSuperhero(superheroes) {
    console.log(superheroes[0]);
    return superheroes[0]
  }

  // Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
  function getArrayLength(superheroes) {
    console.log(superheroes.length);
    return superheroes.length
  }

  // Challenge 4: Change the second last element in tuhuadhuahw[duhhe Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
  function changeSecondLastElement(superheroes, name) {
    superheroes[superheroes.length - 2] = name;
    console.log(superheroes[superheroes.length - 2]);
    return superheroes[superheroes.length -2]
  }

  // Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
  function addFriendAtStart(superheroes, friend1) {
    superheroes.unshift(friend1);
    console.log(superheroes);
    return superheroes
  }

  // Challenge 6: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
  function removeFriendAtStart(superheroes) {
    superheroes.shift();
    console.log(superheroes);
    return superheroes
  }

  // Challenge 7: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
  function addFriendAtThirdPosition(superheroes, friend1) {
    superheroes.splice(2, 0, friend1);
    console.log(superheroes);
    return superheroes
  }

  // Challenge 8: Remove the 4th and 5th element in the array "myFavSuperheroes", and add your friend's name (friend 2) at the 4th position using the splice method.
  function removeAndAddFriend(superheroes, friend2) {
    superheroes.splice(3, 2, friend2);
    console.log(superheroes);
    return superheroes
  }

  // Challenge 9: Create a nested array "superheroUniverse" and add 2 arrays to it, where first array should contain the name of the Marvel superheroes and second array should contain the name of the DC superheroes.
  function createSuperheroUniverse() {
    return [
        ['Spider-Man', 'Iron Man', 'Thor'],  
        ['Batman', 'Superman', 'Wonder Woman']  
    ];
  }

  // Challenge 10: Print one of the Marvel superhero names from the array "superheroUniverse".
  function getMarvelSuperhero(superheroUniverse) {
    console.log(superheroUniverse[0][1]);  
  }

  // Testing the functions
  let superheroes = createSuperheroesArray();
  getFirstSuperhero(superheroes);
  getArrayLength(superheroes);
  changeSecondLastElement(superheroes, 'Mahesh');  
  addFriendAtStart(superheroes, 'Friend1');  
  removeFriendAtStart(superheroes);
  addFriendAtThirdPosition(superheroes, 'Friend1');  
  removeAndAddFriend(superheroes, 'Friend2');  

  function createSuperheroUniverse() {
    return [
        ['Spider-Man', 'Iron Man', 'Thor'],
        ['Batman', 'Superman', 'Wonder Woman']
    ];
  }

  function getMarvelSuperhero(superheroUniverse) {
    console.log(superheroUniverse[0][1]);
    return superheroUniverse[0][1]

  }

