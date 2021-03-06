import React from 'react'
import UnpaidPaymentBlock from '../../Payments/UnpaidPaymentBlock'
import {getAllPaymentsDue} from '../../../redux/reducers/studentReducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import './styles/StudentNewInvoices.css'


class StudentNewInvoices extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
        this.props.getAllPaymentsDue(this.props.student.student_id)
    }

    updateList = () => {
        this.props.getAllPaymentsDue(this.props.student.student_id)
    }



    render(){
        console.log(this.props)
        return(
            <div>
                <h3 style={{textAlign: "center"}} >New Invoices</h3>

                { typeof this.props.payments === 'string' ? <div>No payments are due</div> : this.props.payments.map((ele, i) => {
                return <UnpaidPaymentBlock key={i} paymentId={ele.payment_id} paymentDueDate={ele.payment_duedate} paymentAmount={ele.payment_amount}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        student: reduxState.studentAuthReducer,
        payments: reduxState.studentReducer.paymentsDue 
    }
}

export default connect(mapStateToProps, {getAllPaymentsDue})(StudentNewInvoices)