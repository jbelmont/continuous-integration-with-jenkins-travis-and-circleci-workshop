'use strict';

module.exports = {
  'advancedTech Page Loading': browser => {
    browser
      .url('http://localhost:3000')
        .waitForElementVisible('.advanced-tech-container-label', 1000)
        .assert.containsText('.advanced-tech-container-label > strong', 'Advanced Tech in Wilmington Users')

    browser
      .click('.users-container .users-container-trash-bin')
      .assert.elementNotPresent('[data-email="tcox0@dion.ne.jp"]')

    browser
      .click('#addSomeUserBtn')

    setInput('#emailInput', 'chuck@badass.net')
    setInput('#firstNameInput', 'Chuck')
    setInput('#lastNameInput', 'Norris')

    browser
      .click('#addUserBtn')
      .waitForElementVisible('[data-email="chuck@badass.net"]', 1000)
      .end();

    function setInput(input, value) {
      browser.setValue(input, value);
    }
  }
};
