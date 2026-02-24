
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans :- first of all these are the ways to get html element by using js dom and dynamically we can manipulate our html**

**i) getElementById :-  we can get one element by the specific id . In the example we have get element by specific id of interview-filter-btn**

**Example :- const interviewFilterBtn = document.getElementById("interview-filter-btn")**

**ii) getElementsByClassName :- we can get all elements by specific class . suppose in google playstore If you want to download car games, google provides a section like car games if we click we can get all games which belongs to car games**

**Example:- const carGames = document.getElementsByClassName("car-game");**

**iii) queryselector :- it uses css selector to get the element for className(".") or Id("#") before the className or id . it returns first element which match**

**Example:- let firstCard = document.querySelector(".newCard"); will return first card from all cards**

**iv) querySelectorAll :- it just a updated version of queryselector like we can access all cards unlike only first card . it returns all elements with specific class**

**Example :- let allCard = document.querySelectorAll(".newCard"); will return all cards**

<!-- ------------------------------------------------------------------------------------------->

 ## 2. How do you create and insert a new element into the DOM?

 **Ans :- i) for create element we use :-  document.createElement();**
  **Example :- let div = document.createElement("div");**

  **ii) for insert a new element :- append or appenappendChild**
  **Example :- interviewSection.appendChild(div);**

<!-- ------------------------------------------------------------------------------------------->

## 3.What is Event Bubbling? And how does it work?

**Ans :- when an event triggered on a child it goes to the parent like bubble**

<!-- ------------------------------------------------------------------------------------------->

## 4. What is Event Delegation in JavaScript? Why is it useful?

**Ans :- it's a technique we add event listener to a parent element instead of adding event listeners to multiple child elements.**

<!-- ------------------------------------------------------------------------------------------->

## 5. What is the difference between preventDefault() and stopPropagation() methods?

**Ans :-**

**i) PreventDefault() :-  it's a method which cancels the event if it is cancelable that means it prevents to trigger some event**

**Example :- if you click on submit button of a form normally page reloads and sends the form but preventDefault will stop this**

**ii) stopPropagation() :- it's a method to stop propagation as we have familiar with event bubbling it stops the that. Child element will not able to get parent element**




























