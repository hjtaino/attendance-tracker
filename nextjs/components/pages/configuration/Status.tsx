import Layout from '@/components/layout/Layout'
import Toolbar from '@/components/shared/toolbar'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'sequence', headerName: 'Sequence', width: 150 },
    { field: 'active', headerName: 'Active', width: 200 },
];
    
const rows = [
    { id: 1, name: 'Harvey Taino', sequence: 1, active: true },
    { id: 2, name: 'Maalik Mercado', sequence: 2, active: true },
    { id: 3, name: 'Krystle Celso', sequence: 3, active: true },
];

const Status = ( () => {
    return(
        <Box>
            <Layout />
            <Toolbar />
            <Box sx={{ padding: 2 }}>
                Status
                <Box sx={{ height: '100%', width: '100%', marginTop: 2 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                              paginationModel: {
                                pageSize: 5,
                              },
                            },
                          }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick 
                    />
                </Box>
            </Box>
        </Box>
    );
})

export default Status 