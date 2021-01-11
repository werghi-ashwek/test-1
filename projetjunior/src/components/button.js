import React from "react";

export default function ContainedButtons({val,begin}) {





  return (
    <div style={{textAlign:"center"} }>
      <button disabled={! begin}  type="button" className="btn btn-primary" style={{backgroundColor:'#FFA352',padding:'35px 30px',margin:'70px'}} onClick={()=>val ("Present")}>Present</button>
      <button disabled={! begin}  type="button" className="btn btn-secondary" style={{backgroundColor:'#FA8072',padding:'35px 30px',margin:'70px'}} onClick={()=>val ("Excused")}>
        Excused
      </button>
      <button disabled={! begin}  type="button" className="btn btn-success" style={{backgroundColor:'#FFCC66',padding:'35px 30px',margin:'70px'}} onClick={()=>val ("Absent")}>
        Absent
      </button>
      
    </div>
  );
}