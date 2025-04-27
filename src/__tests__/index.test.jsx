import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from '../routes';

test('renders Home page', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });
  render(
    <RouterProvider router={router} />
  );
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});