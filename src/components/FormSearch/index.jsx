import { Container, TextField, Typography, Button } from "@material-ui/core"
import { useState } from "react";
import axios from 'axios';
import Box from '@material-ui/core/Box';

function FormSearch({onFormSubmit}) {

    const [query, setQuery] = useState("")

    
    const [movie, setMovie] = useState("")
  
    const getmovie = (data) => {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f3fb72a7a6f467451fc6b155705be3d&query=" + (data.query)).then((response) => {
        console.log(response)
        return (
          setMovie(
          <>
            <Container spacing="margin-top" maxWidth="sm">
                <Typography component="div">
                    <Box mt="1rem">
                        <img src={"https://image.tmdb.org/t/p/w500/" + (response.data.results[0].backdrop_path)} alt="background-image" />
                        <h4><b>{response.data.results[0].original_title}</b></h4>
                        <p>{response.data.results[0].overview}</p>
                    </Box>
                </Typography>
            </Container>
          </>)
        )
      })
    }

    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    onFormSubmit({query})
                    getmovie({query})
                }}>
                    <Typography component="div" align="center">
                        <TextField value={query} onChange={event => {
                            setQuery(event.target.value)
                        }} fullWidth margin="normal" id="query" label="Search" variant="outlined" />
                        <Button margin="normal" size="large" type="submit" variant="contained" color="primary">Enviar</Button>
                    </Typography>
                </form>
                <Typography component="div" align="center">
                    {movie}
                </Typography>
            </Container>
        </>
    );
}

export default FormSearch;