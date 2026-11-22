# Stage 8: AI log

## Tools
- GitHub Copilot in VS Code

## Conversations
- (stage 8: navigation and component styling for the PetalDesk flower shop app)

## Key requests
### 1. Navigation and detail page
- Asked: for help with Stage 8 from the provided guide while keeping the flower-shop theme
- Got: routes for the order list, `/comenzi/:id`, About and not-found pages, with order details fetched from JSON Server

### 2. Component styles
- Asked: to split component styles into CSS Modules
- Got: local styles for the shared layout, order card, form, list and pages; `index.css` retains shared theme variables and common styles


## What I learned / what did not work
I learned how `BrowserRouter`, `Routes`, `Outlet`, `NavLink`, `Link` and `useParams` keep navigation inside a React app. The order detail route follows the `comenzi` resource in `tw.json`; its request reports a loading state or an error for an order that cannot be found.
