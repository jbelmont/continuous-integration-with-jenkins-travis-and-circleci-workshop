# CI for Database Integration

* Automate Database Integration
* Use a Local Database Sandbox
* Use a version control repository to share database assets
* Give Developers capability to modify the database
* Make DBA part of the development team

## Automate Database Integration

Repeatable Database Integration Activities:

* Drop Database
* Create Database
* Insert System Data
* Insert Test Data
* Migrate Database and data
* Setup database instances in multiple environments
* Modify column attributes
    * this would be done for a relational database
* Modify test data
* Modify stored procedures and triggers and functions
    * this is done for relational databases like SQL Server, Oracle, MySQL, PostgresSQL, etc
* Obtain access to different environments
* Backup restore large data sets

#### Creating your database

An example of set of functions that connect to RethinkDB insert test data if necessary and retrieve data

```javascript
function dbActions() {
  return connectToRethinkDBServer()
    .then((connection) => {
      DB.connection = connection;
      return doesRethinkTableExist()
        .then(exists => exists);
    })
    .then((databaseExists) => {
      if (!databaseExists) {
        return createUsers(databaseExists)
          .then(() => createTable())
          .then(() => insertData());
      }
    })
    .then(() => checkIfTableExists()
        .then((value) => {
          if (value > 0) {
            return getUsers()
              .then(values => values);
          }
          insertData()
              .then(() => getUsers()
                  .then(values => values));
        }));
}
```

#### Manipulating your database

You can use tools/scripts to seed data into your database and to delete the database

## Use a Local Database Sandbox

* Developers can then create a database "sandbox" to make and test database changes without affection others
* With this step it is easier for developers to recreate a database and run tests on their machines

## Use a version control repository to share database assets

Database Assets:

* DDL (Data Definition Language) to drop and create tables and view including constraints and triggers
* Stored Procedures and Functions
    * Provided this is a relational database
    * Otherwise a set of functions or API endpoints that can manipulate data
        * `POST /api/v1/insertData` is an example endpoint to insert data
* Entity relationship diagrams
* Test data for different environments
* Specific database configurations

## Continuous Database Integration

**Automating your database integration and incorporating into build scripts helps keep other developers in sync**

## Give Developers the capability to modify the database

This empowers developers provided they have the expertise to do so to avoid the DBA being the bottleneck
**Word of caution with this added power comes responsibility as well on the developers side**

## Make the DBA a part of the development team

* The DBA should be able to run the same automated build including a database rebuild that developer can do
* Make the DBA a part of the team
    * This can help integrate teams instead of create silos
    * Code goes over the wire so the speak

## Database integration and integration

* Test your database
    * Relational Databases can be tested (PL/SQL, SQLUNIT) etc
* Inspect your database

## Deployment

The goal of Continuous Database Integration is to treat your database source code and other source code the same.
Deployment processes will deploy your database to your development and test database instances.

## Feedback and Documentation

* Your CI server should be communicating build status like build failure and emailing the necessary individuals.
* Documentation is important and can be part of the build status
