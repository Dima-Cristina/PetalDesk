# PetalDesk

A web app for managing the orders of a flower shop: the florist adds orders for bouquets, arrangements and potted plants, marks them as delivered and organizes them by occasion.

## Data model

| Field       | Type         | Notes                                           |
| ----------- | ------------ | ----------------------------------------------- |
| name        | text         | required, max 100 chars                         |
| delivered   | boolean      | toggled from the list, default false            |
| type        | fixed values | bouquet, arrangement, plant                     |
| occasion    | relation     | Birthday, Wedding, Condolences (from week 10)   |
| user        | relation     | the owner of the item (from week 11)            |

Sample data used across all stages:

1. Buchet de trandafiri roșii, in preparation, bouquet
2. Aranjament floral nuntă, delivered, arrangement
3. Orhidee în ghiveci, in preparation, plant

## How to run
```bash
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (http://localhost:5173).

## AI usage

| Tool   | Used for                                   |
| ------ | ------------------------------------------ |
| Claude | HTML/CSS structure, Git steps, stage 1     |

Details per stage: see the ai-log/ folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `comenzi.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- `ComandaList` receives the whole array and renders one card per item
- `ComandaCard` receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.


## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components built from data
- [x] Stage 5: local state and events

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S1-R1 | README: description, fields, sample data, how to run | [README.md] | read |
| S1-R2 | AI usage section | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/ai-log/etapa-01.md?plain=1#L1-L15 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/ai-log/etapa-01.md?plain=1#L1-L15 | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/index.html#L10-L63 | open the page |
| S1-R5 | finished card looks different | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/style.css#L127-L131 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/style.css#L159-L162 , https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/style.css#L38-L47 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Dima-Cristina/PetalDesk/blob/6c7da083682b2b32cb1577b769d88f64c7d2fb9e/style.css#L140-L157 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Dima-Cristina/PetalDesk/commit/253b969e5a05be89a4e6386a26778f03ca5b1644 | commit history |
## Verification table (Stage 2)
| S2-R1 | JS file linked, logs on page load | https://github.com/Dima-Cristina/PetalDesk/blob/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e/index.html#L66 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Dima-Cristina/PetalDesk/blob/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e/comenzi.js#L3-L9 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Dima-Cristina/PetalDesk/blob/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e/comenzi.js#L12-L55 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Dima-Cristina/PetalDesk/blob/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e/comenzi.js#L33-L45 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Dima-Cristina/PetalDesk/blob/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e/comenzi.js#L66 | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa02.md | read |
| S2-R7 | commit “Stage 2” pushed | https://github.com/Dima-Cristina/PetalDesk/commit/139e85d10c807c1b99b7a0b370bcd3fa50d96f1e | commit history |
## Verification table (Stage 3)

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S3-R1 | npm run dev starts without errors | frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/Dima-Cristina/PetalDesk/blob/545ef1080b0f056d30c326d4cb81a21aba27b6d5/frontend/src/App.jsx#L8-L18 | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/Dima-Cristina/PetalDesk/blob/545ef1080b0f056d30c326d4cb81a21aba27b6d5/frontend/src/App.jsx#L1-L5 | compare with README |
| S3-R4 | stage 1 styles reused | frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | README.md, ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | https://github.com/Dima-Cristina/PetalDesk/commit/a7a8a04699def08c3f73363854eec264e0583b44 | commit history |
## Verification table (Stage 4)
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/]https://github.com/Dima-Cristina/PetalDesk/tree/eb3d017986c32a89401909a287fcecd2a738c744/frontend/src/components | open folder |
| S4-R2 | card receives data through props |https://github.com/Dima-Cristina/PetalDesk/blob/eb3d017986c32a89401909a287fcecd2a738c744/frontend/src/components/ComandaCard.jsx#L8-L20 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/Dima-Cristina/PetalDesk/blob/eb3d017986c32a89401909a287fcecd2a738c744/frontend/src/components/ComandaList.jsx#L8-L14 | F12, Console |
| S4-R4 | message for empty list | https://github.com/Dima-Cristina/PetalDesk/blob/eb3d017986c32a89401909a287fcecd2a738c744/frontend/src/components/ComandaList.jsx#L4-L7 | set array to [] |
| S4-R5 | state changes the card look | https://github.com/Dima-Cristina/PetalDesk/blob/eb3d017986c32a89401909a287fcecd2a738c744/frontend/src/components/ComandaCard.jsx#L10 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md]https://github.com/Dima-Cristina/PetalDesk/blob/eb3d017986c32a89401909a287fcecd2a738c744/README.md, [ai-log/etapa-04.md](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit](https://github.com/Dima-Cristina/PetalDesk/commit/<commit>) | commit history |
| S4-R7 | commit "Stage 4" pushed | https://github.com/Dima-Cristina/PetalDesk/commit/549239bc0ae8598560f2f1ed0cd6af7f4d80c3b2 | commit history |