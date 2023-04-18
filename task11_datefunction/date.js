import React from "react";
import "./date.css";
function Dateadd(){
    function cal() 
    {
        var courseDate = document.getElementById("coursDate").value;
        var di = document.getElementById("divid");
        var date = new Date(courseDate);
        date.setDate(date.getDate()+90);
        var temp = date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
        di.innerText = "End Date : " + temp;
    }

    return(
        <>
        <div className="bg-date my-2">
           <label>Select Course Starting Date : </label>
            <input type="date" id="coursDate"/>
            <input type="button btn-date" onClick={cal} value="calculate"/>
           <div id="divid">

           </div>
           </div>
        </>
    )
   
}

export default Dateadd;