import {Box, Typography, TextField, Stack, MenuItem} from '@mui/material'
import { v4 as uniqueId } from 'uuid'

const OtherDetails = ({formik, countryList}) => {

    return (
        <Box my = {5}>
            <Typography variant = 'h6'>Other Details</Typography>
            <Stack direction = 'row' spacing = {3} my = {1}>
                <TextField 
                    type = 'text'
                    name = 'occupation'
                    label = 'Occupation'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.occupation && Boolean(formik.errors.occupation)}
                    helperText = {formik.touched.occupation && formik.errors.occupation}
                    value = {formik.values.occupation} />
                <TextField 
                    select
                    name = 'religion'
                    label = 'Religion'
                    size = 'small'
                    sx = {{width : 200}}
                    onChange = {formik.handleChange}
                    error = {formik.touched.religion && Boolean(formik.errors.religion)}
                    helperText = {formik.touched.religion && formik.errors.religion}
                    value = {formik.values.religion}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}>
                        <MenuItem value = 'hinduism'>Hinduism</MenuItem>
                        <MenuItem value = 'islam'>Islam</MenuItem>
                        <MenuItem value = 'christianity'>Christianity</MenuItem>
                        <MenuItem value = 'buddhism'>Buddhism</MenuItem>
                        <MenuItem value = 'jainism'>Jainism</MenuItem>
                        <MenuItem value = 'Sikhism'>Sikhism</MenuItem>
                        <MenuItem value = 'other'>Other</MenuItem>
                        <MenuItem value = 'other'>None</MenuItem>
                    </TextField>
                <TextField 
                    select
                    label = 'Marital Status'
                    name = 'maritalStatus'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.maritalStatus && Boolean(formik.errors.maritalStatus)}
                    helperText = {formik.touched.maritalStatus && formik.errors.maritalStatus}
                    value = {formik.values.maritalStatus}
                    sx = {{width : 200}}>
                    <MenuItem value = "Married">Married</MenuItem>
                    <MenuItem value = "Unmarried">Unmarried</MenuItem>
                </TextField>
                <TextField
                    select
                    label = 'Blood Group'
                    name = 'bloodGroup'
                    size = 'small'
                    sx = {{width : 200}}
                    onChange = {formik.handleChange}
                    error = {formik.touched.bloodGroup && Boolean(formik.errors.bloodGroup)}
                    helperText = {formik.touched.bloodGroup && formik.errors.bloodGroup}
                    value = {formik.values.bloodGroup}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}>
                    <MenuItem value = "A+">A+</MenuItem>
                    <MenuItem value = "A-">A-</MenuItem>
                    <MenuItem value = "B+">B+</MenuItem>
                    <MenuItem value = "B-">B-</MenuItem>
                    <MenuItem value = "AB+">AB+</MenuItem>
                    <MenuItem value = "AB-">AB-</MenuItem>
                    <MenuItem value = "O+">O+</MenuItem>
                    <MenuItem value = "O-">O-</MenuItem>
                </TextField>
            </Stack>
            <Box my = {3}>
                <TextField
                    select
                    label = 'Nationality'
                    name = 'nationality'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.nationality && Boolean(formik.errors.nationality)}
                    helperText = {formik.touched.nationality && formik.errors.nationality}
                    value = {formik.values.nationality}
                    sx = {{width : 300}}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}>
                    {countryList.map(country => (
                        <MenuItem 
                            key = {uniqueId()} 
                            value = {country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </Box>
    )
}

export default OtherDetails