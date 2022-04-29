import React from 'react'

import Logic from '../Logic'

it('Should fail with empty fields', () => {
    expect(Logic({ name: '', pass: '' })).toBe("fields cannot be empty");     
})
    
it('Should fail with empty username', () => {
    expect(Logic({ name: '', pass: 'pRanab@1' })).toBe("username is required");     
})

it('Should fail with empty password ', () => {
    expect(Logic({ name: 'pranab', pass: '' })).toBe("password is required field");     
})

it('Should fail with special character in username', () => {
    expect(Logic({ name: 'pran@ab', pass: 'pranab@1' })).toBe("Username should have no special characters");     
})

it('Should fail with Username > Max length', () => {
    expect(Logic({ name: 'pran.ab1112', pass: 'Pranab@1' })).toBe("Maximum characters for username is 10");     
})

it('Should fail with Username < Min length', () => {
    expect(Logic({ name: 'pr', pass: 'Pranab@1' })).toBe("Minimum Character for username is 3");     
})

it('Should fail with Password > Max length', () => {
    expect(Logic({ name: 'pranab', pass: 'Pr@na12c4h1234567' })).toBe("Maximum Character for password is 16");     
})

it('Should fail with Password < Min length', () => {
    expect(Logic({ name: 'pranab', pass: 'Pra' })).toBe("Minimum Character for password is 8");     
})

it('Should fail with no special char in pw', () => {
    expect(Logic({ name: 'pranab', pass: 'Pranab1xx' })).toBe("password should have one special character");     
})

it('Should fail with no number in pw', () => {
    expect(Logic({ name: 'pranab', pass: 'Pranab@x' })).toBe("password should have at least one number");     
})

it('Should fail password with no lowercase', () => {
    expect(Logic({ name: 'pranab', pass: 'PRANAB@1' })).toBe("password should have lower case letters");     
})

it('should fail password with no uppercase', () => {
    expect(Logic({ name: 'pranab', pass: 'pranab@1' })).toBe("password should have upper case letters");     
})





