import React from 'react';
import {Typography, Container} from '@material-ui/core';
import logoLenta from "../../logo/logolenta.png"

function HeaderLenta() {
    return (
        <Container maxWidth="sm">
            <Typography component="div" align="center">
            <img src={logoLenta} alt="Logo"/>
            </Typography>
        </Container>
    );
}

export default HeaderLenta;