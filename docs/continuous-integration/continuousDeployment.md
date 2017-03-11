# Continuous Deployment

* [Release Working Software at Anytime](#release-working-software-at-anytime)
* [Run all tests](#run-all-tests)
* [Label a Repository's Assets](#label-a-repository\'s-assets)
* [Create Build Feedback Reports](#create-build-feedback-reports)
* [Produce a clean environment](#produce-a-clean-environment)
* [Possess Capability to Roll Back Release](#possess-capability-to-roll-back-release)
* [Label Each Build](#label-each-build)

## Release Working Software at Anytime

* Run a fully automated build including compilation, all tests, inspections, packaging and deployment
    * This gives you the capability to release working software at any time and in a know n environment

## Run all tests

* Run all tests for your software
* Includes Unit, Integration, System, Functional, Performance, Load, Smoke and any others
* Running all the tests ensure your software is ready to be delivered

## Label a Repository's Assets

* Label the files for your project in version control
* This can be performed after a project mileston
    * For example in Git you can tag every release

## Create Build Feedback Reports

* List the changes that were made in recent builds.
* This can be useful for other teams in the delivery process, such as QA.

## Produce a clean environment

* Remove all files, configuration changes, servers from your integration build machine
    * This ensures you can rebuild back to a state where your integration build is successful
* The more scripted your build process is the better overall

## Possess capability to roll back release

* Things go wrong during software development
* Use build labels to roll back any changes to get your software back to working state

## Label Each Build

* Label the binary artifacts of a build distribution in version control
