import { useState } from "react";
import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";

function Like() {
 const[status,setStatus]= useState(false);
    
 if(status) return (
    < IoMdHeartEmpty size={40} color="black" onClick={()=>setStatus(false)} />
  )
  return( <IoMdHeart size={40} color="red" onClick={()=>setStatus(true)}/> )
}

export default Like