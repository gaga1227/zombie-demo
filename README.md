# Zombie Demo

This is an exercise web app project to simulate a zombie infection. It is generated with [Angular CLI](https://github.com/angular/angular-cli).

## Preview
Here is a <a href="http://gaga-graphics.com/zombie-demo/dist/zombie-demo/" target="blank">preview page</a> of the zombie demo.

## Features
* App input instructions data stored at `assets/instructions.json`
* App displays input instructions on the left card
* App displays output results on the right card
* All source code is linted without warning or errors
* Source code can be tested by running unit tests via `ng test`
* Production ready release code can be found under `dist/zombie-demo`

## Steps to view results
1. Install Angular CLI
2. Install NPM modules
3. Run `ng serve` to bring up the local dev server
4. View default example results, or change instructions data JSON for different results.
5. Or, you can host `dist/zombie-demo` on a web server to view production release code.

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --watch=false --code-coverage` to generate a coverage report. 

