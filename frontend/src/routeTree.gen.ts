// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BrowseImport } from './routes/_browse'
import { Route as AuthImport } from './routes/_auth'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthSigninImport } from './routes/_auth/signin'

// Create Virtual Routes

const BrowseIndexLazyImport = createFileRoute('/_browse/')()
const BrowseAboutLazyImport = createFileRoute('/_browse/about')()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BrowseRoute = BrowseImport.update({
  id: '/_browse',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const BrowseIndexLazyRoute = BrowseIndexLazyImport.update({
  path: '/',
  getParentRoute: () => BrowseRoute,
} as any).lazy(() => import('./routes/_browse/index.lazy').then((d) => d.Route))

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const BrowseAboutLazyRoute = BrowseAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => BrowseRoute,
} as any).lazy(() => import('./routes/_browse/about.lazy').then((d) => d.Route))

const AuthSignupRoute = AuthSignupImport.update({
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSigninRoute = AuthSigninImport.update({
  path: '/signin',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_browse': {
      preLoaderRoute: typeof BrowseImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_auth/signin': {
      preLoaderRoute: typeof AuthSigninImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_browse/about': {
      preLoaderRoute: typeof BrowseAboutLazyImport
      parentRoute: typeof BrowseImport
    }
    '/dashboard/': {
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/_browse/': {
      preLoaderRoute: typeof BrowseIndexLazyImport
      parentRoute: typeof BrowseImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthRoute.addChildren([AuthSigninRoute, AuthSignupRoute]),
  BrowseRoute.addChildren([BrowseAboutLazyRoute, BrowseIndexLazyRoute]),
  DashboardRoute.addChildren([DashboardIndexRoute]),
])
