import React, {useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Start from'./components/start.js'; 
import Lowerbutton from './components/lowerbutton.js';
import Button from'./components/button.js'; 

export default function App() {
    const [ compteur ,setCompteur]=useState(0)
    const names=['werghi ashwek','essetti ines ','grira manel','mohamed ben zaied','oussama maaref','ilyes cheikh','aziz ben dhiab','nader hachana','aziz driss']
    const [begin,setBegin]=useState(false)
    const [present,setpresent]=useState([])
    const [absent,setabsent]=useState([])
    const [All,setAll]=useState([])
    const[filtred,setFiltred]=useState("All")


    function wild(elt) {
      if(elt==="Present"){
        setpresent([...present,names[compteur]])
      }
      else if (elt==="Absent"){
        setabsent([...absent,names[compteur]])
      }
      setAll([...All,names[compteur]])
      return(
        setCompteur(compteur+1)
      )
    }
    
    
  return (
    
    <div style={{backgroundColor:'black',height:'700px',width:'100%'}}>
     { names[compteur]? <Start compteur={compteur} names={names} begin={begin} handleclick={() =>setBegin(true) }></Start>:null}

      <div onClick={() =>setCompteur(compteur+1)}><Button begin={begin} val={wild} ></Button></div>
     <Lowerbutton setFiltred={setFiltred}></Lowerbutton>
      <div>
      {filtred==="All" ? All.map((p)=><div style={{textAlign:"center"}}>{p} </div>):null}
      {filtred==="Present" ? present.map((k)=><div style={{textAlign:"center" , Color:"white"}}>{k}</div>):null}
      {filtred==="Absent" ? absent.map((l)=><div style={{textAlign:"center",Color:"white"}}>{l}</div>):null}
      </div>
      
     


    </div>
    

  );
}




