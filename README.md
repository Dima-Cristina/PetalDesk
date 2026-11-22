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
npm run api
```
In a second terminal:
```bash
cd frontend
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
header switches between light and dark mode.

## Stage 6: mock API
Orders are loaded from the local JSON Server API configured by `frontend/db.json`.

## Stage 7: order form and validation
The florist can add bouquets, floral arrangements, and potted plants from
a controlled form. Names are required and limited to 100 characters.
Creating, marking as delivered, and deleting an order are saved through the
API before the page updates, so changes survive a refresh.



## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components built from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation

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

## Verification table (Stage 5)

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S5-R1 | list kept in useState, in App | [App.jsx#L17](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L17) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L21-L25](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L21-L25), [ComandaCard.jsx#L10-L16](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/components/ComandaCard.jsx#L10-L16) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L27-L29](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L27-L29), [ComandaCard.jsx#L24-L30](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/components/ComandaCard.jsx#L24-L30) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L39](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L39) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L21-L29](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L21-L29) | read |
| S5-R6 | light / dark toggle: state + data-theme on html | [App.jsx#L32-L36](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.jsx#L32-L36), [App.css#L149-L176](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/frontend/src/App.css#L149-L176) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/README.md), [ai-log/etapa-05.md](https://github.com/Dima-Cristina/PetalDesk/blob/<commit>/ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [commit](https://github.com/Dima-Cristina/PetalDesk/commit/<commit>) | commit history |

## Stage 6 verification

| ID | Requirement | Where | How to check |
| -- | ----------- | ----- | ------------ |
| S6-R1 | npm run api starts, routeshows JSON | [frontend/package.json](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/package.json#L11), [frontend/db.json](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/db.json#L1-L28) | Run `npm run api`, open `localhost:3001/comenzi` |
| S6-R2 | data no longer in React code | [frontend/src/App.jsx](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/App.jsx#L19-L22) | Read `useState([])` |
| S6-R3 | Loading message appears while waiting | [frontend/src/App.jsx](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/App.jsx#L121-L124) | Start the API with `--delay 4000` |
| S6-R4 | Error message appears when the API is down | [frontend/src/App.jsx](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/App.jsx#L126-L130) | Stop `npm run api`, refresh |
| S6-R5 | Fetch is isolated in `api.js` and URL uses the environment variable | [frontend/src/api.js](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/api.js#L2-L16), [frontend/env.example](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/env.example#L2) | Search for `fetch` and inspect the environment variable |
| S6-R6 | Stage 6 README section and AI log exist | [README.md](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/README.md?plain=1#L60-L61), [ai-log/etapa-06.md](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/ai-log/etapa-06.md) | Read |
| S6-R7 | Stage 6 commit is pushed | GitHub commit history | 3235b2587bdce457524d27001862ede51bf8d203 |

## Stage 7 verification

| ID | Requirement | Where | How to check |
| -- | ----------- | ----- | ------------ |
| S7-R1 | Controlled fields for the order name and flower type | [ComandaForm.jsx#L8-L92](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/components/ComandaForm.jsx#L8-L92) | Read |
| S7-R2 | Empty name shows an error and nothing is sent | [ComandaForm.jsx#L16-L44](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/components/ComandaForm.jsx#L16-L44) | Submit empty, watch Network |
| S7-R3 | Added order appears and survives refresh | [App.jsx#L53-L57](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/App.jsx#L53-L57), [api.js#L19-L24](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/api.js#L19-L24) | Add an order, refresh |
| S7-R4 | Delivery and deletion changes survive refresh | [App.jsx#L59-L84](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/App.jsx#L59-L84), [api.js#L26-L35](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/api.js#L26-L35) | Toggle or delete, refresh |
| S7-R5 | Submit is disabled while saving; fields clear only after success | [ComandaForm.jsx#L25-L47](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/components/ComandaForm.jsx#L25-L47), [ComandaForm.jsx#L91-L93](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/components/ComandaForm.jsx#L91-L93) | Delay or stop the API |
| S7-R6 | `tw.json` and required `data-testid` attributes are present | [tw.json#L1-L7](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/tw.json#L1-L7), [ComandaCard.jsx#L9-L34](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/frontend/src/components/ComandaCard.jsx#L9-L34) | Inspect elements in the browser |
| S7-R7 | Stage documentation and AI log are included | [README.md#L63-L66](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/README.md?plain=1#L63-L66), [etapa-07.md#L1-L19](https://github.com/Dima-Cristina/PetalDesk/blob/3235b2587bdce457524d27001862ede51bf8d203/ai-log/etapa-07.md?plain=1#L1-L19) | Read the files |
| S7-R8 | Stage 7 changes are committed and published | [3235b25](https://github.com/Dima-Cristina/PetalDesk/commit/3235b2587bdce457524d27001862ede51bf8d203) | Commit history |