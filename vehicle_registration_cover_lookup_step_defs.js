
// Using Chai javascript library.

const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By} = require('selenium-webdriver');
const {registrationPageObjects} = require('../../page-objects/registration-page.js');

let driver = new Builder().forBrowser('chrome').build();
let data = require('../../test-data/register-data');

Given('I am in Vehicle Registration Cover Lookup page', async function () {
 await driver.get('https://covercheck.vwfsinsuranceportal.co.uk/');
});

When('I enter valid vehicle registration',async function () {
  await driver.findElement(By.id(registrationPageObjects.destination_publishing_iframe_directlinegroup_0)).sendKeys(data.validVehicleRegistration);
});

When('I enter invalid vehicle registration',async function () {
  await driver.findElement(By.id(registrationPageObjects.destination_publishing_iframe_directlinegroup_0)).sendKeys(data.invalidVehicleRegistration);
});

When('I enter blank',async function () {
  await driver.findElement(By.id(registrationPageObjects.destination_publishing_iframe_directlinegroup_0)).sendKeys(data.blankVehicleRegistration);
});

When('I click Find Vehicle',async function () {
   await driver.findElement(By.id(registrationPageObjects.findVehicle)).click();
});

Then('I should see Cover start and a timestamp', async function () {  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.statusMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'Cover start');
 });
 
Then('I should see Cover end and a timestamp', async function () {  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.statusMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'Cover end');
});
 
Then('I should see Sorry record not found', async function () {  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.statusMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'Sorry record not found');
});

Then('I should see Please enter a valid car registration', async function () {  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.statusMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'Please enter a valid car registration');
});


