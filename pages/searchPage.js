class SearchPage {
	//search page variables
	constructor() {
		this.searchResultUrl = 'https://www.thomascook.com/search'
		this.recentSearchContainer = element(by.css('div.SearchbarSearches-drawer.SearchbarSearches-heigth.SearchbarSearches-collapsed'));
		} 
}

module.exports = new SearchPage();