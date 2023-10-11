import { GraphQLError } from 'graphql'

export class NotFoundError extends GraphQLError {
  constructor(input: any) {
    super('Not found error', {
      extensions: { code: 'NOT_FOUND', input },
    })
  }
}
