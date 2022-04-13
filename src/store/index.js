import { configureStore } from '@reduxjs/toolkit'
import assetSlice from '../components/slices/assetSlice'

const store = configureStore({
  reducer: {
    asset: assetSlice,
  },
})

export default store
