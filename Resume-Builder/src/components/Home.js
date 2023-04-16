import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import pic1 from '../images/pic1.png';
import pic3 from '../images/pic2.png'
import pic4 from '../images/pic3.png'
import { Link } from 'react-router-dom';
import './resume.css';


const Home = () => {
    
    const imgCon = [pic1,pic3,pic4,pic1];
    let [index,setindex] = useState(0)


    
    useEffect(() => {
        const imageChange = setInterval(() => {
           index++;
            if(index > 3)
               index = 0;
          setindex(index);
        }, 1000);
        return () => clearInterval(imageChange);
      }, []);


  

  return (
    <>
      <div className='classcarousel'>
         <div id='smal'>
        <img src={imgCon[index]} alt=""/>
        
        </div>
        <button variant="primary" type="submit" className='btn'><Link to ='/CreateResume'>CreateResume</Link></button>
        </div>
        <br/>
        
    </>
  );
};

export default Home;
