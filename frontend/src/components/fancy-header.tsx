import { styled, Typography } from '@mui/material'

const Div = styled('div')(() => ({
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  height: 240,
}))

export function Header() {
  return (
    <Div>
      <Typography variant="h4">
        There shall be a fancy header but our designers are too busy
      </Typography>
    </Div>
  )
}
