# Stage 7: AI log

## Tools
- GitHub Copilot in VS Code

## Conversations
- (stage 7: controlled form, validation and CRUD operations for the PetalDesk flower shop app)

## Key requests
### 1. Flower order form
- Asked: to add a controlled form for creating bouquets, floral arrangements and potted plants
- Got: a form with controlled name and flower-type fields, inline validation and a disabled submit state

### 2. Server CRUD operations
- Asked: to save additions, delivery changes and deletions through json-server
- Got: POST, PATCH and DELETE requests, server response objects in state and verification markers in tw.json

## What I learned / what did not work
I learned how to validate form data before sending requests, keep input state during failed submissions and update the flower-order list only after the server responds. I also learned to use data-testid attributes and a two-column layout while keeping the page responsive.
