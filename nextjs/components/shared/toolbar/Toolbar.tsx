import Crud from './Crud'
import Filter from './filter'
import Options from './menu'

import Box from '@mui/material/Box';

const Toolbar = ( () => {
    return (
        <Box
            sx={{
                borderBottom: '1px solid #C9C9C9',
                padding: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Crud />
            <Options />
            <Filter />
        </Box>
    )
})

export default Toolbar