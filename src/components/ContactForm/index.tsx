import * as React from 'react';
import { FormikProps, Form, Field } from 'formik';
import {  FormValues, MyFormProps } from '../../containers/ContactForm';
import { Row, Col, InputGroup, Container } from 'react-bootstrap';

type OtherProps ={

}
export const InnerForm = (props: OtherProps & MyFormProps & FormikProps<FormValues>) => {
  const {values, touched, errors, isSubmitting, formdata:{title ,fields, field_groups}} = props;
  console.log(props)
  return (
    <Container>
    <Form>
      <h2>{title}</h2>
      {console.log(fields)}
      {
        fields.map(i=>{
          return(
            <>
              <label htmlFor={i.name}>{i.label} </label>
              <InputGroup className = {
               i.group === 'main'? field_groups.main : field_groups.additional }>
               <Field type={i.type} name={i.name} key={i.name} />
              </InputGroup>         
            </>
          )
        })
      }
      <h1>kurwa</h1>
    </Form>
    </Container>
  );
};