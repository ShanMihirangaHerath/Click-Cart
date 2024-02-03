import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_browse/about')({
  component: () => <div>Hello /about!</div>
})