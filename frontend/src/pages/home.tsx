import { Stack, Typography, styled } from '@mui/material'
import { PageContainer } from '../components/page-container'

const SectionWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(4),

  '& > *': {
    paddingTop: theme.spacing(2),
  },
}))

export function Home() {
  return (
    <PageContainer>
      <Stack direction="column" alignItems="center" paddingTop={12}>
        <Typography variant="h2" component="h2">
          Welcome! 🎉🎉🎉
        </Typography>
        <SectionWrapper>
          <Typography variant="subtitle1">
            Please submit the code when you finished. Don't forget to let us
            know. :D
          </Typography>
        </SectionWrapper>
      </Stack>
    </PageContainer>
  )
}
