import React from 'react';
import './calculator.css';
export default class Calculator extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='Container'>
                <div className='screen'>
                    <h1>0</h1>
                </div>
                <div className='numbers'>
                    <h4 className='item1'>AC</h4>
                    <h4 className='item1'>+/-</h4>
                    <h4 className='item1'>%</h4>
                    <h4 className='item0'>+</h4>
                    <h4 className='item1'>7</h4>
                    <h4 className='item1'>8</h4>
                    <h4 className='item1'>9</h4>
                    <h4 className='item0'>*</h4>
                    <h4 className='item1'>4</h4>
                    <h4 className='item1'>5</h4>
                    <h4 className='item1'>6</h4>
                    <h4 className='item0'>-</h4>
                    <h4 className='item1'>1</h4>
                    <h4 className='item1'>2</h4>
                    <h4 className='item1'>3</h4>
                    <h4 className='item0'>+</h4>
                    <h4 className='item1x'>0</h4>
                    <h4 className='item0'>=</h4>
                </div>
            </div>
        )
    }
}