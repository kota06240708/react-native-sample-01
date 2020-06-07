import { createStore, applyMiddleware, Middleware } from 'redux'

import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import think from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleweres: Middleware[] = [think]

if (process.env.NODE_ENV === 'development') {
  const logger: Middleware = createLogger({
    collapsed: true,
    diff: true
  })

  middleweres.push(logger)
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleweres))
)

export default store
