import React from 'react';
import styles from './AuthenticationForm.module.css';
import { fetchUserLogin, fetchUserReg, selectUser } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const { error } = useSelector(selectUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      fetchUserReg({
        username: event.target[0].value,
        email: event.target[1].value,
        first_name: event.target[2].value,
        last_name: event.target[3].value,
        password: event.target[4].value,
        re_password: event.target[5].value,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.error}>{error}</p>
      <div className={styles.input__container}>
        <label>Имя пользователя</label>
        <input type="text" name="username" placeholder="Имя пользователя" required />
      </div>
      <div className={styles.input__container}>
        <label>Адрес электронной почты</label>
        <input type="email" name="email" placeholder="Адрес электронной почты" required />
      </div>
      <div className={styles.input__container}>
        <label>Пароль</label>
        <input type="password" name="password" placeholder="Пароль" required />
      </div>
      <div className={styles.input__container}>
        <label>Пароль (повторный)</label>
        <input type="password" name="re_password" placeholder="Пароль (повторный)" required />
      </div>
      <input className={styles.button} type="submit" value="Войти" />
    </form>
  );
};

export default RegistrationForm;
