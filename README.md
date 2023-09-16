
# Course Registration

This a site about some programming concept course.
Check for some of the courses.


## Here are some of the fantastic features of this page.

- ### (1) Information and Interactive Cards
- **Image**: So firsly on the top of the card you will see a image or a banner of the course.
- **Title**: Basically the title holds the Information of what is the course is about.
- **Description**: Information cards gives a overview of what is the course is about.
- **Usage**: To select course about an course, simply click on the select button. The course will be added to the cart box.


- ### (2)  Toast Notifications for Cart Interaction

This project includes a feature that React toast notifications to see real-time feeedbacks when they interact with the cards. When a user clicks the same course twice, a toast notification appears, confirming the conditional term of the course to the cart.

- **How to Use :**

To test the toast notifications for cart, follow these steps:

1. Browse the available course.
2. Click the "select" button for an item you wish to add to your cart.
3. A toast notification will appear if the credit hours exceed the maximum value. Also appear when you click same course twice.
4. The cart display the selected course name in real-time in the cardBox.
5. And also added the total price to the cart box.

- ### (3)  Interective Cart Box

Basically cart box shows how many course have you selected from the page. And show the credit hours, total price and the name of the course dinamically.

- **Usage :**
1. Browse the available products or items.
2. When you find an course you want to purchase, click the "Select" button.
3. The selected course name will be added to your cart, and the cart box will display a list of the added course.




# State Management in My Assignment

In this project, I have managed the state using React's functional components. Actuallly two hooks - `useState` and `useEffect`.
Props drilling, and state lifting to create a structured and efficient React application. This README will give an overview of how state management.

## This is how I managed the state.

- ### Functional Components

I used functional components which are are a modern way to React development.

- ### useState Hook

The `useState` hook is a way to store my data of the course. I used it to store my courses data. And also the price and credit hours. And also updated the value of the state with the setState method.

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // ...
}
```
- ### useEffect Hook

The `useEffect` hook is helped me to handle the side effect. I used it to fetch my courses data with an empty dependency array. So that the data just fetch one time.

```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {

    return () => {
    };
  }, [dependency]);
}
```
- ### StateLifting and Props drilling

1. I have fetched the data to the root component of all the components. Which is called the state lifting. So that I can easily give the props to other components.
2. Next this is props drilling. Because the props can go only parent component to the child component the state. So the stateLifting is helped to give all the child the props I need. The props can only go parent to child and so it's unidirectional. It is called props drilling just like the drill machine goes up to inside to make a hole.  


