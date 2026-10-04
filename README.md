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

Open `index.html` in a browser. No build step, no server.

## AI usage

| Tool   | Used for                                   |
| ------ | ------------------------------------------ |
| Claude | HTML/CSS structure, Git steps, stage 1     |

Details per stage: see the ai-log/ folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

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