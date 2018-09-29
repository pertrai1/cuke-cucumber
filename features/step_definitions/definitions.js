const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^Browse to web site "([^"]*)"$/, async function(url) {
    await driver.get(url);
});

When(/^input keyword "([^"]*)", and click Seach button$/, async function (arg1) {
    await driver.findElement({name:'q'}).sendKeys(arg1);
    await driver.sleep(3000);
    await driver.findElement({name:'btnK'}).click();
});

Then(/^the search result should contain "([^"]*)"$/, async function (arg1) {
    await driver.sleep(3000)
    let allresult = await driver.findElement({className:'r'}).getText()

    return assert.ok(allresult.includes(arg1));
});