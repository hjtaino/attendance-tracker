import Layout from '@/components/layout/Layout'
import Toolbar from '@/components/shared/toolbar'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'ntid', headerName: 'NTID', width: 150 },
    { field: 'full_name', headerName: 'Full Name', width: 200 },
    { field: 'first_name', headerName: 'First Name', width: 200 },
    { field: 'middle_name', headerName: 'Middle Name', width: 200 },
    { field: 'last_name', headerName: 'Last Name', width: 200 },
    { field: 'suffix_name', headerName: 'Suffix Name', width: 200 },
    { field: 'functional_lines_id', headerName: 'Functional Lines ID', width: 200 },
    { field: 'group', headerName: 'Group', width: 200 },
    { field: 'funtional_lines', headerName: 'Functional Lines', width: 200 },
];
    
const rows = [
    { id: 1, name: 'Harvey Taino', ntid: 'TAINOH', full_name: 'Taino, Harvey Jose', first_name: 'Harvey', middle_name: '', last_name: 'Taino', suffix_name: '', functional_lines_id: 1111, group: 'DAR?', functional_lines: 'Data Management and Analytics Associate', active: true },
    { id: 2, name: 'Maalik Mercado', ntid: 'MERCAM', full_name: 'Mercado, Maalik Raniel', first_name: 'Maalik', middle_name: '', last_name: 'Mercado', suffix_name: '', functional_lines_id: 222, group: 'DAR?', functional_lines: 'Data Management and Analytics Associate', active: true },
    { id: 3, name: 'Krystle Celso', ntid: 'CELSOK', full_name: 'Celso, Krystle Alliz DC.', first_name: 'Krystle', middle_name: 'Dela Cruz', last_name: 'Celso', suffix_name: '', functional_lines_id: 333, group: 'DAR?', functional_lines: 'Data Management and Analytics Associate', active: true },
];

const RequestTypes = ( () => {
    return(
        <Box>
            <Layout />
            <Toolbar />
            <Box sx={{ padding: 2 }}>
                Request Types
                <Box sx={{ height: '100%' , width: '100%', marginTop: 2 }}>
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

export default RequestTypes