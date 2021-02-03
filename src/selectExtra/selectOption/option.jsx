import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import './style.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
      
    margin: theme.spacing(1),
    minWidth: 120,
    // border:'2px solid',
    width:'75%',
    marginTop:'0px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Options({selectFunc,addfunc}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [state2, setState2] = React.useState({
    age: '',
    name: 'hai',
  });
  const [state3, setState3] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleChange2 = (event) => {
    const name = event.target.name;
    setState2({
      ...state2,
      [name]: event.target.value,
    });
  };
  const handleChange3 = (event) => {
    const name = event.target.name;
    setState3({
      ...state3,
      [name]: event.target.value,
    });
  };

  return (
    <div>
     
      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="age-native-helper">Select Airport</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option className='option' aria-label="None" value="" />
          <option value={10}>option 1</option>
          <option value={20}>option 2</option>
          <option value={30}>option 3</option>
        </NativeSelect>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Select Pax</InputLabel>
        <NativeSelect
          value={state2.age}
          onChange={handleChange2}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>option 1</option>
          <option value={20}>option 2</option>
          <option value={30}>option 3</option>
        </NativeSelect>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
      </FormControl><FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Select Pax</InputLabel>
        <NativeSelect
          value={state3.age}
          onChange={handleChange3}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>option 1</option>
          <option value={20}>option 2</option>
          <option value={30}>option 3</option>
        </NativeSelect>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
      </FormControl>
      <div>
        <button onClick={selectFunc} className='cancel_btn'>Cancel</button>
        <button onClick={function(){addfunc();selectFunc()}} className='add_btn'>Add</button>
      </div>
    </div>
  );
}