# IPL-social-2026

### Author :

Last Name : Miendji Tchuini
First Name : Christian
Vinci Email : christian.miendji@student.vinci.be

### GitHub Project URL :

https://github.com/christian-miendji-vinci/IPL-social-2026

### Explanation :

This file defines a GitHub Actions CI pipeline for my IPL Social 2026 project.
It is automatically triggered on every push or pull request to the main branch.

The job runs on an Ubuntu virtual machine, checks out the source code using actions/checkout, installs Node.js 20, installs all project dependencies using npm install, and then runs the tests with npm test.

The goal is to automatically verify that the code works correctly and that all tests pass before allowing a merge into the main branch, ensuring the quality and stability of the project.

### To run the tests locally:
npm test

### Before that, install the dependencies:
npm install

### CI Pipeline (GitHub Actions):
The project includes a CI pipeline located at:
.github/workflows/ci.yml




### Initialize TypeScript configuration using:
npx tsc --init

in order to generate the tsconfig.json file.

Install Express server and the required dependencies to enable TypeScript support.

Improve and clean up the package.json file.

### Project Description 
Project Description
This project is part of the DevOps course at Haute École Léonard de Vinci.
The goal is to implement an email validation function in TypeScript, following a Test-Driven Development (TDD) approach and integrating a GitHub Actions CI pipeline.

The validator checks:

that the string contains exactly one @

that there is text before and after the @

that the domain contains at least one dot .

that the dot is not the last character

that the email contains no spaces

and all logic is implemented manually, without using built‑in string helpers
