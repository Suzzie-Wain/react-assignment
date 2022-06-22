import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
const App = () =>{
    return(
        <div style={{backgroundImage:"url(/public/lights.jpg)"}}> 
        <div class="navbar">
            <img class="logo" src={'FRTL.jpg'} height={100} width={100} />
            <br></br>
            <h2> FIRST RESPONDERS TEAM</h2>
              <nav>
                <a href="#">Home</a>   <br></br>
                 <a href="#">About-us</a>  <br></br>
                  <a href="#">Contact-us</a> <br></br>
                  <a href="#">Gallery</a> <br></br>
                  <a href="#">Feedback</a> <br></br>
            </nav>
            
     <br></br>

        </div>
        </div>
    )

        
    
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
export default App;