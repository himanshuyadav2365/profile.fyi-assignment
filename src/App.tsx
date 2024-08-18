import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import router from './router/AppRouter';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={1}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
