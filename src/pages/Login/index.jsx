import { Formik, Form, Field } from "formik";
import api from "../../api/api";
import Swal from "sweetalert2";
import { useUserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/login", {
        username: values.username,
        password: values.password,
        company: values.company,
      });
      console.log(response);
      
      if (response.data.login_status === "logged_in_successfully") {
        const userData = {
          id: response.data.id,
          name: response.data.name,
          company: response.data.company,
          token: response.data.token,
          role: response.data.type,
        };
        setUser(userData);
        navigate("/home");
      } else {
        Swal.fire({
          title: "Ooops",
          icon: "error",
          text: response.data.login_status,
        });
      }

    } catch (err) {
      Swal.fire({
        title: err.response.status,
        icon: "error",
        text: err.response.message,
      });
    }
  };

  console.log(user);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <svg
            className="p-1"
            width="150"
            height="150"
            viewBox="0 0 343 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M157.681 3.38016C153.948 5.38016 118.614 25.6468 79.1478 48.4468C17.2811 84.1802 7.01443 90.4468 3.94777 94.9802L0.4811 100.314L0.0811 190.047C-0.185567 248.047 0.214433 281.647 1.14777 284.98C1.81443 287.647 4.21443 291.647 6.34777 293.78C8.34777 295.914 44.2144 317.514 85.9478 341.647L161.814 385.647H171.148H180.481L256.348 341.78C298.081 317.514 333.948 296.047 335.948 294.047C338.081 292.047 340.348 288.047 341.148 285.38C342.881 278.847 343.014 107.647 341.148 100.98C340.481 98.4468 338.081 94.5802 335.948 92.3135C333.814 90.1802 297.948 68.7135 256.348 44.5802C183.014 2.18016 180.214 0.713497 172.481 0.180164C165.681 -0.35317 163.548 0.180164 157.681 3.38016ZM214.481 115.914C214.481 118.047 213.814 122.714 213.014 125.914L211.414 132.047L203.681 124.314C199.281 120.047 195.814 116.18 195.814 115.647C195.814 114.447 204.748 112.047 210.214 111.914C214.081 111.78 214.481 112.18 214.481 115.914ZM201.681 126.314C207.814 132.447 210.214 135.78 209.148 136.447C207.548 137.38 189.148 120.447 189.148 118.18C189.148 115.247 193.414 118.047 201.681 126.314ZM203.148 146.447C195.414 157.647 170.348 177.114 163.681 177.114C162.614 177.114 158.748 174.18 155.148 170.447L148.748 163.914L151.281 158.18C156.348 146.98 169.014 131.78 180.214 123.647L185.681 119.647L196.348 130.314L207.014 140.98L203.148 146.447ZM158.481 140.58C158.481 140.98 157.414 142.98 155.948 144.847C154.614 146.847 152.214 150.98 150.614 154.18C148.081 158.98 147.414 159.647 145.148 158.447C141.681 156.58 137.148 156.847 132.614 159.114C130.481 160.314 128.481 160.847 128.081 160.58C127.814 160.18 129.548 157.247 131.948 153.78C137.814 145.647 146.748 139.78 153.414 139.78C156.214 139.78 158.481 140.18 158.481 140.58ZM183.948 182.047C181.281 187.38 176.748 192.047 169.548 196.98C164.748 200.18 164.214 199.647 167.148 194.447C169.414 190.58 169.681 184.58 167.814 181.114C166.748 179.247 167.281 178.447 170.214 177.247C172.214 176.447 176.614 173.914 179.814 171.78L185.814 167.78L186.214 172.314C186.481 174.98 185.548 179.114 183.948 182.047ZM151.148 175.78C154.081 178.714 155.548 181.114 154.481 181.114C152.481 181.114 143.814 173.38 143.814 171.514C143.814 169.247 146.081 170.58 151.148 175.78ZM135.948 185.514C132.881 188.314 130.081 190.447 129.681 190.047C128.481 188.847 138.748 178.447 140.214 179.38C140.881 179.78 139.014 182.58 135.948 185.514ZM138.481 188.447C135.281 191.78 131.948 194.447 131.281 194.447C130.481 194.447 132.614 191.78 135.814 188.447C139.014 185.114 142.348 182.447 143.014 182.447C143.814 182.447 141.681 185.114 138.481 188.447ZM146.481 186.18C146.481 188.047 137.681 195.914 136.748 194.847C136.214 194.314 137.681 191.914 140.081 189.514C144.214 185.247 146.481 184.047 146.481 186.18ZM130.481 196.314C130.481 196.714 129.948 197.38 129.148 197.78C128.481 198.18 127.814 197.914 127.814 197.247C127.814 196.447 128.481 195.78 129.148 195.78C129.948 195.78 130.481 196.047 130.481 196.314ZM135.814 197.114C135.814 197.78 135.548 198.447 135.281 198.447C134.881 198.447 134.214 197.78 133.814 197.114C133.414 196.314 133.681 195.78 134.348 195.78C135.148 195.78 135.814 196.314 135.814 197.114ZM105.414 224.714C108.881 228.047 109.148 228.98 109.148 238.447C109.148 247.647 108.748 248.98 105.814 251.78C103.948 253.514 102.481 255.514 102.481 256.314C102.481 257.114 103.948 260.047 105.814 262.714C107.681 265.38 109.148 269.514 109.148 271.647C109.148 275.647 109.014 275.78 103.148 275.78C97.1478 275.78 97.0144 275.78 91.0144 266.447C85.5478 257.914 84.6144 257.114 80.4811 257.114H75.9478L75.5478 266.047L75.1478 275.114L68.2144 275.514L61.1478 275.914V248.58V221.114H81.4144C101.548 221.114 101.681 221.114 105.414 224.714ZM167.681 227.38C167.681 232.98 166.081 236.447 155.281 254.447L143.014 275.114H135.814C129.814 275.114 128.481 274.714 128.081 272.714C127.814 271.38 132.348 262.447 138.081 252.847C143.814 243.247 148.748 234.847 148.881 234.18C149.148 233.647 142.748 233.114 134.614 233.114H119.814V227.114V221.114H143.814H167.814L167.681 227.38ZM222.081 225.38C225.281 228.447 226.481 230.847 226.481 234.047C226.481 238.314 226.214 238.447 221.414 238.447C217.948 238.447 215.414 237.514 213.814 235.78C211.814 233.514 209.681 233.114 201.548 233.114H191.814V237.78V242.447H205.548C218.881 242.447 219.414 242.58 222.881 246.18C226.081 249.514 226.481 250.98 226.481 258.447C226.481 266.18 226.081 267.38 222.214 271.38L217.948 275.78H202.481H187.014L181.948 270.58C175.014 263.514 175.548 259.247 183.281 258.714C186.881 258.447 189.281 258.98 190.481 260.447C191.681 261.914 194.748 262.447 201.948 262.447H211.814V258.447V254.447H198.614H185.414L181.281 249.78C177.681 245.647 177.148 243.914 177.148 237.78C177.148 231.647 177.681 229.914 181.281 225.78L185.414 221.114H201.548H217.681L222.081 225.38ZM281.148 227.114V233.114H273.148H265.148V254.447V275.78H257.814H250.481V254.447V233.114H242.481H234.481V227.114V221.114H257.814H281.148V227.114Z"
              fill="#4F46E5"
            />
            <path
              d="M179.014 139.114C177.014 142.18 177.014 142.714 179.014 145.78C183.014 151.78 190.481 149.514 190.481 142.18C190.481 135.647 182.614 133.514 179.014 139.114ZM187.814 140.447C189.814 142.847 187.548 146.447 183.814 146.447C180.748 146.447 179.281 142.714 181.281 140.314C183.281 137.914 185.681 137.914 187.814 140.447Z"
              fill="#4F46E5"
            />
            <path
              d="M75.8145 239.113V245.247L85.5478 244.847L95.1478 244.447V239.113V233.78L85.5478 233.38L75.8145 232.98V239.113Z"
              fill="#4F46E5"
            />
          </svg>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entre com a sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ username: "", password: "", company: "" }}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome de Usuário
                </label>
                <div className="mt-2">
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CNPJ
                </label>
                <div className="mt-2">
                  <Field
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
