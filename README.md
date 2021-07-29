# Chromapoll 🟥🟩🟦

Chromapoll is a fun polling platform where you can assign a color to each choice.

As the votes come in, watch the colors mix together based on the number of votes for each choice.

Chromapoll employs basic protection with IP logging to prevent cheating.

## How to run

Make sure you have `yarn` installed and a MongoDB database ready for action.

First, use `yarn install` to install dependencies.

Then, set your env variables as listed in the Configuration section of this readme.

Now you can use `yarn start:full` to quickly build and run a production build.

Other commands:

* `yarn build:server` to compile the server from TypeScript.
* `yarn build:ui` to build the frontend with Webpack.
* `yarn start:server` to run the production server after building.
* `yarn start:ui` to run the production frontend after building.
* `yarn dev:server` for a development build that automatically reloads when you make a change.
* `yarn dev:ui` for a development build of the frontend.
* `yarn test:server` for some very rudimentary testing of the server API.

Builds are placed in the `/dist` directory, with `/dist/server` for the backend and `/dist/frontend` for the frontend.

## Configuration

Chromapoll looks for two env variables.

* PORT: the port on which the server will accept connections
* DB_URL: the URL to your MongoDB database

## Portfolio Reflection

Compared to my previous projects, I used relatively few new technologies. However, this is the first project I've made using MongoDB in many months, after using PostgreSQL for a while. I decided to try a new ORM--I used Sequelize for Groupread and it was a pain point for backend work. So this time around I tried out MikroORM and I've found it to be powerful and easy to use.

On the frontend, this was my first time using styled-components, and I also immediately found it pleasant to work with. One architectural mistake with Groupread that I only recognized late in development was that it used a single sass file (along with importing the Bulma CSS file). It wasn't a big deal at the very beginning, but as the project grew it became bothersome to move between the sass file and the component code. I am still figuring out the best practices for styled-components so there might be some less-than-ideal component code, but it's already a much more efficient way to handle styling for each component.

This is the first project in which I've made an effort from the beginning to make re-usable components whenever possible. Some of my older projects have a few of them, but none of them started off with reusability as a priority and I started with them more recently. I keep these components in `/frontend/src/components/common`, but as with styled-components I am still learning the best way to write them. I'm particularly satisfied' with the `Button` component, which includes some nice styling and accepts a label and a callback function as props.

One small thing I want to mention is the `/frontend/src/breakpoints.ts` file, which contains CSS breakpoints for the whole site. Any time I use a breakpoint in a styled component, I import the breakpoint object and use a ${string template} to specify which one (e.g. `breakpoints.phone`). I came up with this for two reasons: 1) I can update the breakpoints in one place if I change my mind about what they're set at, and 2) I don't have to remember the specific pixel amount every time I write a media query. There are only two breakpoints right now, but I can expand it in the future whenever I need to and it'll keep track of all my breakpoints for me.