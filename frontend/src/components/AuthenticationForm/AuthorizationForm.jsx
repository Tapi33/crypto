import React from 'react';
import styles from './AuthenticationForm.module.css';
import { useAppDispatch } from '../../redux/store';
import { fetchUserLogin, selectUser, UserLoginRequest } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';

const AuthorizationForm = () => {
  const dispatch = useAppDispatch();
  const { error } = useSelector(selectUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      fetchUserLogin({
        username: event.target[0].value,
        password: event.target[1].value,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.error}>{error}</p>
      <div className={styles.input__container}>
        <label className={styles.input__title}>Имя пользователя</label>
        <input type="text" name="username" placeholder="Имя пользователя" required />
      </div>
      <div className={styles.input__container}>
        <label className={styles.input__title}>Пароль</label>
        <input type="password" name="password" placeholder="Пароль" required />
      </div>
      <input className={styles.button} type="submit" value="Войти" />
    </form>
  );
};

export default AuthorizationForm;
