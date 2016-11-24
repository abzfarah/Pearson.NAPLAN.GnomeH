module.exports = {
    'VIC-NAPALAN-MANAGESCHOOLS': function (browser) {
        browser
            .url('http://localhost:8004/school/authorisedstaff')   // visit the url
            .waitForElementVisible('body'); // wait for the body to be rendered
        // check if we are seeing the Mobile Version of GitHub
        browser.element('css selector', '.switch-to-desktop', function (result) {
            if (result.status != -1) { //Element exists, do something
                browser.click('.switch-to-desktop')
                    .waitForElementVisible('body'); // wait for the body to be rendered
            }
        });
        // part two:
        browser
            .assert.containsText('h2.grommetux-heading', 'Authorised Staff')
            .assert.visible('panel table')
            .assert.visible('panel table thead')
            .assert.visible('panel table thead tr')
            .assert.visible('panel table thead th')
            .assert.visible('panel table thead th input')
            .assert.visible('panel table thead th input[type=checkbox]')
            .assert.visible('th[title="First Name"]')
            .assert.visible('th[title="Last Name"]')
            .assert.visible('th[title="Role"]')
            .assert.visible('th[title="User Name"]')
            .assert.visible('th[title="Receive Emails"]')
            .assert.visible('th[title="Test Admin"]')
            .assert.visible('th[title="Email"]')


            //-- Filter         
            .assert.visible('div .react-bs-container-body')
            .assert.visible('div .react-bs-container-body > table')
            .assert.visible('div .react-bs-container-body > table td input')
            .assert.visible('div .react-bs-container-body > table td:nth-child(1)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(2)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(3)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(4)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(5)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(6)')
            .assert.visible('div .react-bs-container-body > table td:nth-child(7)')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(3)', 'Kylie')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(4)', 'Lai')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'Teacher')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'laikyl')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'Y')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'Y')
            .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'test@testing.com')
            .end();
    }

};
