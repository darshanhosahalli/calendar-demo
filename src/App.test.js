import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const app = await screen.findByTestId('calendar');
  expect(app).toBeInTheDocument();
});
