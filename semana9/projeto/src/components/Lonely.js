import React, { useState, useEffect } from "react";
import LikedPerson from "./LikedPerson";
import axios from "axios";

function Lonely({ activeUserImage, likedUsers }) {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="lonely">
      <p>
        Achou que ia ter algo pra ti aqui? Que pena!! Nada novo por enquanto
      </p>

      <span className="pulse">
        <img src={`./images/users/${activeUserImage}`} alt="É amigo..." />
      </span>

      <div id="liked-people">
        <p>
          {likedUsers.length > 0 &&
            "Pessoas que você curtiu.... Espero que elas curtam você tbm!"}
        </p>

        {matches.map((item) => (
          <LikedPerson key={item.id} person={item} />
        ))}
      </div>
    </div>
  );
}

export default Lonely;
