#Astronomy Picture of the Day App

##Running the App
After cloning the repo to your machine, to start the app you need to run the following commands in the terminal:

- `yarn` to install all packages. You can also use `npm i`.
- `yarn start` or `npm start` to start the app locally.
- `yarn run test` or `npm run test` to run unit tests.

I've decided to keep the API_KEY inside the code base because create-react-app wasn't picking up the env variable from my .env file. Ideally this type of keys or values should be set in env variables.


##Implementation notes
There's a lot that could be done to improve this implementation, but due to time constraints I had to cut some corners.

The app has some missing features and things that need to be corrected:
- Prevent selecting future dates
- Keep picked date active on date picker for a different month other than the current
- Improve caching logic
- Maybe a back button to create some redundancy, since it's a web app
- Refactor dates logic and how they're stored
- Error states

Other considerations:
- The Home component does too much. It packs too much logic, like the date manipulation
- Not using selectors to get data from the state. Using selectors is a plus for me, but again it would increase the implementation time.
- The way I handle the dates might not be the best one. I tried to be clever to help preventing consequent requests, but I'm not sure if the current approach is the best.
- The action that handles the image request is a bit too complicated, which makes testing it harder. Redux-Sagas could help here.


##Testing
I tried to do some unit tests, including some snapshot testing in the components, but couldn't cover everything. I never used Jest, so it took me a while to get it going. You can see the snapshots can be a bit extreme, as in the Home component. The renderer returns something similar to Enzyme's mount, which makes the file huge and hard to follow. Ideally it should use Enzyme's shallow mount to do the snapshot.

###Enzyme
I'm used to use Enzyme to unit test the components, and even do integration tests, but again I tried to keep the setup to a minimum.

###Jest
As you can see in the tests, I decided to use Sinon and Sinon-Test because I'm more familiar with it, so it would help me go quicker. I know Jest offers pretty much everything out of the box, but my daily testing stack has been Mocha, Chai and Sinon.

###Integration and browser tests
Unfortunatly I didn't have time to include integration or browser tests. Its setup takes too much time for a test that's supposed to take only a couple of hours (I've certainly gone over that).

Having the time I would do some integration tests using Mocha with jsdom, mounting the full app with Enzyme and creating specific scenarios to assert, like user clicks.

I've used NightwatchJS to do browser tests, but haven't tried it with a headless browser. That could also help as an alternative to integration tests.