import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

let genres = [
    {
        id: 1,
        name: "Action"
    },
    {
        id: 2,
        name: "Sci-Fi"
    },
    {
        id: 3,
        name: "Drama"
    }
]

export default function Genres() {
  const [gen, setGenres] = React.useState(genres);

  const handleChange = (event) => {
    setGenres(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Genres</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={Genres}
          onChange={handleChange}
        //   label="Genres"
        >
          {/* <MenuItem value="">
            <em>Genres</em>
          </MenuItem> */}
          {/* {gen.map((item)=>{
                <FormControlLabel
                control={
                  <Checkbox checked={item.name} onChange={handleChange} name={item.name} />
                }
                label={item.name}
              />
          })} */}
          
          {gen.map((item)=>{
            return <div key={item.id}>
                <MenuItem><p>{item.name}</p></MenuItem>
            </div>
          })}
        </Select>
      </FormControl>
    </div>
  );
}


