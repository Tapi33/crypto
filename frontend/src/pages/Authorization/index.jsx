import React from 'react';
import styles from './Authorization.module.css';
import AuthorizationForm from '../../components/AuthenticationForm/AuthorizationForm';

const Authorization = () => {
  return (
      <div className={styles.container}>
          <div className={styles.root__container}>
            <h3 className={styles.title}>Авторизация</h3>
            <AuthorizationForm />
          </div>
        </div>
  );
};

export default Authorization;
