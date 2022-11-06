# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

- Display a dataset of customer related construction machines in a responsive layout
    - As part of an internal web application, we need an overview of specific customer related construction machines to check the validity of service contracts and warranties. 
    - Our dispatchers in the head office require a sortable general overview to quickly get an idea of how many contracts or warranties have already expired.
    - Our service staff, on the other hand, need to be able to compare this data on site using the serial number of the machine.

- Pour some sugar on it! (nice to have)
    - Add a little extra feature. What do you think could be useful for our stakeholders? Be creative and show us your strengths (For example: create animated graphs, use QR codes or do whatever comes to your mind).

- write test(s)
    - Write at least one simple unit or functional test for the code that you developed with any framework you want!



## Application Setup

Build the Docker image:

```
docker build . -t react-assignment
```

Run the image:

```
docker run -p 3000:80 -d react-assignment
```

