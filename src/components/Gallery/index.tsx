import * as React from 'react';
import './Gallery.scss'
import { Carousel, Row, Col, Image } from 'react-bootstrap';
import Rectangle2 from './../../../public/images/Rectangle2.png'
import Rectangle3 from './../../../public/images/Rectangle3.png'
import Rectangle4 from './../../../public/images/Rectangle4.png'
import  Arrow from './../../../public/images/Arrow'

type GalleryProps={
  images?: any
  title?: string
  slidesPerView?:number
}

const Gallery:React.FC<GalleryProps> = ({images,title, slidesPerView })=> {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex: number, e: any ) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <>
    <h1 className='gallery_header'>{title}</h1>
      <Carousel 
      style={{height:'299px'}} 
      interval={0}
      prevIcon={<Arrow   />}
      nextIcon={<span  className='arrow' style = {{transform: 'matrix(-1, 0, 0, 1, 0, 0)'}}><Arrow aria-hidden="true"/> </span>}
      >
        <Carousel.Item>
        <Row>
          <Col sm>
          <Image src={Rectangle2} fluid />
          </Col>
          <Col sm>
          <Image src={Rectangle3} fluid />
          </Col>
          <Col sm>
          <Image src={Rectangle4} fluid />
          </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</>
  );
}
export default Gallery