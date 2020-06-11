import React, { useState, useCallback, memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const PasswordInput = memo(
  // eslint-disable-next-line object-curly-newline
  ({ label = 'Password', onChange, labelWidth = 70, name }) => {
    const [visibility, setVisibility] = useState(false);
    const toggleVisibility = useCallback(
      () => setVisibility((prev) => !prev),
      []
    );

    const adornment = (
      <InputAdornment position="end">
        <IconButton onClick={toggleVisibility}>
          {visibility ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );

    return (
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">{label}</InputLabel>
        <OutlinedInput
          name={name}
          id="password"
          type={visibility ? 'text' : 'password'}
          onChange={onChange}
          endAdornment={adornment}
          labelWidth={labelWidth}
        />
      </FormControl>
    );
  }
);

export default PasswordInput;
