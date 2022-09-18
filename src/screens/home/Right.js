import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Genres from '../../assets/Genres';
import Artists from '../../assets/Artists';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Right() {
    return (
        <Card sx={{ minWidth: 240, maxWidth: 240 }}>
            <CardContent>

                <Typography variant="h5" component="div">
                    FIND MOVIES BY:
                </Typography>
                <FormControl>
                <TextField id="standard-basic" label="Movie Name" variant="standard" />
                
                <Genres />
                <Artists />
                </FormControl>
                
            </CardContent>
            <CardActions>
                <Button size="small">APPLY</Button>
            </CardActions>
        </Card>
    );
}
