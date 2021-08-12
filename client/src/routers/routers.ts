import React from 'react'
import Game from '../components/pages/Game/Game'
import urls from './urls'

export interface IRouteConfig {
  url: string
  component: any
  protectedRoute?: boolean
  enabled?: boolean
  key?: string
  scopes?: string[]
  role?: string
}

export const routerDefinitions: { [key: string]: IRouteConfig } = {
  Game: {
    key: 'Game',
    url: urls.Game,
    component: Game,
    protectedRoute: true,
  },
}

const routes: IRouteConfig[] = Object.keys(routerDefinitions).map(k => {
  const route: IRouteConfig = routerDefinitions[k]
  route.enabled = route.enabled !== undefined ? route.enabled : true
  route.protectedRoute = route.protectedRoute !== undefined ? route.protectedRoute : true
  route.key = route.key ? route.key : route.url.replace('/', '')
  route.scopes = route.scopes ? route.scopes : []
  route.role = route.role ? route.role : ''
  return route
})

export { routes }
