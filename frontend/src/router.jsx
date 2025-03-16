import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import ForgetPassword from './pages/ForgotPassword';
import Nav from './pages/Nav';
import Enroll from './pages/Enroll';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : "/",
                element : <Enroll />
            },
            {
                path : "/nav",
                element : <Nav />

            },
            {
                path : "/forgetpassword",
                element : <ForgetPassword/>,
            },
            {
                path : "/signup",
                element : <Signup />
            },
            {
                path : '/login',
                element : <Login />
            }
        ]
    },
    
])