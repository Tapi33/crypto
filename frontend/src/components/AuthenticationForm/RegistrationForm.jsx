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
        password: event.target[2].value,
        re_password: event.target[3].value,
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
        <label className={styles.input__title}>Адрес электронной почты</label>
        <input type="email" name="email" placeholder="Адрес электронной почты" required />
      </div>
      <div className={styles.input__container}>
        <label className={styles.input__title}>Пароль</label>
        <input type="password" name="password" placeholder="Пароль" required />
      </div>
      <div className={styles.input__container}>
        <label className={styles.input__title}>Пароль (повторный)</label>
        <input type="password" name="re_password" placeholder="Пароль (повторный)" required />
      </div>
      <input className={styles.button} type="submit" value="Войти" />
    </form>
  );
};

export default RegistrationForm;
