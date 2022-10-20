import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Wallet from '../components/Wallet'
import Error from '../components/Error'
import UserContext from '../contexts/UserContext'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <UserContext><Main /></UserContext>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: 'wallet',
        element: <PrivateRoute><Wallet /></PrivateRoute>
      }
    ],
  },
]);