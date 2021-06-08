import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { transitions, Provider as AlertProvider } from 'react-alert'
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';

// components
import Alert from './components/layouts/Alert'
import Header from './components/layouts/Header'
import Langs from './components/Langs'
import Projects from './components/Projects';
import Contact from './components/Contact';

// redux stuffs
import store from './store';
import loadProfile from './actions/profile';
import loadProjects from './actions/projects';
import loadLangs from './actions/langs'
import loadTheme from './actions/theme'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const alertOptions = {
    position: 'top right',
    timeout: 7000,
    transition: transitions.FADE
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
            <div className='c'>
                <Langs />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default App


ReactDOM.render(
    <ReduxProvider store={store}>
        <AlertProvider template={Alert} {...alertOptions} >
            <App />
        </AlertProvider>
    </ReduxProvider>,

    document.getElementById('root')
)
