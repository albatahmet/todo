import React from 'react'

export default function TodoRow({unCompletedList, handleDone, handleDelete}) {
    return (
        <>
            {unCompletedList.map((task, index) => {
                return (
                    <tr
                        className='table'
                        complete={task.complete}
                        style={{ listStyle: "none", textDecoration: task.complete && "line-through" }}
                    >
                        <th scope="row">{task.date}</th>
                        <td>{task.task}</td>
                        <td>
                            <button onClick={() => handleDone(task.id)} type="button" className="btn btn-success ms-2">Read</button>
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
