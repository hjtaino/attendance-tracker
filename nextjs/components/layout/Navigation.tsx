import { useState } from 'react';

import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type NavItems = {
    label: string
    value: string
    disabled: boolean
}

const Navigation = ( () => {

    const router = useRouter()

    const urlPath = router.asPath

    const navItems: NavItems[] = [
        {
            label: 'Dashboard',
            value: '/dashboard',
            disabled: false
        },
        {
            label: 'Calendar',
            value: '/calendar',
            disabled: true
        },
        {
            label: 'RTS Request',
            value: '/rts-request',
            disabled: true
        },
        {
            label: 'Leave Request',
            value: '/leave-request',
            disabled: false
        },
        {
            label: 'Configuration',
            value: '/configuration',
            disabled: false
        },
    ];

    const [value, setValue] = useState(urlPath);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.push(newValue)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
             >
                {
                    navItems.map( (navItem, i) => {
                        return (
                            <Tab key={i} value={navItem.value} label={navItem.label} disabled={navItem.disabled} wrapped/>
                        )
                    })
                }
            </Tabs>
        </Box>
    )
})

export default Navigation