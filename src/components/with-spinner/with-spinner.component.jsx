import React from 'react';
import { Spinner } from '../spinner/spinner.component';

export const WithSpinner = Component => ({ isLoading, ...props }) => (
  isLoading
    ? <Spinner />
    : <Component {...props} />

);