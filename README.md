# Fresh Planner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Basic Commands:

* `ng new project-name` for a new project template
* `ng serve --open` for a dev server at http://localhost:4200/
  * `--open` launches the page in the browser
* `ng generate component component-name` to generate a new component (html, css, ts) -> presenting objects
* `ng generate service folder/service-name` to generate a new service (ts) -> delegates/injects data
* `ng generate module app-routing --flat --module=app` to generate
  * `--flat` puts the file in src/app instead of its own folder
  * `--module=app` tells the CLI to register it in the imports array of the AppModule.
* `ng generate directive|pipe|class|guard|interface|enum|module` to generate other content

## Angular Materials

* https://material.angular.io/components/categories
* `ng add @angular/material` to add the package

## Get latest angular version:

* `npm uninstall -g @angular-cli`
* `npm install -g @angular/cli@latest`

## Update all packages

* `npm i -g npm-check-updates`
* `ncu -u`
* `npm install`

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
