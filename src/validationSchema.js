import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name : Yup.string().required('Please mention your name'),
    dobOrAge : Yup.string().required('Please mention your age or date of birth'),
    sex : Yup.string().required('please mention your sex'),
    mobileNo : Yup.number().required('Please mention mobile number'),
    idType : Yup.string().required('Please mention Id type'),
    govtId : Yup.string().required('Please enter govt Id'),
    enterLabel : Yup.string().required('Enter Label'),
    guardianName : Yup.string().required('Please mention guardian name'),
    email : Yup.string().required('Please mention email').matches(/^[a-z0-9]+(\.[a-z0-9]|[a-z0-9])+@[a-z]+\.com$/, 'invalid email'),
    emergencyNo : Yup.number().required('Please mention contact number'),
    address : Yup.string().required('Please mention address'),
    state : Yup.string().required('Please mention state'),
    city : Yup.string().required('Please mention city'),
    country : Yup.string().required('Please mention country'),
    pincode : Yup.number().required('Please mention pincode'),
    occupation : Yup.string().required('Please mention your occupation'),
    religion : Yup.string().required('Please mention your religion'),
    maritalStatus : Yup.string().required('Please mention your Marital Status'),
    bloodGroup : Yup.string().required('Please mention your blood group'),
    nationality : Yup.string().required('Please mention your nationality')
})