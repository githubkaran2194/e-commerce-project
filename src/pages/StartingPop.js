import { Close } from '@mui/icons-material';
import { Container, Dialog, Grid, Icon, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const StartingPop = () => {
    const [startPop, setStartPop] = useState(false);

    useEffect(() => {
        const open = setTimeout(() => {
            setStartPop(true)
        }, 3000);
        const close = setTimeout(() => {
            setStartPop(false)
        }, 6000)
        return () => clearTimeout(open && close);
    }, []);

    return (
        <Dialog open={startPop} onClose={()=>setStartPop(false)} fullWidth maxWidth="sm">
            <Container sx={{p:"20px"}}>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item>
                            <img
                                src="https://uomo-html.flexkitux.com/images/newsletter-popup.jpg"
                                alt="Starting Pop"
                                width={100}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" align="center" sx={{ p: 2 }}>
                                Welcome to Our SHOPPER!
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ p: 2 }}>
                                Thank you for visiting. Enjoy your experience!
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
        </Dialog>
    );
};

export default StartingPop;
