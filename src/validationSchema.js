import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name : Yup.string().required('Required'),
    dobOrAge : Yup.string().required('Required'),
    sex : Yup.string().required('Required'),
    mobileNo : Yup.number().required('Required'),
    idType : Yup.string().required('Required'),
    govtId : Yup.string().required('Required'),
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