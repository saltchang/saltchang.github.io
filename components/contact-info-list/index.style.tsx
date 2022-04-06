import styled from 'styled-components';

export const ContactInfoListBox = styled.div`
  min-width: 250px;
  max-width: 360px;
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-large);

  a {
    padding: var(--space-small);
    display: flex;
    align-items: center;

    svg {
      transition: color 300ms, transform 300ms;
    }

    &:hover {
      svg {
        color: var(--color-bright);
        transform: scale(1.35);
      }
    }
  }
`;
