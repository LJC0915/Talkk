import React from 'react';
import ReactDOM from 'react-dom';

// import Main from 'components/Main.jsx';

window.onload = function() {
    function tick() {
        const date = 1
        const t = new Date().toLocaleTimeString();
        // console.log(t);
        const el = (<h1>
            {t}
        </h1>);
        ReactDOM.render(el, document.getElementById('root'));
    }
    console.log('tt');
    console.log(new Date());
    setInterval(tick, 1000);
};
