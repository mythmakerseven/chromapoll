import { Entity, Property } from '@mikro-orm/core'
import { BaseEntity } from './BaseEntity'

@Entity()
export class Poll extends BaseEntity {

  @Property()
  title: string

  constructor(title: string) {
    super()
    this.title = title
  }
}