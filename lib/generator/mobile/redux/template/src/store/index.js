
import { configureStore } from "@reduxjs/toolkit";

const files = require.context('./modules', false, /\.js$/)
const reducer = {}

files.keys().forEach(key => {
  reducer[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default configureStore({
  reducer
})
