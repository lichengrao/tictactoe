import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Error as ErrorComponent, Field, H1 } from 'components';
import { validateEmail } from 'helpers';
import { useCurrentUser, useSearchParams } from 'hooks';
import { auth } from 'services';

const LoginPage: FC = () => {
  const history = useHistory();
  const user = useCurrentUser();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState<string | undefined>();
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState<string | undefined>();
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { redirect, player } = useSearchParams();

  const performRedirect = useCallback(() => {
    if (!redirect) return history.push('/');
    if (!player) return history.push(`/${redirect}`);
    return history.push(`/${redirect}?player=${player}`);
  }, [history, player, redirect]);

  useEffect(() => {
    if (user) history.push('/');
  }, [performRedirect, user]);

  useEffect(() => {
    setEmailErr(undefined);
    setPasswordErr(undefined);
  }, [email, password]);

  const handleLogin = async () => {
    if (email.length === 0) return setEmailErr('Email is required!');
    if (!validateEmail(email))
      return setEmailErr('Email address must be valid!');
    if (password.length === 0) return setPasswordErr('Password is required!');

    setIsLoggingIn(true);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      performRedirect();
    } catch (err) {
      setFirebaseErr(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const goToHome = () => {
    history.push('/');
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  return (
    <>
      <H1>Login</H1>
      <Field
        errMessage={emailErr}
        id="email"
        label="* Email"
        onChange={setEmail}
        placeHolder="Enter Email"
        type={email}
        value={email}
      />
      <Field
        errMessage={passwordErr}
        id="password"
        label="* Password"
        onChange={setPassword}
        placeHolder="Enter Password"
        type="password"
        value={password}
      />
      {firebaseErr && <ErrorComponent>{firebaseErr}</ErrorComponent>}
      <Button disabled={isLoggingIn} onClick={handleLogin}>
        Login
      </Button>
      <Button onClick={goToSignup}>Signup Instead</Button>
      <Button onClick={goToHome}>Back To Home</Button>
    </>
  );
};

export default LoginPage;
