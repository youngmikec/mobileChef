import React from 'react';


function About(){
    return(
        <div>
           <h3>contact me via</h3>
           <p>email: michealozor15@gmail.com</p> 
           <p>phone: 08108816975</p>
           <div>
               <h3>Suggestions</h3>
               <form>
                    <input type="text" placeholder="your name"/>
                    <br/>
                    <br/>
                    <textarea cols="20" rows="4"></textarea>
                    <br/>
                    <br/>
                    <input type="submit" value="send" />
               </form>
           </div>
        </div>
    );
}


export default About;