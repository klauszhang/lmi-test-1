import { Button, Stack, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const NavItem = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: '100%',
}))

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  '&.active > button': {
    color: theme.palette.primary.light,
  },
  '&.active > .MuiButton-textWarning': {
    color: theme.palette.warning.light,
  },
}))

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.grey[50],
  borderRight: `1px solid ${theme.palette.divider}`,
  width: 240,
}))

export function Nav() {
  return (
    <StyledWrapper>
      <Stack paddingLeft={2} paddingTop={16} paddingRight={2}>
        <StyledNavLink to="/">
          <NavItem size="large">Home</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/search">
          <NavItem size="large">Search Event</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/booked">
          <NavItem size="large">Booked Event</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/system">
          <NavItem size="large" color="warning">
            System Health
          </NavItem>
        </StyledNavLink>
      </Stack>
    </StyledWrapper>
  )
}
