# Lighter

A lightweight frontend for light rail time of arrivals.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## For Maintainers

The `Map` component is intended to be lightweight and does not replace other wrapper libraries such as `react-leaflet`. Please keep it simple.

The API response may trigger CORS errors sometimes. It helps to refresh the page and usually the error will disappear. Please debug in Safari.

We keep `Twemoji` component using a `<script>`-defined variable because it lacks sufficient documentation. Please handle it carefully.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
