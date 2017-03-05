# Reducing Risks

## Scenarios to Combat

### But it works on my machine

* Each developer machine should mirror as closely as possible the integration as possible
* Everything needed to build software needs to be committed to version control.
* Developers should not have build scripts that only exist on their machines

### Syncing with the database

* Database artifacts should be in version control
* Database creation scripts, data manipulation scripts, stored procedures, database triggers etc.
    * Of course this is if you have a relational database
    * But if you have a NoSql database and a Restful API design then make sure to document endpoints
* Developers might need database specific code
    * We will visit such tests when we got to the hands on portion of the workshop

### Missing Deployment Automation

* Deployments should be automated by using a deployment tool.
* Depending on your software architectures the deployment tools used can vary.
    * Octopus Deploy
    * AWS Elastic Beanstalk
    * Heroku
    * Google App Engine
    * Dokku
* Deployment tools is deserving of another workshop alone

### Late Discovery of Defects

* Test code should be written for all of your source code
* Tests should be run on your build script
* Tests should be continuously run on your CI system

### Test Coverage not known

* Use a code coverage tool to see how much your tests are actually covering your source code.
* We will look at this in more detail on the hands on portion of the workshop.

### Lack of Project Visibility

* CI system should be configured to send alerts in multipe ways
