import React from 'react'
import {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import {Bootstrap} from 'react'
import {Row,Col,Image,Card,ListGroup, ListGroupItem} from 'react-bootstrap'
import Rating from './Rating'
function RestaurantDetails() {

    const[data,setData] =useState([])
    const params = useParams()
    const {id} = params;
        useEffect(() => {
      const fetchData = async() =>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((data) =>setData(data.restaurants))
      }
    fetchData()
    
    }, [])
    const details = data.find((i)=> i.id == params.id)
    console.log("our Data is",data);
    console.log("our id is",id)
    console.log("details is",details);
  return (
    <>
    
<Link className="btn btn-outline-dark my-3 rounded bt-sm" to={'/'}>Back</Link>
{details? (
  <Row className="my-3">
    <Col className=""md={3}>
      <Image className="img" src={details.photograph} alt={details.name} fluid/>
    </Col>
    <Col className=""md={4}>
        <ListGroup.Item>
        <h2>{details.name}</h2>  
       <p>{details.neighborhood}</p>   
        </ListGroup.Item>
        <ListGroup.Item>
       <p>Cuisine:{details.cuisine_type}</p>   
        </ListGroup.Item>
        <ListGroup.Item>
       <p>Cuisine:{details.cuisine_type}</p>   
        </ListGroup.Item>
        <ListGroup.Item>
       <p>Adress:{details.address}</p>   
        </ListGroup.Item>
    </Col>
    <Col md={4}>
      <ListGroup.Item>
       <h4>Opeating hours:</h4>
       <p>Monday:{details.operating_hours.Monday}</p>
       <p>Monday:{details.operating_hours.Tuesday}</p>
       <p>Monday:{details.operating_hours.Wednesday}</p>
       <p>Monday:{details.operating_hours.Thursday}</p>
       <p>Monday:{details.operating_hours.Friday}</p>
       <p>Monday:{details.operating_hours.Saturday}</p>
       <p>Monday:{details.operating_hours.Sunday}</p>
      </ListGroup.Item>
    </Col>
<Row>
  <Card className="my-3">
<Rating data={details.reviews} />
  </Card>
</Row>
  </Row>
):null}

    </>
  )
}

export default RestaurantDetails