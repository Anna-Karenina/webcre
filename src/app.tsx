import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/app.scss'
import { Container, Row, Col } from 'react-bootstrap';

import Footer from './components/Footer/Footer'
import AppNavbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery'
import Content from './components/Content';

import {getItem} from './api/axios'
import MyForm from './containers/ContactForm';

type DataComponents ={
  type: string;
  metadata:any;
}
interface IData{
  components?: Array<DataComponents>
  form?: any
}
//не стал долго описывать ответ

function App(){
  const [data, setData] = React.useState<IData | null >(null)
  const [load, setLoad] = React.useState(false);
  const [err, setErr] =React.useState('')
  const [gallery, setGallery] =React.useState(null)
  const [content, setContent] = React.useState(null)

  React.useEffect(() => {
    getItem('https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json')
      .then((res:IData) => {
        setData(res);
        setLoad(true)
    }).catch(err => {
      setErr(err);
      setLoad(true);
        }
    );
}, []);

React.useEffect( ()=>{
  if(data !==null){
     setGallery (data.components!.find(({ type }) => type === 'GalleryComponent'))
     setContent(data.components.find(({ type }) => type === 'GridComponent'))
  }
})
	return(
    <>
    <header>
    <AppNavbar /> 
    </header>
    <Container>
      <Row>
        <Col md='auto'  >
     <main>
      {
        gallery === null ? 'Loading ...' : 
        <Gallery images={gallery.metadata.images} title={gallery.metadata.title} slidesPerView={gallery.metadata.slidesPerView} />
      }
      {
        content === null ? 'Loading ...':
        <Content content={content.metadata.components} />
      }
      {
        data === null ? 'Loading ...' :
      <MyForm formdata={data.form} /> 
      }
      </main>
      </Col>
      </Row>
    </Container>
    <Footer />
    </>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);