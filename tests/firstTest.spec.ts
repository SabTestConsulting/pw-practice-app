import {test} from '@playwright/test'

// page represents the fixture for blank page
// promise: can be successfull or unsuccesful. if not succesfull, it returns an error
// a promise has a timeout
// in order for the promise to resolve, you need to use await. 

test('firstTest', ({page}) => {

await page.goto('http://localhost:4200')

});


