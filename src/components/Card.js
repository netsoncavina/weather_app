import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional

import KEY from "../KEY";

export default function Card(props) {
  const [city, setCity] = useState("São Paulo");
  const [temp, setTemp] = useState("26º");
  const [temp_min, setTempMin] = useState("20º");
  const [temp_max, setTempMax] = useState("31º");
  const [description, setDescription] = useState("Nebuloso");

  function getWeather() {
    const city = document.getElementById("searchbar_clima").value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${KEY}`
    )
      .then((res) => res.json())
      .then((res_1) => {
        setCity(res_1.name);
        setTemp(`${res_1.main.temp}º`);
        setTempMin(`${res_1.main.temp_min}º`);
        setTempMax(`${res_1.main.temp_max}º`);
        setDescription(res_1.weather[0].description);
        // return [
        //   res_1.name,
        //   res_1.main.temp,
        //   res_1.main.temp_min,
        //   res_1.main.temp_max,
        //   res_1.weather[0].description,
        // ];
      });
  }

  return (
    <div className="App">
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
      <div className="card">
        <h3>{city}</h3>
        <h4>{temp} </h4>
        <h5>Min - {temp_min}</h5>
        <h5>Max - {temp_max}</h5>
        <h5>Clima - {description}</h5>
      </div>
    </div>
  );
}
