import React from 'react';
//import{BrowserRouter as Router, Route} from 'react-router-dom'

// Things i will do later 
// I will refactor my code in the best way possible
// move all styles to another file or module of its own

let dbFoods;
const Home = () =>{
    dbFoods = JSON.parse(localStorage.getItem('myFoods'));
    console.log(dbFoods);
    const style = {
        background:"white",
        color: "grey",
        border: '2px solid rgb(210,140,150)',
        padding: '10px 20px',
        borderRadius:'5px',
        margin: '2em 1em',
        paddingTop: '2em',
        paddingBottom: '2em',
        paddingRight: '2em',
        paddingLeft: '2em',
        fontSize: '24px',
        display: 'flex'

    }
    //const date = new Date();
    let key = -1;
    function handleClick(event){
        console.log(dbFoods);
        event.target.parentNode.style.display = 'none';
        let updatedArray = dbFoods.splice(key, 1);
        console.log(updatedArray);
        console.log(dbFoods);
        localStorage.setItem('myFoods', JSON.stringify(dbFoods));
    }
    // this is map is used to render the list of foods in this app
   return  dbFoods.map(food =>{
       key ++
       console.log(key)
        return(
            
            <div key={key} style={style}>
                <h2 style={{flex: '3'}}>{food.name}</h2>  
                <div styel={{textAlign: "right", flex: '1.5'}}>{food.qty} available</div>  
                <div onClick={handleClick} style={{margin: '0 2em', flex: '0.5', color: 'red'}}>x</div>  
                {/* <div>{date.getHours()}: {date.getMinutes()}</div> */}
            </div>
            
        )
    });
};

export default Home;