import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "../../componets/button/index";

export default function Login(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [login, setLogin] = useState(null);

  const endpoint = "http://localhost:3001/login";

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  useEffect(() => {
    if (Cookies.get("user")) {
      setLogin(true);
    }
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(endpoint, data)
      .then((res) => {
        console.log(res.status);

        Cookies.set("user", "prueba", { expires: 1, path: "/" });
        setLogin(true);
      })
      .catch((Error) => {
        setError("Hubo un " + Error);
      });
  };

  return (
    <>
      <div className="mainLogin">
        <div className="half">
          <div className="modalLogin">
            {login ? (
              <>
                <h2 className="logTitle">¡Ya estas logueado!</h2>
                <Link className="create" to="/MercadoHooks">
                  <p>Seguir comprando</p>{" "}
                </Link>
              </>
            ) : (
              <>
                <div className="titleLogin">
                  <h2 className="logTitle">Hola! Ingresa tu e-mail y clave</h2>
                </div>
                <div className="email">
                  <form className="formLogin" onSubmit={handleSubmit}>
                    <input
                      className="inputLogin"
                      placeholder="E-mail"
                      name="email"
                      onChange={handleChange}
                    />
                    <input
                      className="inputLogin"
                      type="password"
                      placeholder="Clave"
                      onChange={handleChange}
                      name="clave"
                    />
                    <Button />
                  </form>

                  <p> {error} </p>
                </div>
                <Link className="create" to="Create">
                  {" "}
                  Crear cuenta{" "}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
