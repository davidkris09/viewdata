import React from 'react'
import Table from 'react-bootstrap/Table'
import {ListData} from './listData'

export const TableData = () => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Create Date</th>
                    <th>Create By</th>
                    <th>Transaction Date</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Customer Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <ListData/>
            </tbody>
        </Table>
    )
}
