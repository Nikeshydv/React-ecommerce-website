import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
// import { CgSlack } from 'react-icons/cg';

const Home=()=>{
  const[val,setVal]=useState([]);

  const loadData=()=>{
    let url="http://localhost:3000/product";
    axios.get(url).then((res)=>{
      setVal(res.data);
     
    })
  }

  useEffect(()=>{
    loadData();
  },[]);

  const ans=val.map((key)=>{
    return(
      <>
       <Card style={{ width: "250px",marginLeft:"10px",marginRight:"10px",marginBottom:'20px'}}>
      <Card.Img variant="top" src={"public/images/"+key.images} style={{height:"250px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          <h4>Price: {key.price}</h4>
        </Card.Text>
        <Button variant="primary">Add cart</Button>
      </Card.Body>
    </Card>
      


      </>
    )
  })


    return(




        <>
<Carousel>
      <Carousel.Item>
        <img src='Images\slider-1.png'/>
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Flexibal chair</h3>
          <p style={{color:"black"}}>Flexibal chair</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='Images\flo_hero.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='Images\flo_hero.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 align="center"> our top brands</h1>

    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"90%",margin:"auto"}}> {ans}</div>

        </>
    )
}
export default Home;