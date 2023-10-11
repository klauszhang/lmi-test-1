import { EventList } from '../components/events/event-list'
import { PageContainer } from '../components/page-container'
import { useEventQuery } from '../hooks/query/use-events'

export function Search() {
  const { loading, error, data } = useEventQuery()

  if (loading) return <PageContainer>loading...</PageContainer>

  if (error) return <PageContainer>error</PageContainer>

  return (
    <PageContainer>
      <EventList data={data} />
    </PageContainer>
  )
}
