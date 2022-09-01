import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { sentItem } from '../features/UserDetalis';

const Home = () => {

  const dispatch  = useDispatch()

  const [userData, setUserData] = useState([]);
  console.log(userData);

  const userDataApi = async () => {
    await axios
      .get(`https://fakestoreapi.com/users`)
      .then((resp) => {
        setUserData(resp);
        console.log(resp.data.id);
      })
      .then((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    userDataApi();
  }, []);


  console.log("Home");
  return (
    <div className='mt-5 p-5 bg-success text-white'>
      <button className="btn btn-danger" onClick={()=>dispatch(
        sentItem(
          userData
        )
      )}>Send Data</button>
    </div>
  )
}

export default Home