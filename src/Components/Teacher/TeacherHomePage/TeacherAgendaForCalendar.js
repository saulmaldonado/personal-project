import React from 'react'
import LessonBlock from '../../LessonBlock/LessonBlock'
import {getAllLessonsForTeacher, getStudentsForTeacher} from '../../../redux/reducers/teacherReducer'
import {connect} from 'react-redux'

import '../TeacherLessons/styles/TeacherAgendaForCalendar.css'

var moment = require('moment')


class TeacherAgenda extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
        this.props.getAllLessonsForTeacher(this.props.teacher.teacher_id)
        this.props.getStudentsForTeacher(this.props.teacher.teacher_id)
    }



    render(){
        return(
            <div className='teacher-agenda-container-calendar'>
                <div>Your Agenda:</div>
                <div> 
                {moment().format('llll')}
                </div>
                <div className='lesson-blocks-calendar' >
                    {this.props.teacherInfo.lessons.map((ele, i) => {
                        return <LessonBlock key={i} lessonType={ele.lesson_type} lessonTime={moment(ele.lesson_time).format('llll')} lessonLength={ele.lesson_length} studentName={`${ele.student_first_name} ${ele.student_last_name}`} /> 
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        teacher: reduxState.teacherAuthReducer,
        teacherInfo: reduxState.teacherReducer
    }
}

export default connect(mapStateToProps, {getAllLessonsForTeacher, getStudentsForTeacher})(TeacherAgenda)