import { Box, Typography, Stack, TextField, MenuItem} from '@mui/material'

const PersonalDetail = ({formik}) => {

    return (
        <Box my = {5}>
            <Typography variant = 'h6'>Personal Details</Typography>
            <Stack direction = 'row' justifyContent = 'space-between' spacing = {5} my = {1}>
                <TextField
                    type = 'text'
                    label = 'Name'
                    name = 'name'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.name && Boolean(formik.errors.name)}
                    helperText = {formik.touched.name && formik.errors.name}
                    value = {formik.values.name}
                    sx = {{width : 400}} />
                <TextField 
                    type = 'text'
                    label = 'Date of Birth (DD/MM/Year) or Age'
                    name = 'dobOrAge'
                    size = 'small'
                    onChange = {formik.handleChange}
                    error = {formik.touched.dobOrAge && Boolean(formik.errors.dobOrAge)}
                    helperText = {formik.touched.dobOrAge && formik.errors.dobOrAge}
                    value = {formik.values.dobOrAge}
                    sx = {{width : 300}} />
                <TextField 
                    select
                    label = 'Sex'
                    name = 'sex'
                    size = 'small'
                    onChange={formik.handleChange}
                    error = {formik.touched.sex && Boolean(formik.errors.sex)}
                    value = {formik.values.sex}
                    helperText = {formik.touched.sex && formik.errors.sex}
                    sx = {{width : 200}}>
                    <MenuItem value = "Male">Male</MenuItem>
                    <MenuItem value = "Female">Female</MenuItem>
                    <MenuItem value = "Other">Other</MenuItem>
                </TextField>
            </Stack>
            <Stack 
                direction = 'row' 
                spacing = {2}
                justifyContent = 'space-between' my = {3}>
                <TextField 
                    type = 'number'
                    label = 'Mobile No.'
                    name = 'mobileNo'
                    size = 'small'
                    onChange={formik.handleChange}
                    error = {formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
                    helperText = {formik.touched.mobileNo && formik.errors.mobileNo}
                    value = {formik.values.mobileNo} />
                <Stack direction = 'row'  spacing = {3}>
                    <label htmlFor="">
                        <Typography variant = 'body1'>Govt Issued ID</Typography>
                    </label>
                    <TextField 
                        select
                        id = "govtId"
                        label = 'ID Type'
                        name = 'idType'
                        size = 'small'
                        onChange={formik.handleChange}
                        error = {formik.touched.idType && Boolean(formik.errors.idType)}
                        helperText = {formik.touched.idType && formik.errors.idType}
                        value = {formik.values.idType}
                        sx = {{width : 200}}>
                        <MenuItem value = 'Adhar Card'>Adhar Card</MenuItem>
                        <MenuItem value = 'Pan Card'>Pan Card</MenuItem>
                        <MenuItem value = 'Voter Card'>Voter Card</MenuItem>
                    </TextField>
                    <TextField 
                        id = "govtId"
                        type = 'number'
                        label = 'Enter Govt Id'
                        name = 'govtId'
                        size = 'small'
                        onChange={formik.handleChange}
                        error = {formik.touched.govtId && Boolean(formik.errors.govtId)}
                        helperText = {formik.touched.govtId && formik.errors.govtId}
                        value = {formik.values.govtId} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default PersonalDetail