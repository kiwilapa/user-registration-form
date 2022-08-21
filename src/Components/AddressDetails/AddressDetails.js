import { Box, Typography, TextField, MenuItem, Stack } from '@mui/material'
import { v4 as uniqueId } from 'uuid'

const AddressDetails = ({formik, countryList, changeHandler, stateList, cityList, INPUT_FIELD}) => {
    return (
        <Box my = {5}>
            <Typography variant = 'h6'>Address Details</Typography>
            <Stack direction = 'row' spacing = {3} my = {1}>
                <TextField 
                    type = 'text'
                    label = 'Address'
                    name = 'address'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.address && Boolean(formik.errors.address)}
                    helperText = {formik.touched.address && formik.errors.address}
                    value = {formik.values.address} />
                <TextField
                    select 
                    label = 'State'
                    name = 'state'
                    size = 'small'
                    onChange = {(event) => {changeHandler(event, formik.handleChange, INPUT_FIELD.state)}}
                    error = {formik.touched.state && Boolean(formik.errors.state)}
                    helperText = {formik.touched.state && formik.errors.state}
                    value = {formik.values.state}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}
                    sx = {{width : 350}}>
                    {stateList.map((state) => (
                        <MenuItem key = {uniqueId()} value = {state.name}>{state.name}</MenuItem>
                    ))}
                </TextField>
                <TextField 
                    select
                    label = 'City'
                    name = 'city'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.city && Boolean(formik.errors.city)}
                    helperText = {formik.touched.city && formik.errors.city}
                    value = {formik.values.city}
                    sx = {{width : 200}}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}>
                    {cityList.map((city) => (
                        <MenuItem 
                            key = {uniqueId()}
                            value = {city}>{city}</MenuItem>
                    ))}
                    </TextField>
            </Stack>
            <Stack direction = 'row' spacing = {3} my = {3}>
                <TextField 
                    select
                    label = 'Country'
                    name = 'country'
                    size = 'small'
                    onChange = {(event) => {changeHandler(event, formik.handleChange, INPUT_FIELD.country)}}
                    error = {formik.touched.country && Boolean(formik.errors.country)}
                    helperText = {formik.touched.country && formik.errors.country}
                    value = {formik.values.country}
                    SelectProps = {{
                        MenuProps : {
                            sx : {
                                maxHeight : 200
                            }
                        }                                                    
                    }}
                    sx = {{width : 300}}>
                    {countryList.map((country) => (
                        <MenuItem 
                            key = {uniqueId()} 
                            value = {country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField 
                    type = 'number'
                    label = 'Pincode'
                    name = 'pincode'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.pincode && Boolean(formik.errors.pincode)}
                    helperText = {formik.touched.pincode && formik.errors.pincode}
                    value = {formik.values.pincode} />
            </Stack>
        </Box>
    )
}

export default AddressDetails