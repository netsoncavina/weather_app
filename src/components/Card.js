import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional

import KEY from "../KEY";
// import { getTime } from "../functions";

export default function Card(props) {
  const [city, setCity] = useState("São Paulo");
  const [temp, setTemp] = useState(26);
  const [temp_min, setTempMin] = useState(20);
  const [temp_max, setTempMax] = useState(31);
  const [description, setDescription] = useState("Céu limpo");
  const [feelsLike, setFeelsLike] = useState(`${temp + 2}`);
  const [humidity, setHumidity] = useState(94);
  const [hour, setHour] = useState("12:00");
  const [background, setBackground] = useState(
    `url("./images/background.jpg")`
  );
  const [cardBackground, setCardBackground] = useState(
    `url("./images/dia.jpg")`
  );

  function getTime() {
    let today = new Date();

    let time = today.getHours() + ":" + today.getMinutes();
    return [time, today.getHours()];
  }

  function getBackground(description, hours) {
    console.log(hours >= 6);
    console.log(description);
    if (description == "nublado") {
      setCardBackground(`url("./images/nublado.jpg")`);
    }
    if (description === "ceu limpo") {
      if (hours >= 6 && hours <= 18) {
        setCardBackground(`url("./images/dia.jpg")`);
      }
      if (hours >= 18 && hours <= 6) {
        setCardBackground(`url("./images/noite.jpg")`);
      }
    }
  }
  function getWeather() {
    const city = document.getElementById("searchbar_clima").value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${KEY}`
    )
      .then((res) => res.json())
      .then((res_1) => {
        setCity(res_1.name);
        setTemp(`${Math.round(res_1.main.temp)}`);
        setTempMin(`${Math.round(res_1.main.temp_min)}`);
        setTempMax(`${Math.round(res_1.main.temp_max)}`);
        setDescription(res_1.weather[0].description);
        setFeelsLike(`${Math.round(res_1.main.feels_like)}`);
        setHumidity(`${Math.round(res_1.main.humidity)}`);
        setHour(getTime()[0]);
        // getBackground(res_1.weather[0].description, getTime()[1]);
        getBackground("ceu limpo", 22);
      });
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `${background}`,
      }}
    >
      <Row className="justify-content-md-center searchbar">
        <Col md="auto">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Cidade"
              aria-label="Cidade"
              id="searchbar_clima"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={getWeather}
            >
              Pesquisar
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <div
        className="card"
        style={{
          backgroundImage: `${cardBackground}`,
        }}
      >
        <h3 className="card--cidade">{city}</h3>
        <h4>{hour}</h4>
        <div className="card--temperatura">
          <h3>{temp}º </h3>
          <h5>{description}</h5>
        </div>
        <div className="card--colunas">
          <div className="card--coluna--min-max">
            <h5 className="card--min-max">Minima - {temp_min}º</h5>
            <h5 className="card--min-max">Maxima - {temp_max}º</h5>
          </div>
          <div>
            {/* <h5>Clima - {description}</h5> */}
            <h5>Sensação - {feelsLike}º</h5>
            <h5>Umidade - {humidity}%</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
