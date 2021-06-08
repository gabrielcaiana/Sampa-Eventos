import { DateTime } from 'luxon'
import Hash from "@ioc:Adonis/Core/Hash";
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs : null})
  public password: string

  @column()
  public cell: string

  @column()
  public gender: string

  @column()
  public rememberMeToken?: string
  
  @column.dateTime({ autoCreate: true, serialize: (value:DateTime) => {
    return value.toFormat("dd/MM/yyyy HH:mm:ss")
  }})

  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value: DateTime) => {
    return value.toFormat("dd/MM/yyyy HH:mm:ss")
  }})
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if(user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
