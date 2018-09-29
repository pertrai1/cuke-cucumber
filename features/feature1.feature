Feature: Search Keyword on Google
Search some keywords on Google and validate results

  Scenario: Bind Search
    Given Browse to web site "http://www.google.com"
    When input keyword "nodejs", and click Seach button
    Then the search result should contain "Node.js"