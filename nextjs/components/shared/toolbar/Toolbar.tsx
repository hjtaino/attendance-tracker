import Crud from './Crud'
import Filter from './filter'
import Options from './menu'

import Box from '@mui/material/Box';

const Toolbar = ( (
    model,
    type
) => {
    return (
        <Box>
            <Box
                sx={{
                    borderBottom: '1px solid #C9C9C9',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Filter />
                <Options />
            </Box>
            <Box
                sx={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Crud model={model} type={type}/>
            </Box>
        </Box>

    )
})

export default Toolbar