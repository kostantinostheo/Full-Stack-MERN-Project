import React from "react";
import { Table } from 'react-bootstrap';
import "./index.css";

export default function Board() {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>1</td>
          <td>text</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
      </tbody>
   </Table>
  );
}
