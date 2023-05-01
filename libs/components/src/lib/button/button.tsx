import { styled } from '@stitches/react';

const StyledButton = styled('button', {
  backgroundColor: '#fe3700',
  border: 'none',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

/* eslint-disable-next-line */
export interface ButtonProps { }

export function Button(props: ButtonProps) {
  return (
    <StyledButton>Styled Button</StyledButton>
  );
}

export default Button;
