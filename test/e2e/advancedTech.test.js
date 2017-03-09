'use strict';

module.exports = {
  'advancedTech Page Loading': browser => {
    browser
      .url('https://localhost:3000')
        .waitForElementVisible('.advanced-tech-container-label', 3000)
        .assert.containsText('.advanced-tech-container-label > strong', 'Advanced Tech in Wilmington Users')
        .end();
  }
};
