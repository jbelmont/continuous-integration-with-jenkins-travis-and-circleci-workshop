# Getting Started

Build Software at every change

## What is a build anyway?
* A build is more than a compilation step.
    * A build can consist of a compilation step, testing, code inspection and deployment.
    * A build acts as a kind of verification step that checks that your software works as a cohesive unit.

## CI Process Steps in a nutshell
1. Developer commits code to a version control repository like Github.
    1. The CI server is either polling the repository for changes or has a webhook on the version control system
2. Once the CI server has detected changes have occurred in the VCP (Version Control Repository)
    1. The CI server will grab the latest code from the VCP and execute some kind of build script to integrate the software.
3. The CI server will generate feedback by emailing build results to specified project members
4. The CI server will either continue polling for changes in the VCP initiate action from a push notification sent from the VCP that has a configured webhook.
