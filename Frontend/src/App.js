import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert'
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';


// components
import Alert from './components/layouts/Alert'
import Header from './components/layouts/Header'
import Langs from './components/main/Langs'
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';

// redux stuffs
import store from './redux/store';
import loadProfile from './redux/actions/profile';
import loadProjects from './redux/actions/projects';
import loadLangs from './redux/actions/langs'
import loadTheme from './redux/actions/theme'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './components/sass/base.scss'

const alertOptions = {
    position: 'top right',
    timeout: 7000,
    transition: 'fade',
    containerStyle: {
        top: window.innerWidth < 1000 ? '10px' : '70px',
        zIndex: '100',
    }
}

const App = () => {
    const dispatch = useDispatch();
    const profileState = useSelector((state) => state.profile);
    // const projectState = useSelector((state) => state.projects);
    // const langState = useSelector((state) => state.langs);
    const themeState = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(loadProfile());
        dispatch(loadProjects());
        dispatch(loadLangs());
        dispatch(loadTheme());
    }, [dispatch]);

    useEffect(() => {
        if (profileState.profile) document.title = profileState.profile.name + ' - Profile'
    }, [profileState]);

    useEffect(() => {
        document.body.classList = themeState.theme || 'light'
    }, [themeState]);

    if (profileState.profile === null) {
        return <div className='nothing-for-show'><h2>Nothin For Show. No Profile</h2></div>
    }


    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <div className='main'>
                        <Langs />
                        <Projects />
                        <Contact />
                    </div>
                </Route>

                <Route path="/about">
                    about
                </Route>
            </Switch>
        </>
    )
}

export default App


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
