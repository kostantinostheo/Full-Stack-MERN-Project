import React from 'react';
import { Pagination } from 'react-bootstrap'
import './index.css'

export default function Pages() {
  return (
    <Pagination className='center'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item >{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
 );
}