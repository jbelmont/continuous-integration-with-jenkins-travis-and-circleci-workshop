# Travis CI

* Run the command `touch .travis.yml` in the terminal

## Sample Travis yml script

```yml
dist: trusty
sudo: required
language: node_js
node_js:
  - 6
env:
  - NODE_ENV=test
addons:
  rethinkdb: '2.3.5'
  sources:
    - google-chrome
  apt:
    packages:
      - oracle-java8-installer
      - oracle-java8-set-default
      - google-chrome-stable
before_script:
  - export CHROME_BIN=chromium-browser
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start"
  - sleep 3
after_success:
  - npm run coveralls
  - npm run build && npm run e2e
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
