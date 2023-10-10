import { useHealth } from '../hooks/query/use-health'
import { PageContainer } from '../components/page-container'
import { Stack } from '@mui/material'

export function System() {
  const { loading, error, data } = useHealth()

  let content = 'loading'

  if (loading) return <div>loading</div>

  if (error) {
    content = 'error'
  } else if (data) {
    content = JSON.stringify(data)
  }

  return (
    <PageContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack paddingTop={12}>{content}</Stack>
    </PageContainer>
  )
}
