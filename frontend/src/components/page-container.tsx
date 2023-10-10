import { Container, ContainerProps, styled } from '@mui/material'

const StyledContainer = styled(Container)(({}) => ({
  paddingTop: 12,
}))

export function PageContainer(props: ContainerProps) {
  return <StyledContainer {...props} />
}
