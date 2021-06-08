import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string(),
		email: schema.string({trim: true}),
		password: schema.string({trim: true}, [rules.minLength(6), rules.maxLength(10)]),
    cell: schema.string(),
    gender: schema.string()
  })

  public messages = {}
}
