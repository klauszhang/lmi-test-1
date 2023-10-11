import { ReactNode } from 'react'
import { Header } from '../components/fancy-header'
import { PageContainer } from '../components/page-container'

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

export function Booked() {
  return <PageLayout>Some booked event will be here</PageLayout>
}
