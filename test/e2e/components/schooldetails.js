module.exports = {
    'VIC-NAPALAN-SCHOOL-DETAILS': function (browser) {
        browser
            .url('http://localhost:8004/school/schooldetails')   // visit the url
            .waitForElementVisible('body'); // wait for the body to be rendered
        // part two:
        browser

            .assert.containsText('.grommetux-heading', 'School Details')
            .assert.containsText('.grommetux-list', 'School Code')
            .assert.containsText('.grommetux-list', 'School Name')
            .assert.containsText('.grommetux-list', 'Address 1')
            .assert.containsText('.grommetux-list', 'Address 2')
            .assert.containsText('.grommetux-list', 'Suburb')
            .assert.containsText('.grommetux-list', 'Postcode')
            .assert.containsText('.grommetux-list', 'State')
            .end();
    }
};
