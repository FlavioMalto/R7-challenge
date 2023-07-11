import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../api/api";
import { useUserContext } from "../../context/UserProvider";

const useAxios = (values) => {
  const [data, setData] = useState([]);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    async function loadData() {
      const term64 = btoa(values.term);
      const userToken = user.token;

      const request = {
        size: 50,
        page: 0,
        token: `${userToken}`,
        sort: "number",
        type: "all",
        term: { term: `${term64}`, book: "WyJMVjIiLCJMVjMiXQ==" },
      };
      try {
        const response = await api.post("/search-document", request);
        setData(response.data);
      } catch (error) {
        Swal.fire({
          title: "Ops!",
          icon: "error",
          text: "Algo deu errado",
          html: `"Algo deu <b>errado!</b>" + "<br>" + error`,
          confirmButtonColor: "#000000",
        });
      }
    }
    loadData();
  }, [values, user.token]);
  return data;
};

export default useAxios;
