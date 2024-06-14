import { useDispatch } from 'react-redux';
import Layout from '../layout/layout';
import styles from './app.module.scss';
import { useEffect } from 'react';
import { getCategories } from '../store/categories/categoriesSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getProducts } from '../store/products/productsSlice';


export default function App() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Layout />
      </div>
    </div>
  );
}
