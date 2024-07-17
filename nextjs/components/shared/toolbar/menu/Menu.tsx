import { useState } from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import MenuIcon from '@mui/icons-material/Menu';

const Settings = ( () => {

    const [open, setOpen] = useState(false)

    return(
        <Box
            sx={{
                marginRight: '10px'
            }}
        >
            <Button 
                variant="text"
                startIcon={<MenuIcon />}
                onClick={ () => { setOpen(true) }}
                sx={{
                    backgroundColor: 'none'
                }}
            >
            </Button>
            <Menu 
                open={open}
                onClose={ () => { setOpen(false) }}
            >
                <MenuItem>Delete</MenuItem>
            </Menu>
        </Box>
    )
})

export default Settings