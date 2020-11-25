import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-prior/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={profile.photo} alt={profile.name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {profile.name}, <span>{profile.age}</span>
          </p>
          <p className="person-bio">{profile.bio}</p>
        </div>
      </div>
      <div className="botoes">
        <button type="button" className="button">
          <img src="./images/icons/rewind.png" alt="Rewind User" />
        </button>

        <button type="button" onClick={() => getProfile()} className="button">
          <img src="./images/icons/dislike.png" alt="Dislike User" />
        </button>

        <button type="button" onClick={() => getProfile()} className="button">
          <img src="./images/icons/like.png" alt="Like User" />
        </button>
      </div>
      <div person={profile} />
    </>
  );
}

export default Profile;
