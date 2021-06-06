import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect, useParams } from 'react-router-dom';
import { transitions, Provider as AlertProvider } from 'react-alert'
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';

// components
import Alert from './components/layouts/Alert'
import Profile from './components/Profile'

// redux stuffs
import store from './store';
import loadProfile from './actions/profile';
import loadProjects from './actions/projects';
// import profile from './reducers/profile';


const alertOptions = {
    position: 'top right',
    timeout: 7000,
    transition: transitions.FADE
}

const App = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const projects = useSelector((state) => state.projects);
    // const [profile, setProfile] = useState(null);
    const location = useLocation();

    useEffect(() => {
        dispatch(loadProfile());
        dispatch(loadProjects());
    }, [dispatch]);

    useEffect(() => {
        document.title = (profile.profile.name || '00 Team') + ' - Profile' 
    }, [profile]);

    console.log(profile);
    console.log(projects);


    return (
        <>
            {/* <Header /> */}

            {/* <div className='content'> */}
                <Switch>
                    <Route exact path="/">
                        <Profile />
                    </Route>

                    {/* <Route path="/account">
                        <Account />
                    </Route>

                    <Route path="/login" >
                        {user ? (user.username ? <Redirect to='/account' /> : <Login />) : <Login />}
                    </Route>

                    <Route path="/project/:slug" >
                        <Child />
                    </Route>
                    
                    <Route path="*">
                        <Error code='404' title='Not Found' description={<>The requested URL <span className='location-path'>{location.pathname}</span> was not found on this server. That’s all we know.</>} />
                    </Route> */}
                </Switch>
            {/* </div> */}
        </>
    )
}

export default App

// function Child() {
//     let { slug } = useParams();
  
//     return (
//         <span style={{ color: '#FFF' }} >{slug}</span>
//     );
// }


ReactDOM.render(
    <ReduxProvider store={store}>
        <AlertProvider template={Alert} {...alertOptions} >
            <Router>
                <App />
            </Router>
        </AlertProvider>
    </ReduxProvider>,

    document.getElementById('root')
)
