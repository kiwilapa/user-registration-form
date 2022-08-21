import { useState } from 'react'
import { Container } from '@mui/material'

// importing components
import FormElement from "../Components/Form/FormElement"
import DisplayUsers from '../Components/DisplayUsers/DisplayUsers'

const Layout = () => {

    const [userList, setUserList] = useState([])

    return (
        <Container maxWidth = 'xl'>
            <FormElement setUserList = {setUserList} userList = {userList} />
            <DisplayUsers userList = {userList} />
        </Container>
    )
}

export default Layout