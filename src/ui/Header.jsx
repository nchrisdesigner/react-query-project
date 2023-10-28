import styled from 'styled-components'
import DarkModeToggle from './DarkModeToggle'

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border: 1px solid var(--color-grey-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {
  return (
    <StyledHeader>
        <div>
          The Wild Oasis
        </div>

        <div>
          <DarkModeToggle />
        </div>
    </StyledHeader>
  )
}

export default Header