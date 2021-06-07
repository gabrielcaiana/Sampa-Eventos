import Route from '@ioc:Adonis/Core/Route'

import './users'

Route.get('/', async () => {
  return { hello: 'world' }
})
