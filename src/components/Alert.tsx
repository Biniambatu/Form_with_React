
import React from 'react'
interface props{
 onclose: ()=> void;
}
function Alert({onclose}:props) {
  return (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>That is incorrect!!!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onclose}></button>
  </div>
  )
}

export default Alert