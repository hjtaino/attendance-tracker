import { useState } from 'react';

import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type NavItems = {
    label: string
    value: string
    disabled: boolean
    menu: boolean
    options?: Array<{
        label: string
        value: string
    }>
}

const Navigation = ( () => {

    const router = useRouter()

    const urlPath = router.asPath

    const navItems: NavItems[] = [
        {
            label: 'Dashboard',
            value: '/dashboard',
            disabled: false,
            menu: false
        },
        {
            label: 'Calendar',
            value: '/calendar',
            disabled: true,
            menu: false
        },
        {
            label: 'RTS Request',
            value: '/rts-request',
            disabled: true,
            menu: false
        },
        {
            label: 'Leave Request',
            value: '/leave-request',
            disabled: false,
            menu: false
        },
        {
            label: 'Configuration',
            value: null,
            disabled: false,
            menu: true,
            options: [
                {
                    label: 'Functional Lines',
                    value: '/functional-line'
                },
                {
                    label: 'Request Types',
                    value: '/request-types'
                },
                {
                    label: 'Status',
                    value: '/status'
                },
                {
                    label: 'Users',
                    value: '/users'
                }
            ]
        },
    ];

    const [value, setValue] = useState(urlPath);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.push(newValue)
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.SyntheticEvent, newValue: string) => {
      setAnchorEl(null);
      setValue(newValue);
      router.push(newValue)
    };

    const TabItems = ( (key, value, label, disabled, menu, options?) => {
        return (menu ? 
                <Box>
                        <Tab sx={{ color: 'blue' }} key={key} value={value} label={label} disabled={disabled} onClick={handleClick} wrapped/>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                        >
                    {
                        options.map( (option, i) => {
                            return <MenuItem onClick={ ( () => { (urlPath != 'backdropClick' ? router.push(option.value) : router.push(urlPath) ) })}>{option.label}</MenuItem>
                        })
                    }
                    
                </Menu>
                </Box>
            :
            <Tab key={key} value={value} label={label} disabled={disabled} wrapped/>
        )
    })

    return (
        <Box sx={{ width: '100%'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
             >
                {
                    navItems.map( (navItem, i) => {
                        return ( TabItems(i, navItem.value, navItem.label, navItem.disabled, navItem.menu, navItem.options) )             
                    })
                }
            </Tabs>
        </Box>
    )
})

export default Navigation