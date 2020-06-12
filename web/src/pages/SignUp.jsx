import React, { useReducer, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PasswordInput from '../components/PasswordInput';
import GoogleButton from '../components/GoogleButton';
import useAuth from '../hook/auth';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  align-items: center;
  justify-items: center;
`;

const Surface = styled(Paper)`
  max-width: 100%;
  width: 33%;
  padding: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  & > h5 {
    margin-bottom: 0.5rem;
  }
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'update-field':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const SignUp = () => {
  const { signUpWithEmailAndPassword, loginWithGoogle } = useAuth();
  const [credentials, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({
        type: 'update-field',
        field: event.target.name,
        value: event.target.value
      });
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await signUpWithEmailAndPassword(credentials);
      } catch (error) {
        console.error(error);
      }
    },
    [signUpWithEmailAndPassword, credentials]
  );

  return (
    <Wrapper>
      <Surface elevation={3}>
        <Form onSubmit={onSubmit}>
          <Typography variant="h5">Sign Up</Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            onChange={onChange}
          />
          <PasswordInput name="password" onChange={onChange} />
          <PasswordInput
            label="Confirm Password"
            labelWidth={135}
            name="confirmPassword"
            onChange={onChange}
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign up
          </Button>
          <GoogleButton type="signup" onClick={loginWithGoogle} />
          <Button fullWidth>Sign in</Button>
        </Form>
      </Surface>
    </Wrapper>
  );
};

export default SignUp;
