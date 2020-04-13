import React from 'react';
import img from '../img/fut img1.jpg'
import './index.css';


function About(){
    const d2Style = {
        position:"absolute",
        background: "lightgrey", 
        top:"30vh", 
        height: "70vh",
        boxShadow: "0 1 3 black",
        width: "100%"
    };
    const d3Style = {
        position: "relative", 
        top: "6rem", 
        minHeight: "50vh",
        borderRadius:"8px", 
        margin: "auto",
        width: "90%", 
         background: 'white'
    };
    class Food {
        constructor(name, qty){
            this.name = name;
            this.qty =qty;
        }
    }
    let foodsInShop; 
    let dbfood = localStorage.getItem('myFoods');
    if(dbfood.length === 0 || undefined ){
        foodsInShop = [];
        localStorage.setItem('myFoods', JSON.stringify(foodsInShop));
    }else{
        foodsInShop = JSON.parse(localStorage.getItem('myFoods'));
    }

    const updateDb = (food)=>{
        foodsInShop.push(food);
        localStorage.setItem('myFoods', JSON.stringify(foodsInShop));
    }

    const submitHandler = (event) =>{
        console.log("the food has been created");
        let inputs = document.querySelectorAll('input');
        let mappedInps = Array.from(inputs).map(inp =>{
            return inp.value;      
        });
        let food = new Food(mappedInps[0], mappedInps[1]);
        console.log(food);
        updateDb(food);
        alert('success');
        event.preventDefault();
    }

     return(
        <div style={{position: 'relative', display:"flex"}}>
            <div style={{height: '100vh', backgroundColor: 'brown', position: "relative"}}></div>
            <div style={{position:"absolute", backgroundImage: `url('${img}')`, top:"0px", height: "30vh",width: "100%", backgroundColor: "rgba(12, 81, 42, 1)"}}>
                {/* <h1>hi </h1> */}
            </div>
            <div style={d2Style}> 
                <h2>Welcome to my site thanks for coming by</h2>
            </div>
            <div style={d3Style}>
                <form onSubmit={submitHandler} >
                    <input style={{display: "block"}} type="text" placeholder="food_name"  />
                    <input style={{display: "block"}} type="number" placeholder="quantity in stock"  />
                    <input style={{display: "block"}} type="submit"  />  
                </form>
                
                
            </div>

           
        </div>
    );
}


export default About;