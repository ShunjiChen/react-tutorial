/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-03 20:10:30
 * @Description: file content
 */
import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table