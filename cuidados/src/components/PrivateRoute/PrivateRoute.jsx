import { Route, Redirect } from 'react-router-dom';
import useAuth from '../custom_hooks/useAuth.jsx';



function PrivateRoute({ children }) {
    let auth = useAuth();

    return (
        <Route
            render={(/*{ location }*/) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            /*state: { from: location }*/
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;