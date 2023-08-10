import React from 'react';
import preloader from "../../../image/loader.gif";

const Preloader = () => {
    return (
        <div style={{width: '50px', height: '50px'}}>
            <img src={preloader} alt={'loader'}/>
        </div>
    );
};

export default Preloader;