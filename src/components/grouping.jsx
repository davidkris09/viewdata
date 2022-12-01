import React, {useState, useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import response from '../../viewData.json'
import {TableData} from '../components/table'
import {Years} from '../helper/years'
import { Months } from '../helper/months';

export const Grouping = () => {
  const groupingMonth = Months().map((list,index) => {
    return(
      <Accordion key={index}>
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{list}</Accordion.Header>
            <Accordion.Body>
              <TableData/>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  })

  const groupingYears = Years().sort().map((list,index) => {
    return (
      <Accordion key={index}>
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{list}</Accordion.Header>
            <Accordion.Body>
              {groupingMonth}
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  })

  return (
    groupingYears
  )
}