# Continuous Integration

The concept of integration software is not a new concept but the practices and the tools used have changed.
[Martin Fowler](https://martinfowler.com/) is a well known software developer and has said this about Continuous Integration.

> a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily -- leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible.

Core Tenets for Continuous Integration
* Developers need to run private builds on their own machines before committing their code to a version control repository (i.e. github, gitlab, bitbucket)
* Developers commit their code at least once a day.
* Integration builds occur several times a day on a separate build machine
* All tests must pass for every build.
* A binary/executable is generated on each build that can be functionally tested.
* Fixing broken builds must be a priority
* Developers/Team Leads need to review reports like Code Coverage Reports that are generated from the build
