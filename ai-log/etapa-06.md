# Stage 6: AI log

## Tools
- GitHub Copilot in VS Code

## Conversations
- (stage 6: mock API, useEffect and loading/error states for the flower shop app)

## Key requests
### 1. JSON Server and API integration
- Asked: for the setup of json-server, db.json and a small API module for the PetalDesk flower shop
- Got: a local REST API with flower orders and a fetch function that checks the server response

### 2. Loading and error states
- Asked: to load the orders from the API with useEffect and show loading, success and error states
- Got: state for the order list, loading and errors, with cleanup logic to prevent updates after unmounting

## What I learned / what did not work
I learned how to move the flower-shop data from React code into db.json, run json-server and request the data with fetch, async and await. I also learned to handle loading and error states and to keep API calls inside api.js.