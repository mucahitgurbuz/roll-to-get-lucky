import { Flex, Provider as BumbagProvider, ToastManager } from 'bumbag'
import i18n from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorBoundary from './components/pages/ErrorBoundary'
import NotFound from './components/pages/NotFound'
import { Empty } from './components/templates/empty'
import { Main } from './components/templates/main'
import en from './i18n/en.json'
import tr from './i18n/tr.json'
import { IRouteConfig, routes } from './routers/routers'
import { Provider } from 'react-redux'
import store from './state/redux/store'
import theme from './theme'

i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
  },
  lng: 'tr',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'b', 'strong', 'i', 'a'],
  },
})

function App() {
  function renderRoutes() {
    return routes
      .filter((r: IRouteConfig) => r.enabled)
      .map((route: IRouteConfig) => {
        if (route.protectedRoute && route.component) {
          const RouteComponent = route.component
          return (
            <Route
              exact
              key={route.key}
              path={route.url}
              component={() => (
                <Main>
                  <RouteComponent />
                </Main>
              )}
            />
          )
        }
        if (!route.protectedRoute && route.component) {
          const RouteComponent = route.component
          return (
            <Route
              exact
              key={route.key}
              path={route.url}
              component={() => (
                <Empty>
                  <RouteComponent />
                </Empty>
              )}
            />
          )
        }
        throw {
          message: `No component or render is available for route: ${route.url}`,
          code: 0,
        }
      })
  }

  return (
    <React.Suspense
      fallback={
        <Flex justifyContent="center" alignItems="center" minHeight="100vh">
          Loading...
        </Flex>
      }
    >
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <BumbagProvider theme={theme}>
              <SkeletonTheme>
                <Switch>
                  {renderRoutes()}
                  <Route component={NotFound} />
                </Switch>
                <ToastManager />
              </SkeletonTheme>
            </BumbagProvider>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default App
