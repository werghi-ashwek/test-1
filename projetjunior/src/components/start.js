import React from 'react';



export default function Start({handleclick,begin,names,compteur}) {
    return (
        <div style={{textAlign:"center",borderStyle:'solid' , borderRadius: "25px", width: "1000px",
        height: "180px",marginTop: "38px",marginBottom:"30px",borderTopWidth: "3px",borderRightWidth: "3px",borderLeftWidth: "3px",borderBottomWidth: "3px", paddingTop: "50px", margin:"auto", borderColor: "white",}}>
            {! begin ? <button type="button" className="btn btn-link" style={{position:'absolute',top:'15%',left:'45%',color:'#FF9966'}} onClick={() =>handleclick()} >BEGIN</button>: <div style={{color:'white'}}><p>{names[compteur]}</p></div>}

        </div>
    );


}