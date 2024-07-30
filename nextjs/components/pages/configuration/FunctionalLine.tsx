import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import Toolbar from '@/components/shared/toolbar'

import { 
    DataGrid, 
    GridColDef, 
    GridToolbar, 
    GridEventListener, 
    GridRowSelectionModel 
} from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import { 
    useGetFunctionalLinesQuery,
    useAddFunctionalLinesMutation, 
    useUpdateFunctionalLinesMutation,
    useDeleteFunctionalLinesMutation
} from './queries'

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '300px',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', type: 'string', flex: 1 },
    { field: 'key', headerName: 'Key', type: 'string', flex: 1 },
    { field: 'active', headerName: 'Active', type: 'boolean', flex: 1 },
];
    
const FunctionalLine = ( () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [key, setKey] = useState('')
    const [active, setActive] = useState(true)

    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const { loading, data, error, refetch } = useGetFunctionalLinesQuery()

    const [ addFunctionalLines ] = useAddFunctionalLinesMutation({
        variables: {
            'name': name,
            'key': key
        },
        onCompleted: (data) => {
            setName('')
            setKey('')
            setOpen(false)
            refetch()
        }
    });

    const [ updateFunctionalLine ] = useUpdateFunctionalLinesMutation({
        variables: {
            'id': id,
            'name': name,
            'key': key,
            'active': active
        },
        onCompleted: (data) => {
            setId('')
            setName('')
            setKey('')
            setActive(true)
            setOpen(false)
            refetch()
        }
    })

    const [ deleteFunctionalLine ] = useDeleteFunctionalLinesMutation()

    const rows = data?.functional_lines ?? []

    const create = ( () => {
        if (edit == false) {
            addFunctionalLines()
        } else {
            updateFunctionalLine()
        }
        
    })

    const deleteRow = ( () => {
        if (rowSelectionModel.length > 0) {
            rowSelectionModel.map( (value) => {
                deleteFunctionalLine({
                    variables: {
                        id: value
                    },
                    onCompleted: (data) => {
                        refetch()
                    }
                })
            })
        }
    })

    const handleClickedRow: GridEventListener<'rowClick'> = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
      ) => {
        // setMessage(`Movie "${params.row.title}" clicked`);
        setEdit(true)
        setId(params.row.id)
        setName(params.row.name)
        setKey(params.row.key)
        setActive(params.row.active)
        setOpen(true)
      };

    const cancelModal = ( () => {
        setId('')
        setName('')
        setKey('')
        setEdit(false)
        setOpen(false)
    })

    return(
        <Box>
            <Layout />

            {/* For Refactoring Later ---> */}
            {/* <Toolbar 
                model='functional_line'
                type='modal'
            /> */}

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
                <Box>
                    <Button 
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: '#0000C9'
                        }}
                        onClick={() => setOpen(true)}
                    >
                        Create
                    </Button>

                    {
                        (rowSelectionModel.length > 0) ? 
                        <Button 
                            variant="contained"
                            size="small"
                            color='error'
                            sx={{
                                marginLeft: '10px'
                            }}
                            onClick={deleteRow}
                        >
                            Delete
                        </Button>
                        :
                        null
                    }

                </Box>
            </Box>
            
            <Box sx={{ padding: 2, height: '70vh' }}>
                Functional Line
                <Box sx={{ height: '100%', width: '100%', marginTop: 2 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        slots={{ toolbar: GridToolbar }}
                        onRowClick={handleClickedRow}
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            setRowSelectionModel(newRowSelectionModel);
                        }}
                        rowSelectionModel={rowSelectionModel}
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

            <Modal
                open={open}
                onClose={cancelModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    {
                        (edit == false) ? 
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create Functional Line
                        </Typography>
                        :
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Functional Line
                        </Typography>
                    }

                    <Box
                        component="form"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <Typography sx={{ width: '100px', textAlign: 'right' }}> Name </Typography>
                            <TextField sx={{ marginLeft: '20px' }} id="name" value={name} onChange={(e) => setName(e.target.value)}fullWidth/>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <Typography sx={{ width: '100px', textAlign: 'right' }}> Key </Typography>
                            <TextField sx={{ marginLeft: '20px' }} id="key" value={key} onChange={(e) => setKey(e.target.value)} fullWidth/>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <Typography sx={{ width: '100px', textAlign: 'right' }}> Active </Typography>
                            <Checkbox sx={{ marginLeft: '20px' }} id="active" value={active} defaultChecked={active} onChange={(e) => setActive(e.target.checked)}/>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right',
                            height: '100px'
                        }}
                    >
                        <Button 
                            variant="contained"
                            size="medium"
                            sx={{
                                backgroundColor: '#0000C9',
                                marginRight: '10px'
                            }}
                            onClick={() => create()}
                        >
                            Save
                        </Button>
                        <Button 
                            variant="outlined"
                            size="medium"
                            onClick={cancelModal}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>

        </Box>
    );
})

export default FunctionalLine