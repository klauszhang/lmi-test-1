import { Stack } from '@mui/material'
import { EventCard } from './event-card'

type EventListProps = {
  data: object[]
}

export function EventList({ data }: EventListProps) {
  return (
    <Stack>
      {data.map((d) => {
        return <EventCard data={d} />
      })}
    </Stack>
  )
}
