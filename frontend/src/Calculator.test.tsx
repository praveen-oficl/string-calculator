import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';
import '@testing-library/jest-dom';

test('renders input field', () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
});
  
test('renders calculate button', () => {
  render(<Calculator />);
  expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument();
});

test('calculates sum of valid input', () => {
  render(<Calculator />);
  fireEvent.change(screen.getByPlaceholderText(/Enter numbers/i), {
    target: { value: '1,2,3,4' }
  });
  fireEvent.click(screen.getByText(/calculate/i));
  expect(screen.getByText(/Sum: 10/i)).toBeInTheDocument();
});


