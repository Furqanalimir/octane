import * as yup from 'yup';

/**
 * validating fields of createUser.
 * called in user.resolver as validationSchema
 * using yup as middleware to verify fields (express-middleware)
 */
const validationSchema = yup.object().shape({
    userName: yup
      .string().trim().required()
      .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits'),
    email: yup
      .string().trim().required(),
    password: yup
      .string().min(8, "password length must be greater then 8").required(),
  })

  // yup.addMethod(yup.date, 'format', function (formats, parseStrict) {
  //   return this.transform(function (value, originalValue) {
  //     console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  //     if (this.isType(value)) return value;
  
  //     value = Moment(originalValue, formats, parseStrict);
  
  //     return value.isValid() ? value.toDate() : new Date('');
  //   });
  // });
  
  export default  validationSchema;


  // .of(object().shape({ num: number().max(4),
  //   title: string().trim().required(), 
  //   from: string().trim().required(), 
  //   to: string().trim().required(), 
  //   role: string().trim().max(150, "length of  \' role \' cannot be greater than 150 characters").required(),
  //   jobDesc: string().trim().required() })),