import { Typography, styled } from '@mui/material'

const StyledWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: 'right',
  padding: theme.spacing(1),
  paddingRight: theme.spacing(4),
}))

export function Footer() {
  return (
    <StyledWrapper>
      <Typography>
        © LES MILLS INTERNATIONAL LTD 2023. ALL RIGHTS RESERVED
      </Typography>
    </StyledWrapper>
  )
}
