import React from "react";

function LikedPerson({ person }) {
  return (
    <div className="liked-person">
      <div className="liked-person-image">
        <img src={`${person.photo}`} alt={`Você curtiu ${person.photo}`} />
      </div>
    </div>
  );
}

export default LikedPerson;
