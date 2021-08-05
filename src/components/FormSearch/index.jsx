import { Container, TextField, Typography, Button } from "@material-ui/core"
import { useState } from "react";
import axios from 'axios';

function FormSearch({onFormSubmit}) {

    const [query, setQuery] = useState("")

    
    const [joke, setJoke] = useState("")
  
    const getJoke = (data) => {
      axios.get("https://api.github.com/users/" + (data.query)).then((response) => {
        console.log(response)
        return (
          setJoke(
          <>
          <div className="card">
            <div className="container">
              <img src={response.data.avatar_url} alt="Avatar" />
              <h4><b>{response.data.name}</b></h4>
              <p>{response.data.bio}</p>
            </div>
          </div>
          </>)
        )
      })
    }

    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    alert("Enviado!")
                    onFormSubmit({query})
                    getJoke({query})
                }}>
                    <Typography component="div" align="center">
                        <TextField value={query} onChange={event => {
                            setQuery(event.target.value)
                        }} fullWidth margin="normal" id="query" label="Search" variant="outlined" />
                        <Button size="large" type="submit" variant="contained" color="primary">Enviar</Button>
                    </Typography>
                </form>
                <Typography component="div" align="center">
                    {joke}
                </Typography>
            </Container>
        </>
    );
}

export default FormSearch;