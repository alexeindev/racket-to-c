import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx';
import Steps from '../../components/Steps/Steps.jsx';


export default class Comparsion extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div>
                    <Steps></Steps>
                </div>
            </div>
        )
    }
}
