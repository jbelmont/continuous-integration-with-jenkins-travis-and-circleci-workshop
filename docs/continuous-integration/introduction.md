# Introduction to Continuous Integration

1. Commit Code Frequently
2. Don't Commit Broken Code
3. Fix Broken Builds Immediately
4. Write automated developer tests
5. All Tests and inspections must pass the build.
6. Developers run private builds on their machines.
7. Avoid if possible getting broken code.

## The value of CI

* Reduce Risks
    * The health of your software becomes measurable
    * Reduce developer assumptions
        1. Don't Rely on Environment variables.
        2. Don't rely on certain configuration files set on your machine.
        3. The build is built cleanly and independently from each developer's machine.
        4. It avoid the classic phrase but it works on my machine.
* Reduce repetitive manual processes
    1. The process runs the same way every time
    2. An ordered process is followed.
        1. Compile Step
        2. Testing
        3. Reports Generated
    3. The process runs every time a commit is pushed to the version control system.
    **Frees developers to work on higher value work and reduces possible mistakes**
* Generate deployable software anytime and anywhere
* Enable better project visibility
* Establish confidence in your software with the development team

## What prevents teams from using CI?
* Misguided belief that there is too much overheard to setting a CI process
    * Either your manual processses will control you or you can manage your CI process
    * Either way you going to have to do these things anyways

## How to get something into CI.
* Identify a particular process that can benefit from automation.
* Write a build script that makes the process both repeatable and consistent
* Share you process by committing it into your version control system
* Make it continuous by adding it to the CI server

## CI complements other development practices

* Developer Testing
    * Testing framework or libraries can be added to the CI server
    * Enforcing coding standards
        * The CI server can be configured to enforce coding standards
    * Refactoring can be less problematic since the CI server can report issues once code is committed.
    * Increase Software Ownership since developers can see if coding standards are being followed by generated reports from the build.

## Commit Code Frequently

* Make small changes
    * Don't try to introduce tons of changes all at once
        * When making pull request keep them small and focused
    * Commit after each task
        * Don't have huge branches but instead focused feature branches that are not long lived

## Don't Commit Broken Code

* Encourage developers to run a private build before committing any code to the repository
    * The build script should run all the tests and make sure nothing is broken before code is pushed.
    * The private build should mirror if possible what exists in the integration build to ensure nothing broken gets introduced to CI server.

## Fix Broken Builds Immediately

* Don't leave the CI server broken as this can hinder other developers from working.
* Builds must be fixed as soon as possible.

## Write Automated Developer Tests

* Builds should be fully automated
* Choose testing frameworks or libraries that provide capability of running tests in an automated fashion
* We will show this in action with jenkins and travis ci.

## All Tests and Inspections must pass

* In a CI environment all the tests must pass
* All the inspections must pass as well
    * Linting
    * Static Analysis
    * Code Coverage Metrics
        * 75% Branching
        * 70% Function Coverage
        * 70% Line Coverage
        * 70% Condition Coverage

## Run Private Builds

* Developers need to emulate integration builds on their development environments
* Grab the latest code from version control
* Run all the tests and inspections on their machines
* Everything should pass before pushing commits to version control

## Avoid Getting Broken Code

* Developers should monitor the version control system and avoid if possible pulling down any broken code.
* Meanwhile whoever introduced the build failures should be alerted as soon as possible about the breaking changes and be working on fixing the build issues.
