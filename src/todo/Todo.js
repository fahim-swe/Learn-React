import React from 'react'
import { useState } from 'react'


import { taskList } from './task'

import TabBar from './tabs/TabBar';
import '../todo/styles/button.css'
import AddTaskBtn from './add-task/AddTaskBtn';

export default function Todo() {

    // const [tasks, setTaskList] = useState(taskList);
    // const [task, setTask] = useState('')
    // const [editTask, setEditTask] = useState('')

    // function addNewTask(value)
    // {
    //     setTaskList([
    //         ...tasks, 
    //         {id: tasks.length+1, data: value, editMode : false}
    //     ])

    //     setTask('');
    // }


    // function turnOnEditMode(taskId, data)
    // {
    //     const newTaskList = tasks.map((task)=> {
    //         if(task.id === taskId) return { ...task, editMode: !task.editMode}
    //         else return {...task, editMode: false}
    //     })

           
    //     setEditTask(data)
    //     setTaskList(newTaskList)
    // }


    // function saveUpdateTask(taskId)
    // {
    //     const newTaskList = tasks.map((task)=>{
    //        if(task.id === taskId) return {...task, data: editTask, editMode : false}
    //        else return task
    //     })

    //     setTaskList(newTaskList);
    // }

    // function deleteTask(taskId)
    // {
    //     const newTaskList = tasks.filter(task => task.id !== taskId);
    //     setTaskList(newTaskList);
    // }

  return (
    <>
       
        <div >
            <TabBar/>
            
        </div>
       
       
        

        {/* <div style={{
            display: 'flex',
            justifyContent : 'center'
        }}>
            <div style={{
                width: '90%',
            }}>
                <BasicTabs />
            </div>
        </div>
        <div style={{

        }} >
            <div style={{
                background: 'red',
                Text : 'center'
            }}>
                 <  BasicTabs />
            </div>
          
        </div>
       
        <div>
            <input type='text'  value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={()=> addNewTask(task)} >Add </button>
        </div>
        
        <ul>
            {
                tasks.map((task)=>(
                    <li key={task.id}>
                        
                        {task.editMode ? (
                            <div>
                                <input value={editTask} onChange={(e)=> setEditTask(e.target.value)}/>
                                <button onClick={()=> saveUpdateTask(task.id)}>Save</button>
                            </div>
                        ) : 
                           <div>
                             {task.data} 
                             <button onClick={()=> turnOnEditMode(task.id, task.data)}>Edit</button>
                             <button onClick={()=> deleteTask(task.id)}>Delete</button>
                           </div>
                        }
                        
                    </li>
                ))
            }
        </ul> */}
    </>
  )
}