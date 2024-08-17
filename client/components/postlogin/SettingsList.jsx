
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RedeemIcon from '@mui/icons-material/Redeem';
import LockIcon from '@mui/icons-material/Lock';

const SettingsList = () => {
    const settingsOptions = [
        {
            text: 'Gift Coconote',
            icon: <FavoriteIcon sx={{ color: 'purple' }} />,
            action: () => alert("Gift Coconote Clicked"),
        },
        {
            text: 'Join the Discord',
            icon: (
                <Box
                    component="img"
                    src="/discord.svg"
                    alt="Discord Icon"
                    sx={{
                        width: 24,
                        height: 24,
                        filter: 'invert(50%)', // optional, adjusts color for better visibility
                    }}
                />
            ),
            action: () => alert("Join the Discord Clicked"),
        },
        {
            text: 'Share with a friend',
            icon: <ShareIcon sx={{ color: 'gray' }} />,
            action: () => alert("Share with a friend Clicked"),
        },
        {
            text: 'Redeem code',
            icon: <RedeemIcon sx={{ color: 'green' }} />,
            action: () => alert("Redeem code Clicked"),
        },
        {
            text: 'Privacy Policy',
            icon: <LockIcon sx={{ color: 'black' }} />,
            action: () => alert("Privacy Policy Clicked"),
        },
    ];

    return (
        <List component="nav" sx={{ bgcolor: '#f9f9f9', borderRadius: 2, p: 2, maxWidth: 360, mx: 'auto' }}>
            {settingsOptions.map((option, index) => (
                <React.Fragment key={index}>
                    <ListItem
                        button
                        onClick={option.action}
                        sx={{
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.text} sx={{ fontWeight: 500 }} />
                    </ListItem>
                    {index < settingsOptions.length - 1 && <Divider sx={{ my: 1 }} />}
                </React.Fragment>
            ))}
        </List>
    );
};

export default SettingsList;
