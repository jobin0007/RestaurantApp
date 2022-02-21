import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {listRestaurants} from '../actions/restaurantAction'
import Restaurants from './Restaurants'
import {useDispatch,useSelector} from 'react-redux' 
function Home() {
   // const [hotels, sethotels] = useState([])
   const [filter,setFilter] =useState("")
   const dispatch = useDispatch();
   const restaurantData = useSelector(state =>state.restaurantReducer)
   const {restaurants} = restaurantData
   // const [name,setName] = useState ("")
   useEffect(() => {
      dispatch(listRestaurants())
      // const fetchData = async () => {
      //    await fetch('/restaurants.json')
      //       .then((res) => res.json())
      //       .then((data) => sethotels(data.restaurants))
      
      // fetchData();
   }, [])
   console.log("our data is", restaurants)

   return (
      <>
         <Row>
            <input placeholder="Search a place here" type="text" value={filter} onChange={event=>setFilter(event.target.value)}/>

            {/* <input placeholder="name" type="text" value={name} onChange={(event)=>setName(event.target.value)} /> */} 
             {restaurants ? (
               restaurants.filter(item=>{
                if(filter === ""){
                   return item
                }
                else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
                    return item
                }
               })
               .map( item => (
                  <Col sm={12} md={8} lg={6} xl={3}>
                     <Restaurants item={item} />  
                    
                  </Col>
               ))
               //    (item =>
               //       <p>{item.name}</p>)]
               // )
            ) : ('error')}
         </Row> 
      </>
   )
}

export default Home;


