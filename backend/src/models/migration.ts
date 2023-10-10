import { BaseModel, TData } from './base'

export type MigrationData = TData & {
  step: number
  name: string
}

export class MigrationModel extends BaseModel<MigrationData> {
  constructor(data: MigrationData) {
    super('Migration', data)
  }
}
