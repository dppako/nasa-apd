# Cornerstone web tech test

## Overview

Create a React app that utilises the NASA Open API for browsing the Astronomy Picture of the Day

## Criteria

- App should use [create-react-app][RCA] for the project base and [react-router-dom][RRD] for routing

- App should be able to run on the latest version of [Node.js][NODE] with only the following commands

    ```sh
    npm install
    npm start
    ```

- Homepage should show Astronomy Picture of the Day for current day

- Navigating to `/YYYY-MM-DD` should show Astronomy Picture of the Day for YYYY-MM-DD

- Homepage should have a date picker for easily navigating to `/YYYY-MM-DD`

- App should make use of the latest JavaScript features such as;
    - `import` + `export` in place of `require()` + `module.exports`
    - arrow functions where they reduce the complexity of the code or lexical scope
    - `rest` and `spread` properties
    - object destructuring
    - anything else you find nifty

--------------------------------------------------------------------------------

## NASA Open API

Once you have your [API key][API_KEY] you should be able to access the data required using the following endpoint

**HTTP Request**

GET https://api.nasa.gov/planetary/apod

**Query Parameters**

| Parameter | Type       | Default  | Description                                    |
|-----------|------------|----------|------------------------------------------------|
| date      | YYYY-MM-DD | today    | The date of the APOD image to retrieve         |
| hd        | bool       | False    | Retrieve the URL for the high resolution image |
| api_key   | string     | DEMO_KEY | api.nasa.gov key for expanded usage            |

**Example Query**

GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

--------------------------------------------------------------------------------

## Bonus Task

- Use [React component state][REACT_STATE] or [Redux][REDUX] to store/cache data fetched from the API to avoid hitting the server again for repeat requests

or

- Style the app using [glamor][GLAMOR] or [glamorous][GLAMOROUS]


[RCA]: https://github.com/facebookincubator/create-react-app
[RRD]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
[NODE]: https://nodejs.org/en/
[API_KEY]: https://api.nasa.gov/index.html#apply-for-an-api-key
[REACT_STATE]: https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly
[REDUX]: https://github.com/reactjs/redux
[GLAMOR]: https://github.com/threepointone/glamor
[GLAMOROUS]: https://github.com/paypal/glamorous
