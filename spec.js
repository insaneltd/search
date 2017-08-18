describe('perform search', function() {

let homePage = 'https://www.thomascook.com/'
let airportList = element(by.id('SearchbarForm-toggleAirportsTooltip'));
let airport = element(by.xpath('//*[@id="PopularTooltip--airports"]/div[2]/div/div[2]/div[1]/label'));
let airportCloseButton = element(by.id('iconClose-airports'));
let destinationList = element(by.id('SearchbarForm-toggleDestinationsTooltip'));
let destination = element(by.xpath('//*[@id="PopularTooltip--destinations"]/div[2]/div/div[2]/div[3]/label'));
let destinationCloseButton = element(by.id('iconClose-destinations'));
let choseStartDate = element(by.id('when'));
let date = element(by.id('Searchbar-wholeMonth'));
let duration = element(by.model('duration.selectedDuration')).$('[value="string:5"]');
let persons = element(by.model('room.adultsSelected')).$('[value="number:4"]');
let search = element(by.id('SearchbarForm-submitBtn'));

  it('should choose start point', function() {
    browser.get(homePage);
    airportList.click();
    airport.click();
    airportCloseButton.click();
    browser.sleep(3000);
  });

  it('should choose end point', function() {
    destinationList.click();
    destination.click();
    destinationCloseButton.click();
    browser.sleep(3000);
  });
  
   it('should choose start date', function() { 
    choseStartDate.click();
    date.click();
    browser.sleep(3000);
 });

  it ('should choose for how long', function() {
    duration.click();
    persons.click();
    browser.sleep(3000);

    search.click();
    });
});

