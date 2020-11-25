import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useAxiosConf = () => {
  const [tasks, setTasks] = useState([]);
  const getTasks = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior"
      )
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const putEdit = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior/${id}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return { getTasks, tasks, putEdit };
};
