module.exports = {
    'VIC-NAPALAN-SIMPLE-SEARCH': function (browser) {
        browser
            .url('http://localhost:8004/school/summary')   // visit the url
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
            .pause(20000)

            .assert.visible('input.grommetux-input')
            //    .assert.visible('input[placeholder="search by Code"]')
          //  .assert.visible('input[value="Select school"]')


            // .click('button[type=submit]')
            // .assert.containsText('ol#rso li:first-child',
            // 'required')

            .end();
    }
};
