/// <reference types="cypress" />

import Profile from '../support/page-objects/Profile/page'

describe('Acessing my profile page on Github', () => {

    before(() => {
        Profile.accessProfilePage()
    })

    it('I should see my name on my bio ', () => {
        Profile.validateProfileName('Andrey Pereira')
    })
})