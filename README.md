# City Explorer

**Author**: Willem Jacobs
**Version**: 1.0.3 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

A site that allows you to enter a city and get back the coordinates of the city along with a full name. A show map button is available to display a map of that city. Uses the LocationIQ API to get the data required.

## Getting Started

- Clone from repo. [Link to Repo](https://github.com/Willem-Jacobs/city-explorer)
- `npm install` or `npm i` to install dependencies.
- `.env` file needed with the API key in it. `REACT_APP_CITY_KEY=<YOUR KEY VALUE INSERTED>` for LocationIQ.

## Architecture

- Trello for Project Management
- React
- React Bootstrap & Bootstrap
- Axios
- LocationIQ [Link](https://locationiq.com/)

## Change Log

07.27.2021 10:30am (V1.0.0) - Basic structure setup and deployed.

07.28.2021 1:30pm (v1.0.1) - Added form to allow entry of a city with a button to click that will submit the form. An API call is done to locationIQ to retrieve the data for that city. A card will display below the search button dislaying the city info (name/state/country/etc) along with the latitude and longitude of the city center. Error messages will show if some issue happens with the API call.

07.28.2021 10:45pm (v1.0.2) - Added feature to show a map based on city searched. Added styles and cards. Added some colors & button icons. Added clearing screen fatures.

7.28.2021 11:00pm (v1.0.3) - Error handling was completed for API requests.

## Credit and Collaborations

No collaborations from others on this project.

### Feature 1 Trello Card #1

**Name of feature:** Basic structure setup and deployed

**Estimate of time needed to complete:** 1 hour

**Start time:** 09:30am

**Finish time:** 10:50am

**Actual time needed to complete:** 1:20 hour

### Feature 2 Trello Card #2

**Name of feature:** Get city info from API

**Estimate of time needed to complete:** 2 hours

**Start time:** 10:00am

**Finish time:** 1:30pm

**Actual time needed to complete:** 2 hours. Took a 1.5 hour break for lunch and some other things.

### Feature 3 Trello card #3

**Name of feature:** To show a map of the city searched

**Estimate of time needed to complete:** 1 hour

**Start time:** 09:00pm

**Finish time:** 10:45pm

**Actual time needed to complete:** 1:45 hours.

### Feature 4 Trello card #4

**Name of feature:** Error messages

**Estimate of time needed to complete:** 30 mins

**Start time:** 10:00am

**Finish time:** 1:30pm

**Actual time needed to complete:** 30 mins. This was done as I was working on the data retrieval part of the assignment from the API.
