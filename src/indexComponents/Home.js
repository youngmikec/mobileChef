import React from 'react';


const Home = () =>{
    const style = {
        background:"orange",
        border: 'none',
        padding: '10px 20px',
        borderRadius:'5px'
    }
    return (
        <div>
            <h1>Welcome to debug tech inc</h1>
            <p>the best e-learing website in Enugu</p>
            <button style={style}>Get started</button>
        </div>
    );
};

export default Home;