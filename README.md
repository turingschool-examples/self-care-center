# Self-Care Center 

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

Get your daily dose of practicing positivity with this Self-Care Center application. Overcome negative self-talk by selecting a randomized affirmation and/or mantra to get your day going! We all need a little reminder of just how special our lives on Earth truly are. Treat yourself well, seek motivation, and achieve your goals. An affirmation and/or mantra a day will give you the mindset to overcome anything in life. Give it a try!


### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

Fork this boilerplate [repository](https://github.com/mikegudenau/self-care-center)
1. Clone down your new, forked repo by using git clone in you desire directory
2. cd into the repository
3. Open it in your text editor
4. View the project in the browser by running open index.html in your terminal

The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/self-care-center.html)

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![SelfCareCenter](https://user-images.githubusercontent.com/116329342/230794900-6af84051-4089-47be-a06b-e585c65116a9.gif)


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

As part of our week 3 project, we were assigned this solo project to indroduce CSS styling, further our understanding of working with the the data model, DOM manipulation, with the central idea of writing DRY JavaScript. I had a total of 6 days to complete the project. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

[Mike Gudenau](https://github.com/mikegudenau)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

- HTML and CSS
    - matching to provided spec

- Practice following JavaScript concepts:
    - DRY functions
    - DOM manipulation and responding to user events
    - Readability
    - Naming conventions 

- Tech used:
    - VS Code
    - Git 
    - GitHub
    - HTML
    - CSS
    - JavaScript

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

My biggest win from this project was finding ways to keep my code DRY. After writing my first draft of functions I realized patterns in my code that led me to tighten up my functions in a way that was reusable and overall writing less code. Another win during this project was furthering my understanding of working off my data model. I found this project to be especially insightful in how this process works.

The biggest challenge I encountered in this project was effectively randomizing my data model elements. I was initially able to randomize the arrays, but I found I was calling my function twice in the DOM creating problems with my quote and ID not matching. After some thought, I found that I needed to find a way only to call my function one time when working with the DOM. This simplified my code and opened the door to a better understanding of how my data model and DOM interacted. This also led me to a more simplified way of removing affirmations/mantras by event listeners.
 