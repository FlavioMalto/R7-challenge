import { useUserContext } from "../../context/UserProvider";
import api from "../../api/api";
import Swal from "sweetalert2";
import { useDataContext } from "../../context/DataProvider";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [displayTerm, setDisplayTerm] = useState("");
  const [displayType, setDisplayType] = useState("");
  const [displaySort, setDisplaySort] = useState("");
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [total, setTotal] = useState(0);
  const [submited, setSubmited] = useState(false);

  const { user } = useUserContext();
  const { data, setData } = useDataContext();

  const handleChangeTerm = (event) => {
    setDisplayTerm(event.target.value);
  };

  const handleChangeType = (event) => {
    setDisplayType(event.target.value);
  };

  const handleChangeSort = (event) => {
    setDisplaySort(event.target.value);
  };

  useEffect(() => {
    handleSubmit();
  }, [page, total, size]);

  const handleSubmit = async () => {
    setDisplayTerm(displayTerm);
    const term64 = btoa(displayTerm);
    const userToken = user.token;

    const request = {
      size: size,
      page: page - 1,
      token: `${userToken}`,
      sort: displaySort,
      type: displayType,
      term: { term: `${term64}`, book: "WyJMVjIiLCJMVjMiXQ==" },
    };
    try {
      if (displayTerm !== "") {
        const response = await api.post("/search-document", request);

        if (response.data.error === false) {
          setData(response.data);
          setTotal(data.quantidade);
        } else {
          Swal.fire({
            title: "Ooops",
            icon: "error",
            text: response.data.type,
          });
        }
      }
    } catch (err) {
      Swal.fire({
        title: err.response,
        icon: "error",
        text: err.response,
      });
    }
  };

  useEffect(() => {
    data.documentos ? setSubmited(true) : setSubmited(false);
    setTotal(data.quantidade);

    window.localStorage.setItem("page", page);
    window.localStorage.setItem("size", size);
    window.localStorage.setItem("term", displayTerm);
    window.localStorage.setItem("type", displayType);
    window.localStorage.setItem("sort", displaySort);
  }, [page, total, size, data, displayTerm, displayType, displayTerm]);

  return (
    <>
      <Header
        handleChangeTerm={handleChangeTerm}
        handleChangeType={handleChangeType}
        handleChangeSort={handleChangeSort}
        handleSubmit={handleSubmit}
        user={user}
        displayTerm={displayTerm}
        displayType={displayType}
        displaySort={displaySort}
      />

      <SideBar />

      <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        {data.documentos ? (
          data.documentos.map((documento, index) => {
            return (
              <>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 mt-2">
                  <ul>
                    <h1 className="text-lg font-bold text-gray-800">
                      Número do documento: {documento.identifier}
                    </h1>

                    <li key={index}>
                      <p className="mt-2 text-gray-800">
                        {documento.highlight.map((highlight, index) => {
                          return (
                            <>
                              <p key={index}>{highlight}</p>
                            </>
                          );
                        })}
                      </p>
                    </li>
                    {documento.geo_point === null ? (
                      <></>
                    ) : (
                      <Link
                        to={`/map/${documento.geo_point.lat}/${documento.geo_point.lon}`}
                      >
                        <p className="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700">
                          Ver no Mapa
                          <svg
                            className="w-2.5 h-auto"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </p>
                      </Link>
                    )}
                  </ul>
                </div>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        size={size}
        total={total}
        submited={submited}
      />
    </>
  );
};

export default Home;
