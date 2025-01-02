import React from "react";
import { Form } from "react-bootstrap";
const FormGroup = (props) => {
    const{name, label, type, placeholder, required} = props
  return (
    <Form.Group controlId={`formBasic${label}`}>
      <Form.Label>{label} :</Form.Label>
      <Form.Control {...props}/>
    </Form.Group>
  );
};

export default FormGroup;
