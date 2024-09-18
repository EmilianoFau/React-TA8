import './App.css';
import React, {useState} from 'react';
import Button from './components/Button/index';
import Input from './components/Input/index';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleChange = (newTask) => {
    setTask(newTask);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask(""); 
    }
  };

  const handleDeleteTask = (deleteIndex) => {
    setTaskList(taskList.filter((value, index) => index !== deleteIndex));
  };

  const handleEditTask = (editIndex) => {
    if (editingIndex === null) {
      setEditTask(taskList[editIndex]);
      setEditingIndex(editIndex);
    } else {
      if (editTask.trim()) {
        const updatedTaskList = taskList.map((item, indice) =>
          indice === editingIndex ? editTask : item
        );
        setTaskList(updatedTaskList);
        setEditingIndex(null); 
        setEditTask("");
      }
    }
  };

  return (
    <>
      <div>
        <Input value={task} onChange={handleChange} />
        <Button onClick={handleAddTask} text="Agregar tarea" />
        <ul>
          {taskList.map((item, index) => {
            if (editingIndex === index) {
              return (
                <li key={index}>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <Button onClick={() => handleEditTask(index)} text="Guardar tarea" />
                </li>
              );
            } else {
              return (
                <li key={index}>
                  {item}
                  <Button onClick={() => handleEditTask(index)} text="Editar tarea" />
                  <Button onClick={() => handleDeleteTask(index)} text="Eliminar tarea" />
                  </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
