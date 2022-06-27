
import { configureStore } from '@reduxjs/toolkit';

const files = import.meta.globEager('./modules/*.js');
const reducer = {};

Object.keys(files).forEach(key => {
  reducer[key.replace(/^\.\/modules\/|.js/g, '')] = files[key].default;
});

export default configureStore({ reducer });
