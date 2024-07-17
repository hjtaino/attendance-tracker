import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Searchbar = ( () => {
    return (
        <Autocomplete
            disablePortal
            id="searchbar_filter"
            options={[]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
      />
    )
})

export default Searchbar