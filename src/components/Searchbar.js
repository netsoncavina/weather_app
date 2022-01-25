import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css"; // optional

export default function Searchbar() {
  return (
    <>
      <Row className="justify-content-md-center searchbar">
        <Col md="auto">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Cidade"
              aria-label="Cidade"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Pesquisar
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}
