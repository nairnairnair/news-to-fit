# All the Print That's News to Fit

## Overview:

#### Functionality: 

A simple news reader application that takes stories from the New York Times Top Stories API and displays them to the user.
The user is able to filter articles by section, displaying everything in it from The Times for that day.
They are also able to click an image or button to navigate to a more detailed article view.
The user can then either navigate to The Times site for the full article or return home.

#### Constraints:

This application was made in under 8 hours as part of a simulated timed challenge. As a result, the focus was on achieving a functional
minimum viable product and extra features and frills were of secondary concern. Initially, I had intended to display results for each section
on a grid three articles wide but decided to go for a more mobile-friendly view.

## Screenshots

#### Homepage:

<img width="1424" alt="image" src="https://user-images.githubusercontent.com/103080131/202002513-c9c55fe1-72ca-4bfd-a517-3183ffbb9007.png">

#### Article View:

![image](https://user-images.githubusercontent.com/103080131/202003487-29f8206c-fc6b-4623-8ee0-40f29651990f.png)

## Project Planning

#### [Project Board](https://github.com/users/nairnairnair/projects/9)

#### Home View Wireframe:
![Screen Shot 2022-11-12 at 2 49 45 PM](https://user-images.githubusercontent.com/103080131/201495903-18f4ffa3-cd44-43b4-b4b8-5356ca24af7c.png)

#### Article View Wireframe:
![Screen Shot 2022-11-12 at 2 55 03 PM](https://user-images.githubusercontent.com/103080131/201496068-488edaeb-602b-4a3f-9d1b-eb66f8dd3c39.png)

## Accessibility
 
The site can be navigated entirely through the use of the tab and enter buttons.
The inverted newspaper print color scheme was partially chosen to make viewing easier for people with color blindness.

#### Lighthouse Score:
![image](https://user-images.githubusercontent.com/103080131/201750931-69cbc682-a701-4932-bc79-6886a764f6c5.png)

## Setup:

1. Clone this repository to your local machine
2. Run `npm start` in the console
3. Navigate to http://localhost:3000/ in your browser
4. Click things!

## Future Additions:

* More responsive mobile-friendly interface (e.g. buttons, 3x wide grid view on desktop)
* Dynamic routing (React Router V6)
