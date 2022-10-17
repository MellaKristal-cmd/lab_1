import { Box, Button, FormGroup, Paper, TextField } from "@mui/material"
import { color } from "@mui/system"

export default () => {
    return <div>
        <Paper variant="outlined" ><FormGroup>
        <TextField id="outlined-basic" label="Логин" variant="outlined" />
        <TextField id="filled-basic" label="Пароль" variant="filled" />
        <Button variant="contained">Войти</Button>
    </ FormGroup></Paper>
    </div>

}
