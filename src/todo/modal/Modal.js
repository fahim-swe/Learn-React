import React, { useState } from 'react';


import { taskType } from '../model/model';
import '../styles/modal.css'

function Modal(props) {

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const [newTask, setNewTask] = useState({
    title: "",
    description : "",
    taskType : taskType[0]
  })


  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const handleInputChange = (event) => {
    const {name, value} = event.target;    

    setNewTask({...newTask, [name]: value})
  }


  function handleSelect (e){
    console.log(e.target.value);
  }

  function addNewTaskToMyList () {
   
    console.log(newTask);

    props.addTask.setTasks([
      ...props.addTask.tasks,
      {id: props.addTask.tasks.length+1, taskType: newTask.taskType, title : newTask.title, description: newTask.description}
    ])

    toggleModal();

    window.scrollTo(0, document.body.scrollHeight);

  }

  return (
    <>

      {
        isOpen ? <div style={{
           
        }} className="modal">
            <div className='modalarea'>
                <h1>Add New Task</h1>
                <form>

                    


                    <label className='taskLabel' >Title</label>
                    <input className= {props.taskDetail !== undefined ? "disableInput taskTitleInput": "taskTitleInput"}
                      value={ props.taskDetail !== undefined ? props.taskDetail.title : newTask.title} 

                      onChange= {(e)=> setNewTask({...newTask, title: e.target.value})}
                    />

                    <label className='taskLabel'>What's your task</label>

                    {
                      props.taskDetail !== undefined ? <div>
                        {props.taskDetail.description}
                      </div> : 
                        <textarea className= {props.taskDetail !== undefined ? "taskDescriptionInput disableInput taskDescriptionWithContent" : "taskDescriptionInput"} value={ props.taskDetail !== undefined ? props.taskDetail.description : newTask.description} 
                       

                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}

                        ></textarea>
                    }
                   

                
                    <div className="selectTaskType">

                      {
                        props.taskDetail !== undefined ? <div style={{
                          fontSize : 'large'
                        }}>
                          {props.taskDetail.type}
                        </div> : 
                        <select onChange={(e)=> {
                          
                          
                          const _taskType = taskType.filter(x => x.id == e.target.value);
                          
                          setNewTask({
                            ...newTask, 
                            taskType: _taskType[0]
                          })



                        }} >
                       {
                          taskType.filter((type) => type.id == 0 )
                    
                            .map((task)=>(
                             
                            
                            <  option   value={task.id} key={task.id} >
                                  {task.type}
                              </option>
                          ))
                          } 
                        </select>
                      }
                        
                    </div>
                    
                    
                </form>

                <div className='modalBtnContainer' >
                        <button className='modalBtn cancelBtn'>Cancel</button>
                        <button onClick={()=>addNewTaskToMyList()} className='modalBtn'>Submit</button>
                </div>
            </div>
        </div> : ""
      }
    </>
  );
}

export default Modal;