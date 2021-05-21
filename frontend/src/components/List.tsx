
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
    },
  }),
);

export default function GroupedSelect() {
  const classes = useStyles();
  const [ingredientOne, setIngredientOne] = React.useState('');
  const [ingredientTwo, setIngredientTwo] = React.useState('');

  const addRecommendation = (event: any) => {
    console.log("hi")
    // event.preventDefault();

    // db.collection('todos').add({
    //   text: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    // setTodos([...todos, input]);
    // setInput(''); //clear input
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Ingredient One</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'alfredo'}>Alfredo</MenuItem>
          <MenuItem value={'cheese'}>Cheese</MenuItem>
          <MenuItem value={'ham'}>Ham</MenuItem>
          <MenuItem value={'herbs'}>Herbs</MenuItem>
          <MenuItem value={'pepperoni'}>Pepperoni</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Ingredient Two</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'cheese'}>Cheese</MenuItem>
          <MenuItem value={'sausage'}>Sausage</MenuItem>
          <MenuItem value={'spinach'}>Spinach</MenuItem>
          <MenuItem value={'mushroom'}>Mushroom</MenuItem>
          <MenuItem value={'chicken'}>Chicken</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" onClick={addRecommendation}>
          Generate Pizza
      </Button>
    </div>
  );
}