class HomePage {
	constructor() {
		this.homeUrl = 'https://www.thomascook.com/'
		this.closeCookieButton = element(by.id('accept-cookies'));
		this.closePromoPopup = element(by.css('#e102148-promo-slider > span'));
		
		this.airportList = element(by.id('SearchbarForm-toggleAirportsTooltip'));
		this.airport = element(by.xpath('//*[@id="PopularTooltip--airports"]/div[2]/div/div[2]/div[1]/label')); // - css selector
		this.airportCloseButton = element(by.id('iconClose-airports'));
		this.destinationList = element(by.id('SearchbarForm-toggleDestinationsTooltip'));
		this.destination = element(by.xpath('//*[@id="PopularTooltip--destinations"]/div[2]/div/div[2]/div[3]/label'));
		this.destinationCloseButton = element(by.id('iconClose-destinations'));
		this.choseStartDate = element(by.id('when'));
		this.date = element(by.id('Searchbar-wholeMonth'));
		this.duration = element(by.model('duration.selectedDuration')).$('[value="string:5"]');
		this.persons = element(by.model('room.adultsSelected')).$('[value="number:4"]');
		this.search = element(by.id('SearchbarForm-submitBtn'));
	} 
	chooseAirport() {
		this.airportList.click();
    	this.airport.click();
    	this.airportCloseButton.click();	
	}
	chooseDestination() {
		this.destinationList.click();
	    this.destination.click();
	    this.destinationCloseButton.click();
	}
	chooseDates() {
		this.choseStartDate.click();
    	this.date.click();
    	this.duration.click();
	}

}


module.exports = new HomePage();