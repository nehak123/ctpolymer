

{
  "suites": [
    "test/*.html"
  ],
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary",
        "lcov"
      ],
      "include": [
        "/polymer-elements/*.html"
      ],
      "exclude": [
        "/bower_components/**/*",
        "/test/*"
      ]
    }
  },
  "local": {
      "browsers": ["chrome", "firefox"]
  },
  "thresholds": {
        "global": {
          "statements": 100
        }
      }
}
