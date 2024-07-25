import Layout from '@/components/layout/Layout'
import Toolbar from '@/components/shared/toolbar'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'key', headerName: 'Key', width: 150 },
    { field: 'active', headerName: 'Active', width: 200 },
];
    
const rows = [
    { id: 1, name: 'Harvey Taino', key: 'Data Management and Analytics Associate', active: true },
    { id: 2, name: 'Maalik Mercado', key: 'Data Management and Analytics Associate', active: true },
    { id: 3, name: 'Krystle Celso', key: 'Data Management and Analytics Associate', active: true },
];

const FunctionalLine = ( () => {
    return(
        <Box>
            <Layout />
            <Toolbar />
            <Box sx={{ padding: 2 }}>
                Functional Line
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

export default FunctionalLine