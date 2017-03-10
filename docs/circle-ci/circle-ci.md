# Circle CI

[Circle CI](https://circleci.com/)
* Click Sign Up For Free
* Authorize Github access for Circle CI
* Toggle each repo that you want Circle CI to have access to

## Setup Circle CI yml for version 2

* Run `mkdir .circleci`
* Run `touch .circleci/config.yml`
* These instructions are to setup circle ci version 2

* Run `touch circle.yml` for version 1

## Sample config.yml

```yml
version: 2
jobs:
  build:
    docker:
      - image: node:7.6.0
    working_directory: ~/code-craftsmanship-organization/continuous-integration-with-jenkins-travis-and-circleci
    steps:
      - checkout
      - run:
          name: Pre-Dependencies
          command: mkdir -p ~/code-craftsmanship-organization/continuous-integration-with-jenkins-travis-and-circleci/artifacts
      - run:
          name: Install RethinkDB
          command: |
            apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 68576280 86E50310
            echo "deb http://download.rethinkdb.com/apt jessie main" | tee /etc/apt/sources.list.d/rethinkdb.list
            wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | apt-key add -
            apt-get -y update -qq
            apt-get -y install rethinkdb
      - run:
          name: Install Dependencies
          command: npm install
      - run:
          name: NPM Test
          command: npm test
      - run:
          name: Build Directory
          command: npm run build
      - run:
          name: Start RethinkDB
          command: rethinkdb --bind all --http-port 9090
          background: true
      - run:
          name: Run End To End Tests
          command: npm run e2e
      - store_artifacts:
          path: ~/code-craftsmanship-organization/continuous-integration-with-jenkins-travis-and-circleci/artifacts
      - add_ssh_keys
```

## Integrate Circle CI with Github

* Click settings on your repo
* Click Integrations & Services
* Add a Service
* Type in Circle
* Click Add Service
* Now Circle CI is configured as webhook when you push onto master
