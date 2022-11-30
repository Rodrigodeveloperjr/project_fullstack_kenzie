import { FormCustomers } from '../components/FormCustomers'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact>
                <FormCustomers />    
            </Route>

            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    )
}

export { Routes }
