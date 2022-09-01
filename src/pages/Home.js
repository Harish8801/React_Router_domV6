import React from 'react';
import {useNavigate} from 'react-router-dom'

// useNavigate k help se hm ek page se
//  dusre page pr bina page  k reload huye navigate ho jate h 
const Home = () => {

    const navigate=useNavigate();
  return (
    <div>
      <h1>it is Home page</h1>
      <button onClick={()=>navigate("/about")}>Go to About</button>
     {/* yaha button pr click se about page pr navigate jo jayenge */}
    </div>
  )
}

export default Home
