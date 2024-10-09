describe("Array manipulation challenges", function() {
  let myFavSuperheroes;

  beforeEach(function() {
    myFavSuperheroes = createSuperheroesArray();
  });

  // Challenge 2
  it("should return the first superhero's name", function() {
    expect(getFirstSuperhero(myFavSuperheroes)).toBe('Spider-Man');
  });

  // Challenge 3
  it("should return the length of the array", function() {
    expect(getArrayLength(myFavSuperheroes)).toBe(5);
  });

  // Challenge 4
  it("should change and return the second last element to 'Tharun'", function() {
    expect(changeSecondLastElement(myFavSuperheroes, 'Tharun')).toBe('Tharun');
  });

  // Challenge 5
  it("should add 'Friend1' at the start", function() {
    expect(addFriendAtStart(myFavSuperheroes, 'Friend1')[0]).toBe('Friend1');
  });

  

  // Challenge 6
  it("should remove 'Friend1' from the start", function() {
    addFriendAtStart(myFavSuperheroes, 'Friend1');
    expect(removeFriendAtStart(myFavSuperheroes)[0]).toBe('Spider-Man');
  });

 

  // Challenge 7
  it("should add 'Friend1' at the 3rd position", function() {
    expect(addFriendAtThirdPosition(myFavSuperheroes, 'Friend1')[2]).toBe('Friend1');
  });

  // Challenge 8
  it("should remove 4th and 5th elements and add 'Friend2' at 4th position", function() {
    expect(removeAndAddFriend(myFavSuperheroes, 'Friend2')[3]).toBe('Friend2');
  });

  // Challenge 9
  it("should create a nested array 'superheroUniverse'", function() {
    let superheroUniverse = createSuperheroUniverse();
    expect(superheroUniverse.length).toBe(2);
    expect(superheroUniverse[0].length).toBe(3);
    expect(superheroUniverse[1].length).toBe(3);
  });

  // Challenge 10
  it("should return a Marvel superhero name", function() {
    let superheroUniverse = createSuperheroUniverse();
    expect(getMarvelSuperhero(superheroUniverse)).toBe('Iron Man');
  });

 
});
