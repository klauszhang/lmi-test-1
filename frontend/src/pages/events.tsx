import { ReactNode } from 'react'
import { EventList } from '../components/events/event-list'
import { Header } from '../components/fancy-header'
import { PageContainer } from '../components/page-container'
import { useEventQuery } from '../hooks/query/use-events'

type PageLayoutProps = {
  children: ReactNode
}
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  )
}

export function Events() {
  const { loading, error, data } = useEventQuery()

  if (loading) return <PageLayout>loading...</PageLayout>

  if (error) return <PageLayout>error</PageLayout>

  return (
    <PageLayout>
      <EventList data={data} />
    </PageLayout>
  )
}
