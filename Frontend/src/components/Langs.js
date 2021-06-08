import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


const Langs = () => {
    const langsState = useSelector((state) => state.langs);

    let languages = langsState.langs.map((l, idx) => 
        <div key={idx}>{l.name}</div>
    );


    return (
        <div>
            <span>Languages</span>
            {languages}
        </div>
    )
}

export default Langs
