import { createRouter, Route } from '@tanstack/react-router';
import { Root } from 'postcss';
import React from 'react';

// Root route
const rootRoute = new Route({
    getParentRoute: () => undefined,
    path: '/',
    component: () => <div>Root Layout</div>,
});

// Home route
const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: () => <div>Home Page</div>,
});

// Create router
export const router = createRouter({
    routeTree: rootRoute.addChildren([homeRoute]),
});
