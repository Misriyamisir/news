import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    const result = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=055c3f43d75e4f998639b62f403311c0')
    setNews(result.data.articles);
  }

  useEffect(() => {
    fetchNews()
  }, [])

  console.log(news);
  return (
    <div>
      <Row>
        {
          news.length>0?news.map(i=>(
        <Col lg={3} md={4} sm={6} className='p-3'>
<Link to={`/land/${i.id}`} style={{textDecoration:'none'}}>
          <Card style={{ width: '18rem'}} className='ms-3 p-2'>
            <Card.Img 
            variant="top" src={i.urlToImage} />
            <Card.Body>
              <Card.Title>{i.title}</Card.Title>
              <Card.Text>
                {i.description}
              </Card.Text>
            </Card.Body>
          </Card>
  
</Link>          <br />

        
        </Col>
          )): <h1>no data</h1>
        }
      </Row>
    </div>
 )
}

export default Home