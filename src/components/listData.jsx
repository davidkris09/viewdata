import React from 'react'
import response from '../../viewData.json'
import { Data } from '../helper/listData'
import { Years } from '../helper/years'
import { Months } from '../helper/months'

export const ListData = () => {
    const getData = response.data.map((list) => {
        return (
            <tr key={list.id}>
                <td>{list.createOn}</td>
                <td>{list.createBy}</td>
                <td>{list.transactionDate}</td>
                <td>{list.productID}</td>
                <td>{list.productName}</td>
                <td>{list.customerName}</td>
                <td>{list.amount}</td>
                <td>{list.status}</td>
            </tr>
        )
    })

    return (
        getData
    )
}
