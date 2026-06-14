# Speed Typing Test

## Overview

Speed Typing Test is a simple and interactive web application that helps users improve their typing speed and accuracy. The application fetches a random quote from an API, starts a timer, and challenges users to type the displayed quote correctly within the shortest possible time.

## Features

* Fetches random quotes dynamically using an API
* Real-time timer to track typing duration
* Input validation for typed text
* Displays typing results instantly
* Reset functionality to generate a new quote
* User-friendly and responsive interface
* Loading spinner while fetching quotes

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 4
* Fetch API

## Project Structure


speed-typing-test/
│
├── index.html
├── speedtypingtest.css
├── speedtypingtest.js
└── README.md


## How It Works

1. When the page loads, a random quote is fetched from the API.
2. The timer starts automatically.
3. The user types the displayed quote in the textarea.
4. Clicking the **Submit** button checks whether the entered text matches the quote.
5. If correct:

   * The timer stops.
   * The total time taken is displayed.
6. If incorrect:

   * An error message is displayed.
7. Clicking **Reset** fetches a new quote and restarts the timer.



The API returns a random quote that is displayed to the user.

## Future Enhancements

* Calculate Words Per Minute (WPM)
* Display typing accuracy percentage
* Add difficulty levels
* Maintain high scores using local storage
* Support dark mode
* Add countdown timer mode
* Show detailed typing statistics

## Learning Outcomes

Through this project, you can learn:

* DOM Manipulation
* Event Handling
* Fetch API
* Asynchronous JavaScript
* Timers using setInterval()
* Form Validation
* Responsive Web Design



