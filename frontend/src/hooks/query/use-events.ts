import { gql, useQuery } from '@apollo/client'

export function useEventQuery() {
  const { loading, error, data } = useQuery(gql`
    query GetEvents {
      events {
        edges {
          cursor
          node {
            eventType
            id
            name
            startDate
            address
            program
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `)

  return {
    loading,
    error,
    data: loading
      ? []
      : (data.events as PagedData<EventData>).edges.map((edge) => edge.node),
  }
}

type EventData = {
  id: string
  name: string
  startDate: string
  eventType: string
}

type PagedData<T> = {
  edges: { cursor: string; node: T }[]
  pageInfo: {
    endCursor: string
    hasNextPage: boolean
  }
}
