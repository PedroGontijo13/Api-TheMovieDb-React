import { Container, TextField, Typography, Button } from "@material-ui/core"
import { useState } from "react";

function FormSearch({onFormSubmit}) {

    const [query, setQuery] = useState("")

    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    alert("Enviado!")
                    onFormSubmit({query})
                }}>
                    <Typography component="div" align="center">
                        <TextField value={query} onChange={event => {
                            setQuery(event.target.value)
                        }} fullWidth margin="normal" id="query" label="Search" variant="outlined" />
                        <Button size="large" type="submit" variant="contained" color="primary">Enviar</Button>
                    </Typography>
                </form>
            </Container>
        </>
    );
}

export default FormSearch;