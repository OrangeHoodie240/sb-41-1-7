import React from 'react'; 
import {Link} from 'react-router-dom';
import './SnackComponent.css'; 

const SnackComponent = ({name, img})=>{
    return (
        <>  
                <Link to='/'>GO BACK</Link>
                <h2 className='snack-component-h2'>{name}</h2>
                <img className='snack-component-img' src={img} />
        </>);
};


export default SnackComponent; 