import { gql, useQuery } from '@apollo/client'

export function useHealthQuery() {
  const { loading, error, data } = useQuery(gql`
    query GetHealth {
      health
    }
  `)

  return { loading, error, data }
}
