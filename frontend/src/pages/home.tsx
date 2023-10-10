import { Stack, Typography, styled } from '@mui/material'
import { PageContainer } from '../components/page-container'

const SectionWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(4),
}))

export function Home() {
  return (
    <PageContainer>
      <Stack direction="column" alignItems="center" paddingTop={12}>
        <Typography variant="h2" component="h2">
          Welcome!
        </Typography>
        <SectionWrapper>
          <Typography variant="body1"></Typography>
        </SectionWrapper>
      </Stack>
    </PageContainer>
  )
}
