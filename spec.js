describe('perform search', function() {
  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('https://www.thomascook.com/');

    element(by.id('SearchbarForm-toggleAirportsTooltip')).click();
    element(by.xpath('//*[@id="PopularTooltip--airports"]/div[2]/div/div[2]/div[1]/label')).click();
    element(by.id('iconClose-airports')).click();
    browser.sleep(3000);
  });

  it('should 1', function() {
    element(by.id('SearchbarForm-toggleDestinationsTooltip')).click();
    element(by.xpath('//*[@id="PopularTooltip--destinations"]/div[2]/div/div[2]/div[3]/label')).click();
    element(by.id('iconClose-destinations')).click();
    browser.sleep(3000);
  });
  
   it('should 2', function() { 
    element(by.id('when')).click();
    element(by.id('Searchbar-wholeMonth')).click();
    browser.sleep(3000);
 });
  it ('should 3', function() {
    element(by.model('duration.selectedDuration')).$('[value="string:5"]').click();
    element(by.model('room.adultsSelected')).$('[value="number:4"]').click();
    browser.sleep(3000);

    element(by.id('SearchbarForm-submitBtn')).click();
	});
});

