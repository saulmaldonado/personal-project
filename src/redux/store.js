import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

//imported reducers
import teacherAuthReducer from './reducers/teacherAuthReducer'
import studentAuthReducer from './reducers/studentAuthReducer'
import teacherReducer from './reducers/teacherReducer'
import studentReducer from './reducers/studentReducer'
import lessonReducer from './reducers/lessonReducer'
import logsReducer from './reducers/logsReducer'
import assignmentReducer from './reducers/assignmentReducer'
import paymentReducer from './reducers/paymentReducer'


//rootReducer

const rootReducer = combineReducers ({
    teacherAuthReducer,
    studentAuthReducer,
    teacherReducer,
    studentReducer,
    lessonReducer,
    logsReducer,
    assignmentReducer,
    paymentReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))