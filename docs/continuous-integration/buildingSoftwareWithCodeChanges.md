# Building Software With Code Changes

* Automate Builds
* Perform Single Command Builds
* Separate Builds scripts from your IDE
* Centralize Software Assets
* Create a consistent directory structure
* Builds fail fast
* Build for any environment
* Use a dedicated integration build machine
* Use a CI server
* Run Fast Builds
* Stage Builds

## Automate Builds

What is a Software Build?

A build can consist of just compiling software components.
A build can consist of compiling and running automated tests.
The more processes you add to the build the slower the feedback loop

#### Scripting Tool

* Use a scripting tool designed specifically for building software,
    * Instead of a custom set of shell scripts or batch scripts
    * A scripting tool is the most effective maner for developing a consistent, repeatable build solution

## Perform Single Command Builds

Quote by Martin Fowler
> Get everything you need into source control and get it so that you can build the whole system with a single command.

[Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)

#### Steps for building your software in a nutshell

1. Create your build using a scripting tool NAnt, Rake, Maven, Gulp.js
    1. Start with a simple process.
2. Add each process to integrate your software within the build script.
3. Run your script from the command line or an IDE.

**An example using Gulp.js of a build task with the build sass task**

```javascript
gulp.task('build:sass', () => gulp.src(sassPaths[0])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(concat('advanced-tech.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'))
    .pipe(livereload()));

gulp.task('build', (cb) => {
  runSequence('copy:react:files', 'uglify:js', 'build:js', 'build:sass', 'build:vendor:sass', cb);
});
```

## Separate Build Scripts from Your IDE

Avoid coupling your build scripts with an IDE. A build script shouldn't be dependent on your IDE

This is important for 2 reasons:

1. Each developer may be using a different IDE/Editor and may have different configurations.
2. A CI server must execute an automated build without human intervention.

## Centralize Software Assets

* Components such as source files or library files
* Third part components, dlls, jar files, etc
* Configuration files
* Data files to initialize the application
* Build Scripts and build environment settings
* Installation scripts for some components

**You must decide what all should go into version control**

## Create a Consistent Directory Structure

You must choose a consistent directory structure for your software assets.
It helps perform scripted retrievals from a CI server.

Here is a sample folder structure that I typically do for my React/Redux Application.

* ca (Certificate Authority)
* config (configuration files)
* db (database related stuff)
* docs (documentation)
* images
* models (data files)
* test (All my test files)
    * unit
    * integration
    * e2e
    * helpers
* static
    * build
    * js
        * actions
        * components
        * constants
        * data
        * reducers
        * store
        * utils
    * scss
* utils (utility files)

## Fail Builds Fast

1. Integrate Components
2. Run true unit tests
    1. Quick unit tests don't rely on a database or any other dependency they test in isolation
3. Run other automated processes (rebuild database, inspect, and deploy)

**It is up to you for any other steps**

## Build for any Environment

You can use configuration files and environment variables to build for any environment dev/prod/test

* Logging verbosity
* Application server configuration
* Database connection information
* Framework configuration

```sh
DATABASE_NAME=advancedtech
TABLE_NAME=users
DB_PORT=28015
DB_HOST=localhost
NODE_ENV=development
```

```javascript
// Load Environment variables
require('dotenv').config();
const webpackConfig = process.env.NODE_ENV === 'development'
```

## Build Types and Mechanisms

#### Build Types

1. The Individual
2. The Team
3. Users

#### Private Build

**Developers run private build prior to committing code to the repository.**

1. Check out the code you will alter from the repository
    1. Go into the version controlled folder or `git clone somerepo` in this step.
2. Make changes to the code.
    1. Edit myFile.js
3. Get the latest system changes from the repository.
    1. `git pull`
4. Run a build that includes execution of all your unit tests.
5. Commit your code changes to the repository.

### Use a dedicated Integration Build Machine

Having a dedicated machine for integration build will help reduce assumptions about environment and config.
Prevents the proverbial "but it works on my machine" problem

## Use a CI server

* Poll for changes in version control on a specified time interval
    * Github also has web hooks that you can set for Jenkins and Travis CI which will discuss in a bit
* Perform certain actions on a scheduled bases, hourly or daily
* Identify a "quiet period" during which no integration build are performed for the project
* Support for different build scripting tools such as Rake, Make, NPM, Ant, etc
* Send Emails to the concerned parties
* Display a history of previous builds
* Display a dashboard that is web accessible so that everyone can review integration build information
    * Jenkins has a dashboard as well as Travis CI
* Support multiple version control systems for your different projects
    * svn
    * git
    * mercurial

### Manual Integration Builds

* Run a integration build manually using an automated build as an approach to reduce integration build errors

### Run Fast Builds

* Get builds down to 10 minutes or so by increasing computing resources
* offload slower tests
* offload inspections
    * code coverage
    * static analysis
* Run staged builds
    * Run First Build that compiles and runs unit tests
    * Secondary Build runs integration and end to end tests
    * Performance builds shouldn't be run on the first build
