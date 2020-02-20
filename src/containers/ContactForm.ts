import { withFormik, FormikErrors } from 'formik';
import { ContactForm } from '../components/ContactForm';
import {getValues} from './../lib/helper'


type FormValuesProps= {
  name: string
  phone: number
  email: string
  appointment_date: Date
  'name(2)': string
  agreement: boolean
}
export interface FormValues {
  name?: string;
  group?: string;
  type?: string;
  label?:string
  required?:boolean
}

export interface MyFormProps {
  formdata?:{
    title:string;
    fields: Array<FormValues>;
    field_groups:{
      main: string
      additional:string
    }
    submit_button:{
      text:string
    }
  }
}


const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props:MyFormProps & FormValues ) => {
    let newnames = getValues(props.formdata.fields)
    let copy:any ={}
    for(let i = 0; i < newnames.length; i++){
      copy[newnames[i]] = ''
    }
    return copy
    },
  validate: (values: FormValuesProps) => {
    let errors: FormikErrors<FormValuesProps> = {};
    if (!values.name) {
      errors.name = 'Обязательно';
    } 
    if(!values.phone){
      errors.phone = 'Обязательно';
    }
    if (!values.email) {
      errors.email = 'Обязательно'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
      errors.email = 'Здесь должна быть почта'
    }
    if(!values.appointment_date){
      errors.appointment_date = 'Обязательно';
    }
    return errors;
  },

  handleSubmit: values => {
    setTimeout(()=>{
      alert(`Имя :${values}`)
      console.log(values)
    }, 3000)
  },
})(ContactForm);

export default MyForm;