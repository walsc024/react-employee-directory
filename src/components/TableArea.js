import React from 'react';
import API from '../utils/API'

export default class TableArea extends React.Component {
    state = {
            employees: [{}],
            filteredEmployees: [{}]
    }
    
    componentDidMount(){
        API.getEmployees().then(response => {
            this.setState({
                employees: response.data.results,
                filteredEmployees: response.data.results,
            })
        })
    }
    
        render(){
            return (
                <h4>This is where the table etc will be</h4>
            )
        }
}