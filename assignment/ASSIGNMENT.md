## Assignment

The purpose of this is to get a small sample of some of your work, and have something
concrete to discuss next time we see you.

We respect and appreciate your time: please do not spend more than a couple hours on
this. Feel free to turn in what you have at the end of that time, and provide a brief explanation of
what you would do next, given more time.

## Task

#### Part 1: Create News Item Layout

Your task is to complete the hacker news feed. The project has been set up and a service to fetch a
Hacker News feed has been created. The feed cards are currently just spitting out stringified JSON
and need to be correctly formatted.

The design for each news item should be as below, try to match the design as closely as possible.

<img src="card-mock.png">

#### Part 2: Implement search

At the top of the news feed there is a search field. Implement search that narrows the list as you
type.

Your search should check the "title", "url", and "user" fields

Write a unit test to verify that the search works correctly

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically
reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/`
directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
