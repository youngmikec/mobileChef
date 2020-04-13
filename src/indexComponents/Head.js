import React from 'react';
import {Link} from 'react-router-dom';

function Head(){
    return(
        <div>
            <nav style={{background: "transparent", minHeight: "30px"}}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>Add recipe</li></Link>
                    {/* <Link to="/services"><li>Services</li></Link> */}
                </ul>
            </nav>
        </div>
    );
}


export default Head;

