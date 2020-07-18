import React from 'react';
import Carousel  from 'react-bootstrap/Carousel'
import './presentation.css'

function Presentation({images}) {

  return (
    <Carousel>
      {images.map((image, key)=>{
        return (
          <Carousel.Item key={key}>
            <img className="d-block w-100" src={image.path} alt={image.title} />
            <Carousel.Caption>
              <h3 className="title">{image.title}</h3>
              <p className="description">{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    }
    </Carousel>
    );
    
}

export default Presentation;