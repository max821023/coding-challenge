
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
    console.log(ingredientOne, ingredientTwo)
    // event.preventDefault();

    // db.collection('todos').add({
    //   text: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    // setTodos([...todos, input]);
    // setInput(''); //clear input
  }

  const changeIngredientOne = (event: any) => {
    setIngredientOne(event.currentTarget.getAttribute('data-value'))
  }

  const changeIngredientTwo = (event: any) => {
    setIngredientTwo(event.currentTarget.getAttribute('data-value'))
  }
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Ingredient One</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'alfredo'} onClick={changeIngredientOne}>Alfredo</MenuItem>
          <MenuItem value={'cheese'} onClick={changeIngredientOne}>Cheese</MenuItem>
          <MenuItem value={'ham'} onClick={changeIngredientOne}>Ham</MenuItem>
          <MenuItem value={'herbs'} onClick={changeIngredientOne}>Herbs</MenuItem>
          <MenuItem value={'pepperoni'} onClick={changeIngredientOne}>Pepperoni</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Ingredient Two</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'cheese'} onClick={changeIngredientTwo}>Cheese</MenuItem>
          <MenuItem value={'sausage'} onClick={changeIngredientTwo}>Sausage</MenuItem>
          <MenuItem value={'spinach'} onClick={changeIngredientTwo}>Spinach</MenuItem>
          <MenuItem value={'mushroom'} onClick={changeIngredientTwo}>Mushroom</MenuItem>
          <MenuItem value={'chicken'} onClick={changeIngredientTwo}>Chicken</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" onClick={addRecommendation}>
          Generate Pizza
      </Button>
    </div>
  );
}