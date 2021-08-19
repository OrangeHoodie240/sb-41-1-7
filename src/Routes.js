import React from 'react'; 
import {Switch, Route} from 'react-router-dom';
import SnackComponent from './SnackComponent';
import VendingMachine from './VendingMachine';

const Routes = ({snacks})=>{
    return (
                <Switch>
                        <Route exact path='/'>
                            <VendingMachine snacks={snacks}/>
                        </Route>
                        {snacks.map(s => {
                            return (<Route exact path={'/' + s.name}>
                                <SnackComponent name={s.name} img={s.img} />
                            </Route>);
                        })}
                </Switch>
    );
};



export default Routes;