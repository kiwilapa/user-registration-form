import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Container, Paper } from '@mui/material'
import { styled } from '@mui/styles'

const DisplayUser = ({userList}) => {

    const StyledTableCell = styled(TableCell)({
        color : 'white !important',
        fontWeight : 500
    })
    return (
        <Container maxWidth = 'xl' sx = {{width : '100%', my: 4}}>
            <Typography variant = 'h5' sx = {{textAlign : 'center', mb:2}}>USER DETAILS</Typography>
            <Paper sx = {{overflowX : 'auto', width : '100%'}}>
                <TableContainer sx = {{minWidth : 2000}}>
                    <Table>
                        <TableHead sx = {{backgroundColor : 'black'}}>
                            <TableRow>
                                <StyledTableCell align = 'left'>Name</StyledTableCell>
                                <StyledTableCell align = 'left'>Date of Birth/Age</StyledTableCell>
                                <StyledTableCell align = 'left'>Sex</StyledTableCell>
                                <StyledTableCell align = 'left'>Mobile No.</StyledTableCell>
                                <StyledTableCell align = 'left'>Gov Id</StyledTableCell>
                                <StyledTableCell align = 'left'>Guardian</StyledTableCell>
                                <StyledTableCell align = 'left'>Email</StyledTableCell>
                                <StyledTableCell align = 'left'>Emergency Contact No</StyledTableCell>
                                <StyledTableCell align = 'left'>Address Details</StyledTableCell>
                                <StyledTableCell align = 'left'>Occupation</StyledTableCell>
                                <StyledTableCell align = 'left'>Religion</StyledTableCell>
                                <StyledTableCell align = 'left'>Marital Status</StyledTableCell>
                                <StyledTableCell align = 'left'>Blood Group</StyledTableCell>
                                <StyledTableCell align = 'left'>Nationality</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.map(user => (
                                <TableRow>
                                    <TableCell align = 'left'>{user.name}</TableCell>
                                    <TableCell align = 'left'>{user.dobOrAge}</TableCell>
                                    <TableCell align = 'left'>{user.sex}</TableCell>
                                    <TableCell align = 'left'>{user.mobileNo}</TableCell>
                                    <TableCell align = 'left'>{user.govtId}</TableCell>
                                    <TableCell align = 'left'>
                                        {`${user.enterLabel}- ${user.guardianName}`}
                                    </TableCell>
                                    <TableCell align = 'left'>{user.email}</TableCell>
                                    <TableCell align = 'left'>{user.emergencyNo}</TableCell>
                                    <TableCell align = 'left'>
                                        {`${user.address}, ${user.city}, ${user.state}, ${user.country}`}
                                    </TableCell>
                                    <TableCell align = 'left'>{user.occupation}</TableCell>
                                    <TableCell align = 'left'>{user.religion}</TableCell>
                                    <TableCell align = 'left'>{user.maritalStatus}</TableCell>
                                    <TableCell align = 'left'>{user.bloodGroup}</TableCell>
                                    <TableCell align = 'left'>{user.nationality}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
}

export default DisplayUser