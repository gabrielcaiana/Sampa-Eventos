import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({}: HttpContextContract) {
    const users =  await User.query().orderBy('id', 'desc')

    return users
  }

  public async store ({ request }: HttpContextContract) {
    const data = await request.all()
    console.log(data)
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
