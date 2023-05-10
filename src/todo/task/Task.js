import React from 'react'
import { useState } from 'react'



import '../styles/TaskList.css'
import { myTaskList, taskType } from '../model/model'
import Modal from '../modal/Modal'
import AddTaskBtn from '../add-task/AddTaskBtn'


export default function Task({type}) {

  const [listOfTask, setListOfTask] = useState(myTaskList);

  const [taskDetails, setTaskDetails] = useState(-1);

  function taskInDetailsView(task)
  {
    setTaskDetails(task);
  }

  function StepList(props) {

    const uIlistOfTask = listOfTask.filter((task)=>{
     
      if(props.type.type === "All" ) return {task};
      else if (props.type.type == task.taskType.type) return {task}
    })
    

    return (
      <>
      <div>
        {
          uIlistOfTask.map((task, index) => (
            <div style={{
              "--colorOfLineAndNumber" : task.taskType.color

            }} onClick={()=>taskInDetailsView(task)} className='listOfTask' key={index}>

              <div className='listOfTaskColor'></div>

              <div className='taskTitleContainer'>
                <div> 
                  <div> {index+1} </div></div>
                <h1> {task.title} </h1> 
              
              </div>

              <div>
                <p>{task.description}</p>
              </div>

            </div>
          ))
        }
      </div>
      </>
      
    );
  }
  
  console.log("Inside task list" );
  console.log(listOfTask);

  return (
    <>
        <StepList type={type}/>
        {
          taskDetails != -1 ? <Modal taskDetail={taskDetails} isOpen={true}/> : ""
        }

         window.scrollTo(0, document.body.scrollHeight);

        <AddTaskBtn tasks = {listOfTask} setTasks = {setListOfTask} />       
    </>
  )
}
