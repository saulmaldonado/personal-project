import React from 'react'

export default class LogBlock extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div>
                    <p>Practice Log #{this.props.logCount}:</p>
                    <p>{this.props.logDate}</p>
                </div>
                <div>
                    <p> {this.props.logTime} </p>
                    <p> {this.props.logData} </p>
                </div>

            </div>
        )
    }
}