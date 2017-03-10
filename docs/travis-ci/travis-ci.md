# Travis CI

* Run the command `touch .travis.yml` in the terminal

## Sample Travis yml script

```yml
language: node_js
node_js:
  - 6
sudo: required
env:
  - NODE_ENV=test
addons:
  rethinkdb: '2.3.5'
before_script:
  - npm run start:rethinkdb
after_success:
  - npm run coveralls
```

## Integrate Travis CI with Github

* Click settings on your repo
* Click Integrations & Services
* Add a Service
* Type in Travis
* Click Add Service
* Now Travis CI is configured as webhook when you push onto master

## Visit Travis CI

* [Travis CI](https://travis-ci.org/)
* Setup a Travis CI account
* Enable your Public Github Repos
    * Authorize Github Access for Travis CI
    * Click on your profile on the top right of page
    * Toggle each repo that you want to have Travis CI enabled

## YML configuration

Travis CI uses yml configuration which we will discuss in detail
