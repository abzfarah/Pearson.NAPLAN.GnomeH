module.exports = {
    'VIC-NAPALAN-STATEMENT': function (browser) {
        browser
            .url('http://localhost:8004/Admin')   // visit the url
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
            //- check titles are valid
           .assert.containsText('.grommetux-heading', 'Statement of Compliance')
            .assert.containsText('.statement .grommetux-section:nth-child(2) h4', 'Part A: Principal\'s Responsibilities')
            .assert.containsText('.statement fieldset .grommetux-section:nth-child(1) h4', 'Part B: Security Storage Arrangement')
            .assert.containsText('.statement fieldset:nth-child(4) .grommetux-section:nth-child(1) h4', 'Part C: Principal\'s Declaration')
        //-- check input are visisble
            .assert.visible('input[name=firstName]')
            .assert.visible('input[name=lastName]')
            .assert.visible('input[name=email]')
            .assert.visible('.confirmationFieldSet label[class=grommetux-check-box]', 'I have read and accept the Principal\'s Responsibilities')
            .assert.visible('div label[class=grommetux-check-box]', '* I declare that I am the Principal of the school detailed above.')
            .assert.visible('div label[class=grommetux-check-box]', '* I certify that the information provided in this form is correct.')

            //-- todo
            //td[class="sorting_3"]
            //css=input[name='continue'][type='button']

            //  .clic//k('.grommetux-section > .grommetux-heading:nth-child(1)',function(){
            //    this.waitForElementVisible('#idOfOption',10000);
            //  this.click('#idOfOption')
            //  })
            // .assert.containsText('body', 'Welcome to the VIC Registration Website') // assert contains

            //  .url('http://todomvc.com/examples/angular2/')
            //   .waitForElementVisible('input.new-todo', 1000)
            //   .assert.visible('input.new-todo')
            //   .setValue('input.new-todo', 'task A\r\n')
            //   .setValue('input.new-todo', 'task B\r\n')
            //   //.pause(2000)
            //   .assert.visible('ul.todo-list')
            //   //.assert.visible('ul.todo-list > li:nth-child(2) > div > label')
            //   .assert.containsText('ul.todo-list > li:nth-child(2) > div > label', 'task A')
            //   .assert.containsText('ul.todo-list > li:nth-child(3) > div > label', 'task B')
            //        .url('http://www.google.com')
            //   .waitForElementVisible('body', 1000)
            //   .assert.title('Google')
            //   .assert.visible('input[type=text]')
            //   .setValue('input[type=text]', 'rembrandt van rijn')
            //   .waitForElementVisible('button[name=btnG]', 1000)
            //   .click('button[name=btnG]')
            //   .pause(1000)
            //   .assert.containsText('ol#rso li:first-child',
            //     'Rembrandt - Wikipedia')
            //   .end();
            .end();
    }
};
