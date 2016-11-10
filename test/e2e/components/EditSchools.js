module.exports = {
    'VIC-NAPALAN-EDIT-School': function (browser) {
        browser
            .url('http://localhost:8004/manageschools')   // visit the url
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
            .click('#tab-0')
            .pause(1000)

            .assert.containsText('.grommetux-heading', 'Part A: School Details')
            .assert.visible('input[name=centreName]')
            .assert.visible('input[name=centreCode]')
            .assert.visible('input[name=deecD_CODE]')
            .assert.visible('input[name=dscode]')
            .assert.visible('input[name=dsName]')
            .assert.visible('input[name=phone]')
            .assert.visible('input[name=email]')
            .assert.visible('input[name=fax]')
            .assert.visible('input[name=deliveryCode]')
            .assert.visible('input[name=deliverySchoolName]')
            .assert.visible('input[name=deliveryAddress1]')
            .assert.visible('input[name=deliveryAddress2]')
            .assert.visible('input[name=deliverySuburb]')
            .assert.visible('input[name=deliveryPostcode]')
            .assert.visible('input[name=deliveryState]')
            .assert.visible('input[name=reportCODE]')
            .assert.visible('input[name=reportSchoolName]')
            .assert.visible('input[name=reportAddress1]')
            .assert.visible('input[name=reportAddress2]')
            .assert.visible('input[name=reportSuburb]')
            .assert.visible('input[name=reportPostcode]')

            .click('button[type=submit]')
            .pause(1000)
            .assert.containsText('ol#rso li:first-child',
            'required')

            .end();
    }
};
