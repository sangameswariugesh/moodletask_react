import React,{useState} from "react";
import Menu from "../menu/menu";
import './ustate.css';
export function Add(){
    const[count,setCount]=useState(0)
    return(
    <>
    <div className="row" id="sang8">
    <div className="col-lg-4"></div>
    <div class=" bac bg-secondary col-lg-4">  
    <h1 className="text-center text-white">Count processing</h1>
    <h1 className="text-center">{count}</h1>
        <button onClick={()=>{setCount(count+1)}} className=" sa p-3 my-2  bg-success col-lg-4">add</button>
        <button onClick={()=>{setCount(count-1)}}className=" sa p-3 my-2 bg-danger col-lg-4">Sub</button>
        <button onClick={()=>{setCount(count*0)}}className=" sa p-3 my-2 bg-dark col-lg-4">reset</button>
    </div> 
    <div className="col-lg-4"></div>
    </div>
    </>

    );
}
export default Add