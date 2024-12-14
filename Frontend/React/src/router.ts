import { createReactRouter, createRouteConfig } from '@tanstack/react-router';
import React from 'react';

const rootRoute = createRouteConfig({
    component: () => <div>Root Layout</div>,
});

const homeRoute = rootRoute.createRoute({
    path: '/',
    component: () => <div>Home Page</div>,
});

const routes = rootRoute.addChildren([homeRoute]);

export const router = createReactRouter({ routeConfig: routes });
