import { Switch, Route, Redirect } from 'react-router-dom';
import Mainlayout from '../layouts/Mainlayout';



const MainRoute = () =>{

    return(
        <Switch>
            <Route path="/" exact>
                <Mainlayout/>
            </Route>
        </Switch>
    )
}

export default MainRoute;