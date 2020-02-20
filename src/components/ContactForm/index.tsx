import * as React from 'react';
import { FormikProps, Form, Field } from 'formik';
import {  FormValues, MyFormProps } from '../../containers/ContactForm';
import { Row, Col, InputGroup, Container, Button, FormCheck } from 'react-bootstrap';
import './ContactForm.scss'

type OtherProps ={

}

export const ContactForm = (props: OtherProps & MyFormProps & FormikProps<FormValues>) => {
  const {values, touched, errors, isSubmitting, handleSubmit, formdata:{title ,fields, field_groups,submit_button}} = props;

  {console.log(props)}
  const additionalfield = fields.filter(i=> i.group === "additional")
  const checkbox = fields.filter(i=> i.type === "checkbox")
  return (
    <Form className= 'main_form'>
      <h2>{title}</h2>
      <div className = 'main_form_wrapper'>
      <div className = {`${field_groups.main}`+ " "+ 'data_feilds'} >
      {
        fields.map((i , index:number)=>{
          if(i.group === 'additional' || i.type === 'checkbox') {return null}
          if(index % 2 == 0){
            return (
              <div className = 'even' key={i.name}>
                <label htmlFor={i.name}>{i.label} </label>                
                <InputGroup >
                 <Field type={i.type} name={i.name} />
                </InputGroup>                
              </div>
            )
          }
            return(          
              <div className = 'odd' key={i.name}>
                <label htmlFor={i.name}>{i.label} </label>
                <InputGroup >
                 <Field type={i.type} name={i.name} key={i.name} />
                </InputGroup>         
              </div>
            )
        })
      }
     </ div>
     <div className = {field_groups.additional}>
       {
        additionalfield.map(i=>{
          return(
            <>
             <label htmlFor={i.name}>
               {i.label} 
               {
                 i.required ? null : "(не обязательно)"
               } 
             </label>
             <InputGroup key={i.name} className='field_groups-textarea'>
             {i.type === 'textarea' ? 
               <Field type={i.type} as = {i.type} name={`${i.name}(2)`} rows = '6' cols="45"/>
              : null}
             </InputGroup> 
             </> 
          )
        })
       }
     </div>
    </div>
     {
       checkbox.map(i=>{
        const innerHTML = { __html: i.label }
        return (
        <FormCheck key={i.name} className='custom-control custom-checkbox'
          custom
          type="checkbox"
          id={i.name}
          label ={<span  dangerouslySetInnerHTML={innerHTML}/> }
        >
          {/*     */}
       </FormCheck>
      //   <div key={i.name} className='custom-control custom-checkbox'>
      //     <input type="checkbox" className="custom-control-input" id={i.name} defaultChecked />
      //     <label htmlFor={i.name} dangerouslySetInnerHTML={innerHTML}/>    
      //  </div>
        )
       })
     }
     <Button 
      disabled={isSubmitting} 
      onClick ={()=>handleSubmit()} 
      variant='secondary' 
      className = 'custom-button'>
        {submit_button.text}
     </Button>
    </Form>
  ); 
};