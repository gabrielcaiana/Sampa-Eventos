import Route from '@ioc:Adonis/Core/Route'

import './users'
import './auth'

Route.get('/', async () => {
  return { hello: 'world' }
})
