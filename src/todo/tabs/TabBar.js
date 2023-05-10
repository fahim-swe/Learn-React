import React from 'react'
import { useState } from 'react'

import Task from '../task/Task';

import { tabList } from '../model/model';

import '../styles/TabBar.css'

export default function TabBar() {

    const [tabs, setTabs] = useState(tabList);
    const [ _taskType, setTaskType] = useState(tabList[0].type);
    console.log(tabList);

    function handleSelectedTab(tab)
    {
        setTabs(tabs.map(_tab => {
            if(_tab.id == tab.id){
                return {..._tab, isSelect: true}
            }
            else{
                return {..._tab, isSelect: false}
            }
        }))

        
        setTaskType(tab.type);
    }

  return (
    <>
         <h2>My Todo Application</h2>

        
        <div className="warpper">
            
            <div className="tabs">
                {
                    tabs.map((tab)=> (
                       <label onClick={()=> handleSelectedTab(tab)}  className={`tab ${tab.isSelect && 'selectedTab'}` } key={tab.id}>
                        
                          {tab.type.type}
                        </label>     
                    ))
                }
            </div>
        

            <div style={{
                width: '80vw'
            }}>
                <Task type={_taskType}/>
            </div>
        </div>
    </>
  )
}
