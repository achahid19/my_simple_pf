# My Simple Portfolio

Welcome to my personal portfolio website! This project showcases my skills and the projects I've worked on. What makes this portfolio unique is that it's built from the ground up **without using React**. Instead, it's powered by **Jarvis**, a custom React-like library I created to understand the core mechanics of modern web frameworks.

![42 School](https://img.shields.io/badge/42%20School-Paris-blue?style=for-the-badge&logo=42-school)
![1337](https://img.shields.io/badge/1337-42%20School-green?style=for-the-badge&logo=1337)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0-blue?style=for-the-badge&logo=typescript)
![JSX](https://img.shields.io/badge/JSX-React-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-17.0.2-blue?style=for-the-badge&logo=react)
![NPM](https://img.shields.io/badge/NPM-6.14.8-red?style=for-the-badge&logo=npm)
![Webpack](https://img.shields.io/badge/Webpack-5.64.4-blue?style=for-the-badge&logo=webpack)
![Babel](https://img.shields.io/badge/Babel-7.14.5-orange?style=for-the-badge&logo=babel)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-2.0.0-lightgrey?style=for-the-badge&logo=github)
![Node.js](https://img.shields.io/badge/Node.js-14.17.0-green?style=for-the-badge&logo=node.js)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![Git](https://img.shields.io/badge/Git-2.30.1-orange?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-2.30.1-lightgrey?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Table of Contents
- [Live Demo](#live-demo)
- [Technology and Architecture](#technology-and-architecture)
- [Project Scripts](#project-scripts)
- [Deployment Workflow](#deployment-workflow)
- [Author](#author)

## Live Demo

You can view the live version of the site here: **[https://achahid19.github.io/my_simple_pf/](https://achahid19.github.io/my_simple_pf/)**

***

## Technology and Architecture

This project was built with a carefully chosen set of tools to create an efficient, modern, and maintainable application. The architecture is centered around my custom library, demonstrating a deep understanding of frontend principles.

* **Jarvis (Custom React-like Library)**: The heart of this application. Jarvis is a small, custom-built library that mimics the fundamental features of React, including:
    * **JSX Support**: Allows writing HTML-like syntax directly in the code.
    * **Virtual DOM**: Creates a lightweight copy of the DOM to efficiently calculate and apply updates, ensuring high performance.
    * **`useState` Hook**: Manages component state in a functional way, just like in React.

>> link to my Custom-Library: https://github.com/achahid19/jarvisLib

* **TypeScript**: A superset of JavaScript that adds static typing. By defining the "shape" of data and components, TypeScript helps catch bugs before they ever happen, making the code more reliable and easier to refactor.

* **Webpack & Babel**: This pair acts as the project's engine room. **Webpack** is a powerful module bundler that takes all our TypeScript (`.tsx`) files and assets, and bundles them into a single, optimized JavaScript file (`bundle.js`) for the browser. **Babel** works alongside it as a compiler, transforming the JSX and modern JavaScript syntax into code that can run in any browser.

* **NPM (Node Package Manager)**: We use NPM to manage all the project's development dependencies and to run the scripts that build and deploy the site.

* **gh-pages**: This simple but powerful tool enables effortless, automated deployment directly to GitHub Pages with a single command.

***

## Project Scripts

The project's workflow is managed by a set of simple yet powerful NPM scripts, streamlining the entire development and deployment lifecycle.

* **`npm run serve`**:
    This command starts the Webpack development server. It provides a live-reloading environment, meaning the browser will automatically refresh with your changes as you save them, creating a fast and seamless development experience.

* **`npm run build`**:
    This command creates a production-ready version of the application. It runs Webpack to bundle and optimize all the code, outputting the final static files into the `public` folder, ready for deployment.

* **`npm run deploy`**:
    This is the one-command deployment script. It automates the entire process by first running the `build` script to generate the final files, and then using `gh-pages` to push those files to the `gh-pages` branch on GitHub, making the site live.

***

## Deployment Workflow

This project is configured for a simple and highly efficient deployment process to **GitHub Pages**.

The entire workflow is handled by the `npm run deploy` command. After an initial one-time setup of the `"homepage"` field in `package.json` and configuring the repository settings on GitHub, deploying any future updates is as simple as running that single command. This automated process eliminates manual steps and ensures consistent, error-free deployments.

## Author
**© Anas Chahid ksabi **@KsDev**** - [achahid19](https://github.com/achahid19)
