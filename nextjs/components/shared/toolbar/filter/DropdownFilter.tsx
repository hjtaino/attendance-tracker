import { useState } from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


const DropdownFilter = ( () => {

    const [open, setOpen] = useState(false)

    return (
        <Box
            sx={{
                marginRight: '10px'
            }}
        >
            <Button 
                variant="contained"
                onClick={ () => { setOpen(true) }}
                sx={{
                    backgroundColor: '#0000C9'
                }}
            >
                Add Filters
            </Button>
            <Menu 
                open={open}
                onClose={ () => { setOpen(false) }}
            >
                <MenuItem>Filter 1</MenuItem>
                <MenuItem>Filter 2</MenuItem>
                <MenuItem>Filter 3</MenuItem>
            </Menu>
        </Box>
    )
})

export default DropdownFilter