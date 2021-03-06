import React from 'react'

import NewPracticeLog from './NewPracticeLog'
import EditPracticeLog from './EditPracticeLog'
import StudentLogsContainer from './StudentLogsContainer'
import { Route, Switch } from 'react-router-dom'

import './styles/StudentLogs.css'

export default class StudentLogs extends React.Component{
    render(){
        return(
            <div className='StudentLogs'>
                <div className='leftStudentLogContainer' >
                    <h2 className='practice-logs-students-title' >Practice Logs</h2>
                    <StudentLogsContainer />
                </div>
                    <Switch>
                        <Route exact path='/student/logs' component={NewPracticeLog}/>
                        <Route path='/student/logs/edit/:id' component={EditPracticeLog} />
                    </Switch>
            </div>
        )
    }
}