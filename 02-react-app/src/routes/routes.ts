import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyPage1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    name: 'Lazy 1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    name: 'Lazy 2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'Lazy 3',
  },
];
