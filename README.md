## Intro
This app shows 10 random countries and their mutual neighbors

Following apis are used to fetch countries and their details
- https://travelbriefing.org/countries.json
- https://travelbriefing.org/country-name?format=json

## Mutual Neighbor's algorithm overview
The algorithm works as follows:

- Iterate over the randomly picked, unique countries
- For each country, iterate over its neighbors
- Generate a unique key for the country + neighbor pair (using their names)
- Maintain this pair key in a set
- If we see this key again in the set, we flag pair as mutual neighbor

## Install NVM
Visit following link to install nvm
- https://github.com/nvm-sh/nvm#installing-and-updating

## Node version
version `v16.0`
## Install dependencies

In the project directory, you can run:

`npm install`

## Start app

In the project directory, run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
