import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';

describe('button', () => {
  it('should render', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
