import { Stack, Typography } from '@mui/material'
import { PageContainer } from '../components/page-container'

export function Booked() {
  return (
    <PageContainer>
      <Stack
        direction="column"
        alignItems="center"
        minHeight={150}
        paddingTop={4}
      >
        <Typography variant="h2" component="h2">
          Some booked event will be here
        </Typography>
      </Stack>
    </PageContainer>
  )
}
