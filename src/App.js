import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import { useDetectClickOutside } from 'react-detect-click-outside';



//global vars
let visibleSquare = false;

//function to make a square that will be called in the grid function
function Square({value})
{
  //state var for style
  const[color, setColor] = useState("black");
  //click outside of square click event listener, put ref as outermost element of square.
  const ref = useDetectClickOutside({onTriggered: e=> setColor("black") });
 
  return <button onClick={e => {setColor("white")}} style={{ width: "100px", height: "50px", backgroundColor: color,}} className="square" ref={ref}>{value}</button>;
}


//generate grid of buttons by pushing the JSX for a bunch of Squares into an array.
//other JSX like divs and tds are pushed as well.
//this array essentually serves up a gaint command line for the app function to execute.
//code is automatically extracted from array.

function Grid(props){
  const values = [];
 
  //push the headers
  values.push(<button style={{backgroundColor: "grey", width: "100px", height: "50px",}}>x</button>);
  for(let i =1; i<=props.width; i++){
    values.push(<button style={{backgroundColor: "grey", width: "100px", height: "50px",}}>{i}</button>);
  }

  //create a space
  values.push(<div></div>);


  //get all values N*N
  for(let i = 1; i<= props.height; i++){

    //create box indicating thing the column number is being mutiplied by
    values.push(<button style={{backgroundColor: "grey", width: "100px", height: "50px",}}>{i}</button>);

    for(let j = 1; j<=props.width; j++){
      //gen a square
      values.push(<Square value={i*j} />);
    }
    //create a space
    values.push(<div></div>);
  }
  //return the commandline
  return <div>{values}</div>;
}


function App() {

  //state vars
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);

  return (
    <>
      <Grid height={height} width={width}  />

      <p> set dimensions</p>
      <input type="number" onChange={e => setHeight(e.target.value)} min={1} />
      <input type="number"  onChange={e => setWidth(e.target.value)} min={1} />
    
    </>
  );
}



export default App;
