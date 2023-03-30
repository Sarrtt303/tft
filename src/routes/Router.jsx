import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import LoanPage from '../pages/LoanPage';
import MarketPage from '../pages/MarketPage';
import RegisterPage from '../pages/RegisterPage';
import FeedPage from '../pages/FeedPage';
import LoginPage from '../pages/LoginPage';
import { Layout } from '../components/layout/Layout';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: '/market',
                element: <MarketPage />,
            },
            {
                path: '/loans',
                element: <LoanPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/feed',
                element: <FeedPage />
            },
        ]
    }
])