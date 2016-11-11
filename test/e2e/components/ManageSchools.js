// module.exports = {
//     'VIC-NAPALAN-MANAGESCHOOLS': function (browser) {
//         browser
//             .url('http://localhost:8004/manageschools')   // visit the url
//             .waitForElementVisible('body'); // wait for the body to be rendered
//         // check if we are seeing the Mobile Version of GitHub
//         browser.element('css selector', '.switch-to-desktop', function (result) {
//             if (result.status != -1) { //Element exists, do something
//                 browser.click('.switch-to-desktop')
//                     .waitForElementVisible('body'); // wait for the body to be rendered
//             }
//         });
//         // part two:
//         browser
//             .assert.containsText('h2.grommetux-heading', 'Manage Schools')
//             .assert.visible('panel table')
//             .assert.visible('panel table thead')
//             .assert.visible('panel table thead tr')
//             .assert.visible('panel table thead th')
//             .assert.visible('panel table thead th input')
//             .assert.visible('panel table thead th input[type=checkbox]')
//             .assert.visible('th[title="Edit School"]')
//             .assert.visible('th[title="Sector"]')
//             .assert.visible('th[title="School Code"]')
//             .assert.visible('th[title="School Name"]')
//             .assert.containsText('th[title="Edit School"]', 'Edit School')
//             .assert.containsText('th[title="Sector"]', 'Sector')
//             .assert.containsText('th[title="School Code"]', 'School Code')
//             .assert.containsText('th[title="School Name"]', 'School Name')



//             //-- Filter 
//             .assert.visible('input[placeholder="search by Code"]')
//             .assert.visible('input[placeholder="search by Code"]')
//             .assert.visible('input[placeholder="Search by Name"]')
//             .assert.visible('select')
//             .assert.visible('select option[value="G"]')
//             .assert.visible('select option[value="I"]')
//             .assert.visible('select option[value="C"]')

//             .assert.visible('div .react-bs-container-body')
//             .assert.visible('div .react-bs-container-body > table')
//             .assert.visible('div .react-bs-container-body > table td input')
//             .assert.visible('div .react-bs-container-body > table td input[type="checkbox"]')
//             .assert.visible('div .react-bs-container-body > table td:nth-child(1)')
//             .assert.visible('div .react-bs-container-body > table td:nth-child(2)')
//             .assert.visible('div .react-bs-container-body > table td:nth-child(3)')
//             .assert.visible('div .react-bs-container-body > table td:nth-child(4)')
//             .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(3)', '10360')
//             .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(4)', 'G')
//             .assert.containsText('div .react-bs-container-body > table > tbody > tr td:nth-child(5)', 'ABBOTSFORD PRIMARY')
//             // .assert.visible('panel table colgroup col')
//             // .assert.visible('panel table tbody col');
//             // .assert.visible('panel table tbody tr')
//             // .assert.containsText('div span', 'Add New School')
//             // .assert.visible('input[name=centreName]')


//             //  .click('button[type=submit]')
//             //  .pause(1000)

//             .end();
//     }
// };
