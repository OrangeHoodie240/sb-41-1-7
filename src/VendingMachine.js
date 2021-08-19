import React from 'react';
import './VendingMachine.css';
import {Link} from 'react-router-dom';

const VendingMachine = (props)=>{
    return (
            <div className='vending-machine'>
                <h2>Vending Machine</h2>
                <div className='snack-panel'>
                    <ul>
                        {props.snacks.map(s=><li><Link to={'/' + s.name}>{s.name}</Link></li>)}
                    </ul>
                </div>
            </div>

    )
};




export default VendingMachine; 