import { withFormik, FormikErrors } from 'formik';
import { InnerForm } from '../components/ContactForm';

// type FieldsType ={
//   name: string;
//   group: string;
//   type: string;
//   label:string
//   required:boolean
// }

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
    field_groups:any
    submit_button:{
      text:string
    }
  }
}


const MyForm = withFormik<MyFormProps, FormValues>({
  // mapPropsToValues: props => {
  //   for(let i = 0; i < props.formdata.fields.length; i++){
  //     return  props.formdata.fields[i].name
  //   }
  // },
 // email: props.initialEmail || '',
        // password: '',
  validate: (values: FormValues) => {
    // //let errors: FormikErrors = {};
    // let errors: any = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } 
    // return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);

// const Basic = () => (
//   <div>
//     <h1>My App</h1>
//     <p>This can be anywhere in your application</p>
//     <MyForm message="Sign up" />
//   </div>
// );

export default MyForm;