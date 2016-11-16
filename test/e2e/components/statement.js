module.exports = {
    'VIC-NAPALAN-SCHOOL-STATEMENT': function (browser) {
        browser
            .url('http://localhost:8004/school/statement')   // visit the url
            .waitForElementVisible('body'); // wait for the body to be rendered
        // part two:
        browser
            .assert.containsText('.grommetux-heading', 'Statement of Compliance')

            .end();
    }
};
