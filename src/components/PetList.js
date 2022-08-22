import React from 'react';
import SinglePet from './SinglePet';

let petList = [
 {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
  adopted: 'Adopted'
},
{
  id: 1,
  name: 'Bob',
  description: 'A flaming hot cheetoh in feline form',
  species: 'cat',
  adopted: 'Adopted',
}]

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList() {

  return (
    <>
      <label for="pets">Animals</label>
      <select id="petType" >
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
      </select>
      <div className="pet-list">
          {petList.map(pet => 
            <SinglePet pet = {pet} key={pet.id} />
            )}
      </div>
    </>
  )
}
let output = document.getElementById("petType")
export default PetList;
