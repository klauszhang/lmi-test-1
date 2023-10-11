export type TData = {
  id: string
}

export abstract class BaseModel<T extends TData> {
  public id: string
  constructor(public type: string, public data: T) {
    this.id = data.id
  }

  public get key() {
    return getKey(this.type, this.id)
  }

  toString() {
    return JSON.stringify(this.data)
  }
}

export function getKey(type: string, id: string) {
  return id
}
