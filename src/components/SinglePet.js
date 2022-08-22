import React, { useState, useEffect } from 'react';

function SinglePet(props) {
   const [adoptedStatus, setStatus] = useState('Available')

  function toggle() {
    if (adoptedStatus === 'Adopted') {
      setStatus('Available')
    }
    if (adoptedStatus === 'Available') {
      setStatus('Adopted')
    }
    props.pet.adopted = adoptedStatus
  }

  return (
    <div className={adoptedStatus === 'Adopted' ? "adopted" : "single-pet"}>
        <div>
          {props.pet.name}
        </div>
        <div>
          {props.pet.description}
        </div>
        <div>
          {props.pet.species}
        </div>
        <div>
         <button onClick= {toggle}>Toggle</button>
         {adoptedStatus}
        </div>
        

    </div>
  );
}

export default SinglePet;
