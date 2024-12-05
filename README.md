# useParams Hook Not Updating in Nested Routes with Outlet in React Router v6

This repository demonstrates a bug in React Router v6 where the `useParams` hook does not correctly update when used within a nested route that uses the `Outlet` component. The child component always renders with the initial parameters, even when the URL changes.

## Bug Description

When navigating between child routes nested within a route using `Outlet`, the `params` object returned by `useParams` in the child component does not reflect the changes in the URL parameters.  This leads to stale data in the child component.

## Solution

The solution involves using the `useLocation` hook to access the current location object and then extracting the parameters from the pathname. This provides a more reliable way to obtain the current parameters than relying on `useParams` in this specific scenario.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Navigate between the child routes to observe the incorrect behavior of `useParams`.
5. Then, compare the solution by switching between branches.