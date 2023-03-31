import React, { useEffect, useState } from 'react'
import TodoTable from './TodoTable';
import CompletedAccordion from './CompletedAccordion';
import { v4 as uuidv4 } from 'uuid';

export default function Index() {

  const [input, setInput] = useState("");
  const [completedList, setCompletedList] = useState([]);
  const [unCompletedList, setUnCompletedList] = useState([]);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const newTaskList = JSON.parse(localStorage.getItem('taskList'));
    if (newTaskList) {
      setTaskList(newTaskList);
    }
  }, []);

  function parseData() {
    let newUnCompletedList = taskList.filter(task => task.complete === false);
    let newCompletedList = taskList.filter(task => task.complete === true);
    setUnCompletedList(newUnCompletedList);
    setCompletedList(newCompletedList);
  }

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    parseData();
  }, [taskList]);

  const handleAdd = () => {
    let task = {
      id: uuidv4(),
      date: new Date().toLocaleString() + "",
      task: input,
      complete: false,
    }
    setTaskList((prev) => [
      ...prev,
      task
    ]);
    setInput("");
  }

  // const handleChange = () => {
  //   let tempData = JSON.parse(JSON.stringify(todoList))
  //   // işlemler
  //   setData(tempData)
  //   localStorage.setItem("data",tempData)
  // }

  const handleDone = (id) => {

    let updatedTaskList = [...taskList];

    // İlgili görevi bul
    let taskIndex = updatedTaskList.findIndex((task) => task.id === id);

    // Görevin durumunu değiştir
    if (taskIndex !== -1) {
      updatedTaskList[taskIndex].complete = !updatedTaskList[taskIndex].complete;

      // Görev listesini güncelle
      setTaskList(updatedTaskList);
    }

    // taskList.map((task) => {
    //   let item = {};
    //   if (id === task.id) {
    //     setTaskList((prev) => [
    //       ...prev,
    //       item = { ...task, complete: !task.complete }
    //     ]);
    //   }
    // });
  };

  // const handleList = (index) => {
  //   taskList.map((task, indexOfArray) => {
  //     let item = {};

  //     if (index == indexOfArray) {
  //         setTaskList((prev) => [
  //           ...prev,
  //           item = { ...task, complete: !task.complete }
  //         ]);
  //     }
  //   });
  // }

  // const handleList = (list, index) => {
  //   list.map((task, indexOfArray) => {
  //     let item = {};

  //     if (index == indexOfArray) {

  //       if (!task.complete) {
  //         setCompletedList((prev) => [
  //           ...prev,
  //           item = { ...task, complete: !task.complete }
  //         ]);

  //         const newTodoList = todoList.filter((todo, indexToRemove) => {
  //           return indexToRemove !== indexOfArray;
  //         });
  //         setTodoList(newTodoList);
  //       }

  //       else {
  //         setTodoList((prev) => [
  //           ...prev,
  //           item = { ...task, complete: !task.complete }
  //         ])

  //         const newCompletedList = completedList.filter((todo, indexToRemove) => {
  //           return indexToRemove !== indexOfArray;
  //         });
  //         setCompletedList(newCompletedList);
  //       }
  //     }
  //   });
  // }

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task, indexToRemove) => {
      return id !== task.id;
    });
    setTaskList(newTaskList);
  }

  // const handleDelete = (index) => {
  //   const newTaskList = taskList.filter((task, indexToRemove) => {
  //     return indexToRemove !== index;
  //   });
  //   setTaskList(newTaskList);
  // }

  // const handleDelete = (complete, index) => {
  //   if (!complete) {
  //     const newTodoList = todoList.filter((task, indexToRemove) => {
  //       return indexToRemove !== index;
  //     });
  //     setTodoList(newTodoList);
  //   }
  //   else {
  //     const newCompletedList = completedList.filter((task, indexToRemove) => {
  //       return indexToRemove !== index;
  //     });
  //     setCompletedList(newCompletedList);
  //   }
  // }

  return (
    <div className="p-3 base-template">
      <h2>Task List</h2>
      <div className="form-floating mb-3 mt-5" style={{ display: "flex", justifyContent: "flex-end" }} >
        <input value={input} onInput={(e) => setInput(e.target.value)} type="text" className="form-control width-control" id="floatingInput" placeholder="s" />
        <label for="floatingInput">Task</label>
        <button onClick={() => handleAdd()} type="button" className="btn btn-primary ms-2" >Add</button>
      </div>

      <div className='Tasks'>
        <b>Pending Tasks</b> {unCompletedList.length}
        <b className='ms-4'>Completed Tasks</b> {completedList.length}
      </div>

      <div>
        <TodoTable unCompletedList={unCompletedList} handleDone={handleDone} handleDelete={handleDelete} firstColumn={"Datetir"} ></TodoTable>
      </div>

      {taskList.filter(task => task.complete).length > 0 && <CompletedAccordion completedList={completedList} handleDone={handleDone} handleDelete={handleDelete} ></CompletedAccordion>}

    </div>
  )
}