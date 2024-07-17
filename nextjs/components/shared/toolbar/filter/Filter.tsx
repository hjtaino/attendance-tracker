import DropdownFilter from './DropdownFilter'
import Searchbar from './Searchbar'
import Box from '@mui/material/Box';


const Filter = ( () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <DropdownFilter />
            <Searchbar />
        </Box>
    )
})

export default Filter