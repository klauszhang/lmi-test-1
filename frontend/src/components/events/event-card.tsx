import { Paper, styled } from '@mui/material'

type EventCardProps = {
  data: object //TODO define type
}

const StyledPaper = styled(Paper)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  }
})

export function EventCard({ data }: EventCardProps) {
  return (
    <StyledPaper elevation={0}>{JSON.stringify(data, null, 2)}</StyledPaper>
  )
}
