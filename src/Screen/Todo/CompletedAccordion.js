import React from 'react'
import CompletedRow from './CompletedRow'

export default function CompletedAccordion({ completedList, handleDone, handleDelete }) {
    return (
        <div className="AccordionTable">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Completed Tasks
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Task</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CompletedRow completedList={completedList} handleDone={handleDone} handleDelete={handleDelete} ></CompletedRow>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
