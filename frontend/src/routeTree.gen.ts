// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BrowseImport } from './routes/_browse'
import { Route as AuthImport } from './routes/_auth'
import { Route as AuthSignupImport } from './routes/_auth/signup'

// Create Virtual Routes

const BrowseIndexLazyImport = createFileRoute('/src/routeTree/gen')()
const BrowseAboutLazyImport = createFileRoute('/src/routeTree/gen')()

// Create/Update Routes

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

const BrowseAboutLazyRoute = BrowseAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => BrowseRoute,
} as any).lazy(() => import('./routes/_browse/about.lazy').then((d) => d.Route))

const AuthSignupRoute = AuthSignupImport.update({
  path: '/signup',
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
    '/_auth/signup': {
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_browse/about': {
      preLoaderRoute: typeof BrowseAboutLazyImport
      parentRoute: typeof BrowseImport
    }
    '/_browse/': {
      preLoaderRoute: typeof BrowseIndexLazyImport
      parentRoute: typeof BrowseImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthRoute.addChildren([AuthSignupRoute]),
  BrowseRoute.addChildren([BrowseAboutLazyRoute, BrowseIndexLazyRoute]),
])