// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'id':'4929180',
    'units':'imperial',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
var feed = 'http://www.theonion.com/feeds/rss'

// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How did you sleep?',
	    'Make today great!',
	    'Make today yours',
	    'You\'ve got this',
        ];
        
var afternoon = [
            'Ready to get stuff done?',
            'Well well, look at you handsome',
            'You. Look. Great.',
	    'Let\'s get shit done',
        ];
       
var evening = [
            'Lookin\' good tonight, aren\'t we?',
            'You look brilliant!',
            'Well don\'t you look good.',
	    'Don\'t forget the pickle!'
        ];


// Calendar limiter

var calendar_display_limit = 3; // in days

// Refresh times
var minute = 1000 * 60;

var update_time =  minute * 15; // git update check
var compliment_time = minute * 10; // compliment refresh
var calendar_data_time = minute * 10; // calendar data refresh
var calendar_display_time = minute;
var weather_time = minute * 5; // weather data refresh
var forecast_time = minute * 10; // forecast data refresh
var news_data_time = minute * 60; // news data refresh
var news_display_time = 1000 * 45; // news display update
