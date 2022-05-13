import { LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// const LazyLayout = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
//     )
// );

export const routes: Route[] = [
  {
    to: '/shopping',
    path: 'shopping',
    Component: ShoppingPage,
    name: 'Shopping',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
