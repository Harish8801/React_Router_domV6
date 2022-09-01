import React from 'react';
import {useParams} from "react-router-dom";

const Clothes = () => {
    const {shirt}=useParams();
  return (
    <div>Clothes-{shirt}</div>
  )
}

export default Clothes