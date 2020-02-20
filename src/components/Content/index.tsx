import * as React from 'react';
import './Content.scss'
import { Row, Col } from 'react-bootstrap';

type ContentProps={
content:any
}

const Content:React.FC<ContentProps> = ({content})=> {
  console.log(content)
  return (
  <>
    <Row className='content'>
    {
      content.map((i:any) => { 
        if(i.type === "RichTextComponent"){
          const innerHTML = { __html: i.metadata.text };
          return (
            <Col xs={12} md={i.col.replace(/[^\d]/g, '')} key = {Math.floor(Math.random() * 999)}> 
              <h2 className='content_header'>{i.metadata.title}</h2>
              <div className='content_paragraph' dangerouslySetInnerHTML={innerHTML}></div>
            </Col>
          )
        }
      }) 
    }
    </Row>
  </>
  );
}
export default Content