import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cellma4testing.riomed.com/cellmaUser/login');
  await page.getByTestId('Username').click();
  await page.getByTestId('Username').fill('prerelease.auto');
  await page.getByTestId('Password').click();
  await page.getByTestId('Password').fill('Manoj@2023');
  await page.getByTestId('Login').click();
  await page.getByTestId('Patients').click();
  await page.getByTestId('Given Name').click();
  await page.getByTestId('Given Name').fill('Amit');
  await page.getByTestId('Family Name').click();
  await page.getByTestId('Family Name').fill('RiomedPune');
  await page.getByTestId('Sex').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByLabel('Choose date').click();
  await page.getByLabel('calendar view is open, switch').click();
  await page.getByRole('button', { name: '1996' }).click();
  await page.getByLabel('Previous month').click();
  await page.getByLabel('Feb 6,').click();
  await page.getByTestId('Search').click();
  await page.getByTestId('Add Patient').click();
  await page.getByTestId('uniqueIdentification').getByLabel('Open').click();
  await page.getByRole('option', { name: 'Aadhar Card' }).click();
  await page.getByTestId('Unique Identification ID').click();
  await page.getByTestId('Unique Identification ID').fill('985487215400');
  await page.getByTestId('photoIdentification').getByLabel('Open').click();
  await page.getByRole('option', { name: 'PAN Card' }).click();
  await page.getByTestId('Photo Identification ID').click();
  await page.getByTestId('Photo Identification ID').fill('AJALR1887P');
  await page.getByTestId('issuingCountry').getByLabel('Open').click();
  await page.getByRole('option', { name: 'India', exact: true }).click();
  await page.getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Mr', exact: true }).click();
  await page.getByTestId('Middle Name(s)').click();
  await page.getByTestId('Middle Name(s)').fill('Test');
  await page.getByTestId('Mobile').click();
  await page.getByTestId('Mobile').fill('9700112244');
  await page.getByTestId('Duplicate Check').click();
  await page.getByTestId('Create Patient').click();
  await page.getByTestId('Marital Status').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.getByTestId('Sexual Orientation').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Heterosexuality' }).click();
  await page.getByTestId('Ethnicity').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Indian' }).click();
  await page.getByTestId('Occupation').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Trainer' }).click();
  await page.getByTestId('Religion').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Hindu' }).click();
  await page.getByTestId('Country Of Birth').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'India', exact: true }).click();
  await page.getByTestId('Nationality').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Indian' }).click();
  await page.getByTestId('Primary Disability').getByLabel('​', { exact: true }).click();
  await page.getByRole('checkbox').check();
  await page.locator('#menu-primaryDisability > .MuiBackdrop-root').click();
  await page.getByTestId('Language').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Hindi' }).click();
  await page.getByTestId('Interpreter Type').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Whisper' }).click();
  await page.getByTestId('Hospital Ref').click();
  await page.getByTestId('Hospital Ref').fill('Hosp195');
  await page.getByTestId('Patient Type').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Regular' }).click();
  await page.getByTestId('Prisoner').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByTestId('Blood Type').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'AB+' }).click();
  await page.getByTestId('Patient Web Access').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByTestId('Notes').click();
  await page.getByTestId('Notes').fill('testing notes');
  await page.getByTestId('Next').click();
  await page.locator('#numberRoadPermanentAddress').click();
  await page.locator('#numberRoadPermanentAddress').fill('15number');
  await page.locator('#townPermanentAddress').click();
  await page.locator('#townPermanentAddress').fill('Hadapsar');
  await page.locator('#districtPermanentAddress').click();
  await page.locator('#districtPermanentAddress').fill('Pune');
  await page.locator('#countyPermanentAddress').click();
  await page.locator('#countyPermanentAddress').fill('Maharashtra');
  await page.locator('#postCodePermanentAddress').click();
  await page.locator('#postCodePermanentAddress').fill('411028');
  await page.getByTestId('Find Postcode').first().click();
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').click();
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').fill('India');
  await page.getByTestId('CommonCellmaPopup').getByTestId('Save').click();
  await page.locator('#iSOCountryCodePermanentAddress').click();
  await page.locator('#iSOCountryCodePermanentAddress').fill('91');
  await page.locator('#iCAOCountryCodePermanentAddress').click();
  await page.locator('#iCAOCountryCodePermanentAddress').fill('1542');
  await page.locator('#phonePermanentAddress').click();
  await page.locator('#phonePermanentAddress').fill('0206991527');
  await page.locator('#emailPermanentAddress').click();
  await page.locator('#emailPermanentAddress').fill('Hadapsar@gmail.com');
  await page.locator('input[name="tempNumberRoad"]').click();
  await page.locator('input[name="tempNumberRoad"]').fill('15 number');
  await page.locator('input[name="tempTown"]').click();
  await page.locator('input[name="tempTown"]').fill('Hadapsar');
  await page.locator('input[name="tempDistrict"]').click();
  await page.locator('input[name="tempDistrict"]').fill('Pune');
  await page.locator('input[name="tempCounty"]').click();
  await page.locator('input[name="tempCounty"]').fill('Maharashtra');
  await page.locator('input[name="tempPostcode"]').fill('4');
  await page.locator('input[name="tempPostcode"]').click();
  await page.locator('input[name="tempPostcode"]').fill('411028');
  await page.getByTestId('Find Postcode').nth(1).click();
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').click();
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').fill('ndia');
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').press('Home');
  await page.getByTestId('CommonCellmaPopup').getByTestId('Country').fill('India');
  await page.getByTestId('CommonCellmaPopup').getByTestId('Save').click();
  await page.locator('input[name="tempISOCountryCode"]').click();
  await page.locator('input[name="tempISOCountryCode"]').fill('91');
  await page.locator('input[name="tempICAOCountryCode"]').fill('1545');
  await page.locator('input[name="tempICAOCountryCode"]').click();
  await page.locator('input[name="tempPhone"]').click();
  await page.locator('input[name="tempPhone"]').fill('9702142500');
  await page.locator('input[name="tempEmail"]').click();
  await page.locator('input[name="tempEmail"]').fill('hadapsar@gmail.com');
  await page.locator('#temporaryMobileNumber').click();
  await page.locator('#temporaryMobileNumber').fill('9854215487');
  await page.locator('input[name="tempWorkPhone"]').click();
  await page.locator('input[name="tempWorkPhone"]').fill('0206991527');
  await page.getByTestId('TA Billing Correspondence').getByLabel('A').check();
  await page.getByTestId('Start Date').getByLabel('Choose date').click();
  await page.getByLabel('Previous month').click();
  await page.getByLabel('Feb 1,').click();
  await page.getByTestId('End Date').getByLabel('Choose date').click();
  await page.getByLabel('Mar 19,').click();
  await page.getByTestId('Save').click();
  await page.getByTestId('Title').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Dr' }).click();
  await page.getByTestId('Family Name').click();
  await page.getByTestId('Family Name').fill('Riomedtest');
  await page.getByTestId('Given Name').click();
  await page.getByTestId('Given Name').fill('Suraj');
  await page.getByTestId('Middle Name(s)').click();
  await page.getByTestId('Middle Name(s)').fill('Test');
  await page.getByTestId('Born').getByLabel('Choose date').click();
  await page.getByLabel('calendar view is open, switch').click();
  await page.getByRole('button', { name: '1985' }).click();
  await page.getByLabel('Previous month').click({
    clickCount: 3
  });
  await page.getByLabel('Nov 14,').click();
  await page.getByTestId('Sex').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByTestId('Ethnicity').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Indian' }).click();
  await page.getByTestId('Occupation').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Trainer' }).click();
  await page.getByTestId('Mobile').click();
  await page.getByTestId('Mobile').fill('9854875400');
  await page.getByTestId('Email').click();
  await page.getByTestId('Email').fill('Surajriomed@gmail.com');
  await page.getByTestId('Relationship').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Brother' }).click();
  await page.getByTestId('Next of Kin').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByTestId('Identifier Type').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'Aadhar Card' }).click();
  await page.getByTestId('Identifier Number').click();
  await page.getByTestId('Identifier Number').fill('985410204521');
  await page.getByTestId('Professional Title').click();
  await page.getByTestId('Professional Title').fill('Dr');
  await page.getByTestId('Receive Patient Letters').getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByLabel('​', { exact: true }).click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('checkbox', { name: 'Send Patient Text/Email' }).check();
  await page.getByRole('checkbox', { name: 'Is Referrer' }).check();
  await page.getByLabel('Notes').click();
  await page.getByLabel('Notes').fill('for testing');
  await page.getByRole('checkbox', { name: 'Assisting in partner\'s care' }).check();
  await page.getByRole('checkbox', { name: 'Helping patients and their' }).check();
  await page.getByRole('checkbox', { name: 'For use on the University' }).check();
  await page.getByTestId('Save').click();
  await page.getByTestId('Next').click();
  await page.getByTestId('Search').click();
  await page.getByLabel('Search').click();
  await page.getByLabel('Search').fill('bates');
  await page.getByLabel('personAdd').click();
  await page.getByTestId('Next').click();
  await page.getByTestId('PhotoCameraIcon').click();
  await page.locator('body').setInputFiles('Patient.png');
  await page.getByTestId('Upload').click();
  await page.getByTestId('Save').click();
  await page.getByTestId('Patient Address').click();
  await page.getByTestId('Patient PIP').click();
  await page.getByTestId('Patient GP').click();
  await page.getByTestId('Print Id Card').click();
  await page.getByTestId('Menu').click();
  await page.getByTestId('menuDropDownLogout').click();
});