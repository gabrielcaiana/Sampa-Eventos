import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'
import Database from "@ioc:Adonis/Lucid/Database";

export default class AuthController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const token = await auth.attempt(data.email, data.password, {
      expiresIn: "14 days"
    })

    const dataAuthentication = {
      token: token.tokenHash,
      expires: token.expiresAt,
      user_id: token.user.id
    }

    return dataAuthentication
  }

  public async destroy ({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
