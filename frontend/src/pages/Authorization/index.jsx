import React from 'react';
import styles from './Authorization.module.css';
import AuthorizationForm from '../../components/AuthenticationForm/AuthorizationForm';

const Authorization = () => {
  return (
    <section className="note">
      <div className="container">
        <div className={styles.root}>
          <div className={styles.root__container}>
            <h3 className={styles.title}>Авторизация</h3>
            <AuthorizationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authorization;
