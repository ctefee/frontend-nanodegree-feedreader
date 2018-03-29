/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */


$(function() {
  /* This is the first test suite */
  describe('RSS Feeds', function() {
    /*
     * Write a spec and ensure that there are two expectations that show :
     * 1. allFeeds are truthy
     * 2. allFeeds do not have an empty array
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /*
     * Write a spec and ensure that it loops through each feed in the
     * allFeeds object with two expectations that show :
     * 1. allFeeds object has a URL
     * 2. allFeeds URL are not empty
     */
    it('allFeeds has a URL and the URL is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });


    /*
     * Write a spec and ensure that it loops through each feed in the allFeeds
     * object with two expectations that show :
     * 1. allFeeds has a name defined
     * 2. allFeeds does not have an empty name
     */
    it('URL has a name and the name is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });

  });

  /* Write a new test suite named 'The menu' */
  describe('The menu', function() {
    /*
     * Write a spec that ensures the menu element is hidden by default
     * Check HTML and CSS
     */

    it('The menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /*
     * Write a spec that ensures the menu changes visibility when menu icon is clicked
     * The spec should include two exepections :
     * 1. The menu display when it's clicked
     * 2. The menu hidden when it's clicked again
     */
    it('The menu changes visibility when the menu icon is clicked', function() {
      $('.menu-icon-link').click(); //invoke the click
      expect($('body').hasClass('menu-hidden')).not.toBe(true);
      $('.menu-icon-link').click(); //invoke the click
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* Write a new test suite named 'Initial Enteries' */
  describe('Initial Entries', function() {
    /* Use beforeEach() and done() to call 'loadFeed' function and wait for completion */
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    /*
     * Write a spec to verify that loadFeed() function creates at least a single
     * .entry element within the .feed container
     */
    it('There is at least a single .entry element within the .feed container.', function(done) {
      loadFeed(1, done);
      var i = $('.feed .entry');
      expect(i.length).toBeGreaterThan(0);
      done();
    });
  });

  /* Write a new test suite named 'New Feed Selection' */
  describe('New Feed Selection', function() {
    var oldFeed, newFeed;
        /*
        16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
        17. No test should be dependent on the results of another.
        18. Callbacks should be used to ensure that feeds are loaded before they are tested.
        19. Implement error handling for undefined variables and out-of-bound array access.
        20. When complete - all of your tests should pass.
        */
    beforeAll(function() {
      loadFeed(1, function() {
        oldFeed = $('.feed').html();
        done();
      });
    });
  });

}());
