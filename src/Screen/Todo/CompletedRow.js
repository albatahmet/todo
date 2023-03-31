import React from 'react'

export default function CompletedRow({ completedList, handleDone, handleDelete }) {

    return (
        <>
            {completedList.map((task, index) => {
                return (
                    <tr
                        className='table'
                        complete={task.complete}
                        style={{ listStyle: "none", textDecoration: task.complete && "line-through" }}
                    >
                        <th scope="row">{task.date}</th>
                        <td>{task.task}</td>
                        <td>
                            <button onClick={() => handleDone(task.id)} type="button" className="btn btn-secondary ms-2">UnRead</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(task.id)} type="button" className="btn btn-danger ms-2">X</button>
                        </td>
                    </tr>
                )
            })
            }
        </>
    )
}
