import React from 'react';
import { Form } from 'react-bootstrap'

export default function SearchInput() {
  return (
    <Form>
      <Form.Control type="search" placeholder="Αναζήτηση..." />
    </Form>

  );
}