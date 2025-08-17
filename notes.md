* Notes on Webpack (bundling tool) - ts / tsx step up dev env and prod one.
* 1. How to use webpack to compile typescirpt into javascript
* 2. how to bundle source code into a single javascript file
* 3. how to use a webpack dev server

* first thing, lets install typescript globaly -> tsc npm install -g typescript
- init a ts config file: > tsc --init
* then we need a package.json file to keep track of all the dependencies we have into our project.
- > npm init
* now install webpack
- > npm install webpack webpack-cli ts-loader -D
- (-D): save into the dev dependencies
- webpack will compile and bundle all our code together. webpack-cli to run webpack command's line
- ts-loader: to teach webpack how to compile ts code into js, so wihtout it he would not know ho to do so.
- all the dependencies intalled will live inside the node_modules/ folder, we dont need to edit anything there.
- we must also install typescript locally for our project in devDependecy, even if we have globaly.

* Folder structure for our project
- src: all our source code goes here.
- public (can be called dist...): final files (js / css... ) ready for deployment. Files uploaded to our web-server to host the website.

* need webpack config file to compile and bundle files into the public folder, and then later the index can link to the bundle.js (or whatever the name .js) file.
- webpack.config.js
- tell webpack to use the ts-loader to compile our ts files into js.

* enable dev env for webpack to see change on the fly, so webpack would automatically trigger the process of compiling and bundling again all the code to see it directly and live on the browser... 
- install the dev server as a dependency too: npm install webpback-dev-server -D

Resources:
- https://www.youtube.com/watch?v=sOUhEJeJ-kI&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=1
