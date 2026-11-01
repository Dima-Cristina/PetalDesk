# Stage 4: AI log

## Tools
- Claude (chat)

## Conversations
- <(https://claude.ai/share/7ef2d793-777c-4746-bf75-c23d68d23b98)> (stage 4: React components rendered from data for the flower shop app)

## Key requests
### 1. ComandaCard, ComandaList and App.jsx
- Asked: for the code of stage 4 adapted to my theme (a card component, a list component, props, key and the empty list message)
- Got: ComandaCard.jsx (one order through props), ComandaList.jsx (map with key={comanda.id} and an early return for the empty list), App.jsx using ComandaList, and a small CSS rule for the .empty message


## What I learned / what did not work
I learned that a React component is a function that returns JSX and that data goes from the parent to the child through props, so ComandaCard only displays the order it receives. I learned to render a list with map and to put key={comanda.id} on the component returned by map, because the id is stable and the position is not. I also learned to handle the empty list with an early return and to keep the values stored in the data (planta) separate from the labels shown on screen (Plantă). I tested the key warning by removing the attribute for a moment and the empty list by setting the array to [].
