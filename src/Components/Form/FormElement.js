import { useState, useEffect } from 'react'
import { Formik } from "formik"
import { Box, Typography, Stack, MenuItem, Button } from "@mui/material"
import { Country, State, City } from 'country-state-city'
//--- importing components ---
import PersonalDetail from "../PersonalDetail/PersonalDetail"
import ContactDetails from "../ContactDetails/ContactDetails"
import AddressDetails from "../AddressDetails/AddressDetails"
import OtherDetails from "../OtherDetails/OtherDetails"

// ------ importing validation schema ---------
import { validationSchema } from "../../validationSchema"

const INPUT_FIELD = {
    country : 'country',
    state : 'state',
    city : 'city'
}

const FormElement = ({setUserList, userList}) => {

    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])

    const [selectedCountry, setSelectedCountry] = useState({name : 'India', code : 'IN'})
    const [selectedState, setSelectedState] = useState('')

    // initial values of formik
    const initialValues = {
        name : '',
        dobOrAge : '',
        sex : '',
        mobileNo : '',
        idType : '',
        govtId : '',
        enterLabel : '',
        guardianName : '',
        email : '',
        emergencyNo : '',
        address : '',
        state : '',
        city : '',
        country : selectedCountry.name,
        pincode : '',
        occupation : '',
        religion : '',
        maritalStatus : '',
        bloodGroup : '',
        nationality : selectedCountry.name
    }

    // to get all countries in the world
    useEffect(() => {
        let allCountries = Country.getAllCountries()
        let tempList = []
        for (let country of allCountries) {
            tempList.push({name : country.name, code : country.isoCode})
        }
        setCountryList(tempList)
    }, [])

    // to get states of a specific country
    useEffect(() => {
        let allStates = State.getStatesOfCountry(selectedCountry.code)
        console.log(allStates)
        let tempList = []
        for(let state of allStates) {
            tempList.push({
                name : state.name, 
                countryCode : state.countryCode, 
                stateCode : state.isoCode})
        }
        setStateList(tempList)
    }, [selectedCountry])

    // to fetch all cities of a specific state
    useEffect(() => {
        let allCities = City.getCitiesOfState(selectedState.countryCode, selectedState.stateCode)
        let tempCities = []
        for (let city of allCities) {
            tempCities.push(city.name)
        }
        setCityList(tempCities)
    }, [selectedState])

    // method to submit form once user click on 'Submit' button
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        let tempUserList = [...userList]
        tempUserList.push({...values})
        console.log(tempUserList)
        setUserList(tempUserList)
        resetForm()
    }

    // to reset the form once user click on 'Cancel' button
    const cancelHandler = (resetForm) => {
        resetForm() 
    }

    // this method will handle the change in select input fields for country, state and city
    const changeHandler = (event, handleChange, inputField) => {
        switch (inputField) {
            case INPUT_FIELD.country:
                let tempCountry = countryList.find(country => country.name === event.target.value)
                setSelectedCountry(tempCountry)
                break;
            case INPUT_FIELD.state:
                let tempState = stateList.find(state => state.name === event.target.value)
                setSelectedState(tempState)
                break;
            default:
                return null
        }
        handleChange(event) // this is formik's handleChange method passed as an argument here
    }

    return (
        <Box my = {5}>
            <Typography variant = 'h5' sx = {{textAlign : 'center'}}>USER REGISTRATION FORM</Typography>
            <Box mt = {5}>
                <Formik 
                    initialValues = {initialValues} 
                    validationSchema = {validationSchema}
                    onSubmit={handleSubmit}>
                    {(formik) => {
                        return (
                            <form onSubmit = {formik.handleSubmit} >
                                <PersonalDetail formik = {formik} />
                                <ContactDetails formik = {formik} />
                                <AddressDetails 
                                    formik = {formik} 
                                    countryList = {countryList}
                                    stateList = {stateList}
                                    cityList = {cityList}
                                    INPUT_FIELD = {INPUT_FIELD}
                                    changeHandler = {changeHandler} /> 
                                <OtherDetails 
                                    formik = {formik} 
                                    countryList = {countryList} />
                                <Stack direction = 'row' justifyContent = 'flex-end' spacing = {3} my = {2}>
                                    <Button 
                                        variant = 'contained' 
                                        color = 'error'
                                        onClick = {() => cancelHandler(formik.handleReset)}>Cancel</Button>
                                    <Button type = 'submit' variant = 'contained' color = 'success'>Submit</Button>
                                </Stack>
                            </form>
                    )}}
                </Formik>
            </Box>
        </Box>
    )
}

export default FormElement