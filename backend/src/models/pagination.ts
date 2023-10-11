import { TData } from './base'

export type CursorBasedList<T extends TData> = {
  edges: {
    cursor: string
    node: T
  }[]
  pageInfo: {
    endCursor: string
    hasNextPage: boolean
  }
}

export function toPaginatedData<T extends TData>(
  data: T[],
  hasNextPage: boolean
): CursorBasedList<T> {
  if (data.length === 0) {
    return {
      edges: [],
      pageInfo: {
        endCursor: '',
        hasNextPage: false,
      },
    }
  }

  const edges = data.map((node) => {
    return {
      cursor: node.id,
      node,
    }
  })

  return {
    edges,
    pageInfo: {
      endCursor: data[data.length - 1].id,
      hasNextPage,
    },
  }
}
