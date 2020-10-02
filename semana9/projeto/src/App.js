import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";

export default function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDatasrc = (peopleSource, userId) =>
    peopleSource.filter((user) => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case "Add_To_Liked_User":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDatasrc(people, userId));
        }
        break;
      case "Add_To_Disliked_User":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newDislikedUsers);
          setPeople(removedPersonFromDatasrc(people, userId));
        }
        break;

      default:
        return people;
    }
  };

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
        />
      )}
    </div>
  );
}
