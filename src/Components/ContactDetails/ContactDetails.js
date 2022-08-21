import { Box, Typography, Stack, TextField, MenuItem } from "@mui/material"

const ContactDetails = ({formik}) => {

    return (
        <Box my = {5}>
            <Typography variant = 'h6'>Contact Details</Typography>
            <Stack direction = 'row' spacing = {3} my={2}>
                <label htmlFor="guardianDetails">
                    <Typography>Guardian Details</Typography>
                </label>
                <TextField
                    id = 'guardianDetails'
                    select
                    size = 'small'
                    label = 'Enter Label'
                    name = 'enterLabel'
                    onChange = {formik.handleChange}
                    error = {formik.touched.enterLabel && Boolean(formik.errors.enterLabel)}
                    helperText = {formik.touched.enterLabel && formik.errors.enterLabel}
                    value = {formik.values.enterLabel}
                    sx = {{width : 200}}>
                    <MenuItem value = 'Mother'>Mother</MenuItem>
                    <MenuItem value = 'Father'>Father</MenuItem>
                    <MenuItem value = 'Elder Sibling'>Elder Sibling</MenuItem>
                    <MenuItem value = 'Uncle'>Uncle</MenuItem>
                    <MenuItem value = 'Aunt'>Aunt</MenuItem>
                </TextField>
                <TextField 
                    type = 'text'
                    label = 'Enter Guardian Name'
                    name = 'guardianName'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.guardianName && Boolean(formik.errors.guardianName)}
                    helperText = {formik.touched.guardianName && formik.errors.guardianName}
                    value = {formik.values.guardianName} />
                <TextField 
                    type = 'email'
                    label = 'Your email'
                    name = 'email'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.errors.email)}
                    helperText = {formik.touched.email && formik.errors.email}
                    value = {formik.values.email} />
                <TextField 
                    type = 'number'
                    label = 'Emergency Contact Number'
                    name = 'emergencyNo'
                    size = 'small'
                    sx = {{width : 250}} 
                    onChange = {formik.handleChange}
                    error = {formik.touched.emergencyNo && Boolean(formik.errors.emergencyNo)}
                    helperText = {formik.touched.emergencyNo && formik.errors.emergencyNo}
                    value = {formik.values.emergencyNo}/>
            </Stack>
        </Box>
    )
}

export default ContactDetails