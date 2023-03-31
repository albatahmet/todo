import React from 'react'
import TodoRow from './TodoRow'

export default function TodoTable({ unCompletedList, handleDone, handleDelete, ...props }) {
    return (
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th scope="col">{props?.firstColumn || "Date"}</th>
                    <th scope="col">Task</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <TodoRow unCompletedList={unCompletedList} handleDone={handleDone} handleDelete={handleDelete} ></TodoRow>
            </tbody>
        </table>
    )
}
