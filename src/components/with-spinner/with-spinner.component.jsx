import React from 'react';
import { Spinner } from '../spinner/spinner.component';

export const WithSpinner = Component => ({ loading, ...props }) => (
  loading
    ? <Spinner />
    : <Component {...props} />

);