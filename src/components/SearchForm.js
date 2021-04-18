import React from "react";
import { Form, FormControl, Button, Col, Row } from "react-bootstrap";

const SearchForm = ({ handleOnSubmit, searchTerm, handleOnChange }) => {
  return (
    <div>
      <Row className="search">
        <Form onSubmit={handleOnSubmit} className="form">
          <Col>
            <FormControl
              className="form"
              type="text"
              placeholder="Search for a moive"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Button
              className="btn"
              variant="outline-info"
              onClick={handleOnSubmit}
            >
              Search
            </Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default SearchForm;
