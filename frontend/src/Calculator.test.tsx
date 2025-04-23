import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import '@testing-library/jest-dom';

test('renders input field', () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
});
  