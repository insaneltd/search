const homePage = require('./pages/homePage.js');
const searchPage = require('./pages/searchPage.js');

describe('perform search', function() {
  let originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
        browser.get(homePage.homeUrl);
        homePage.closeCookieButton.click();
        if(homePage.closePromoPopup.isDisplayed()) {
          homePage.closePromoPopup.click();
        } 
    });

  it('should perform search', function() {
    expect(browser.getCurrentUrl()).toEqual(homePage.homeUrl);
    homePage.chooseAirport();
    homePage.chooseDestination();  
    homePage.chooseDates();
    homePage.persons.click();
    homePage.search.click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toContain(searchPage.searchResultUrl);
    expect(searchPage.recentSearchContainer.isDisplayed()).toBeTruthy();
  });
});