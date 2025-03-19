import BaseLayout from '@/app/layouts/BaseLayout';
import MainPage from '@/pages/main/ui/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { RouterPathsEnum } from './types';

const router = createBrowserRouter([
  {
    path: RouterPathsEnum.MAIN,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={'...loading'}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
