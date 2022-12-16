import React, { useState } from 'react';
import './App.css';

// function App(){
  
//   const[num,setNum]=useState(1)

//  function Decrease(){
//     setNum(num-1)
//   }
// function Increase(){
//     setNum(num+1)
//   }
//   return(
//     <div>
//       <button onClick={Decrease}>-</button>{num}<button  onClick={Increase}>+</button> 

//     </div>
//     )
//   }

// export default App;






// function App(){
//   const[text,setText]=useState("")

// const handleChange=(e)=>{
//   setText(e.target.value)
// }
//  const handleSubmit=(e)=>{
//   e.preventDefault()

//   if(text){
//     console.log(text);
//   }
//   else{
//     alert("bosdur yazi yaz")
//   }
//  }


//   return(
//    <form onSubmit={handleSubmit}>
//     <input value={text} onChange={handleChange}></input>
//     <button>submit</button>
//    </form>
//   )
// }

// export default App;




// function App(){
  
//   const[color,setColor]=useState('red')

//  function Changed(e){
//     setColor(e.target.value)
//   }
// return(
//     <div>
//      <input type="color" onChange={Changed}></input>
//      <div className='box' style={{backgroundColor:color}}></div>
//      </div>
//     )
//   }

// export default App;


// function App(){
  
//   const[display,setDisplay]=useState()

//   function Hide(e){
//     setDisplay('none')
    
//   }
//   function Show(e){
//     setDisplay('block')
  
//   }


// return(
//     <div>
//       <button onClick={Hide}>hide</button>
//       <button onClick={Show}>show</button>
//      <div className='box' style={{display:display}}></div>
//      </div>
//     )
//   }

// export default App;


function App(){
  
  const[show,setShow]=useState(true)

  function Show(e){
    setShow(!show) 
  }



return(
  <div>

    <button onClick={Show} >{
    show ? "hide" : "show"}</button>
      
    {
      show &&(
        
          <div className='box'>Toggle</div>
  
          )

        }
     </div>
    )
  }

export default App;