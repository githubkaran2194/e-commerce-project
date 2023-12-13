import { Container, Dialog, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const StartingPop = () => {
    const [startPop, setStartPop] = useState(false);

    useEffect(() => {
        const open = setTimeout(() => {
            setStartPop(true)
        }, 3000);
        const close = setTimeout(() => {
            setStartPop(false)
        }, 7000)
        return () => clearTimeout(open && close);
    }, []);

    return (
        <Dialog open={startPop} fullWidth maxWidth="sm">
            <Container>
                <Paper>
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
                                Welcome to Our Website!
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ p: 2 }}>
                                Thank you for visiting. Enjoy your experience!
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Dialog>
    );
};

export default StartingPop;
