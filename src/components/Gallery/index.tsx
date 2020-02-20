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
  return (
    <>
    <h1 className='gallery_header'>{title}</h1>
    {/* mobile */}
    <Carousel 
        className='carosel-wrapper-moblile'
        interval={0}
        prevIcon={<Arrow   />}
        nextIcon={
          <span  className='arrow-reverse' >
            <Arrow aria-hidden="true"/> 
          </span>
      }>
        <Carousel.Item>
        <Image src={Rectangle2} fluid />
        </Carousel.Item>
        <Carousel.Item>
        <Image src={Rectangle3} fluid />
        </Carousel.Item>
        <Carousel.Item>
        <Image src={Rectangle4} fluid />
        </Carousel.Item>
    </Carousel>
    {/* mobile */}

      <Carousel 
        className='carosel-wrapper'
        interval={0}
        prevIcon={<Arrow   />}
        nextIcon={
          <span  className='arrow-reverse' >
            <Arrow aria-hidden="true"/> 
          </span>
      }>
        <Carousel.Item>
        <Row>
          <Col>
          <Image src={Rectangle2} fluid />
          </Col>
          <Col>
          <Image src={Rectangle3} fluid />
          </Col>
          <Col>
          <Image src={Rectangle4} fluid />
          </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="sec slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</>
  );
}
export default Gallery