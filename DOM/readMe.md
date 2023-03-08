6/03/2023
ex1: getElementbyId() chnage color of list of colors
- red
- green
- blue
ex2: getElementsByClassName() change color of list of fruits
- apples
- strawberry
- banana
- kiwi
- grapes
- orange
- lemon

Ex3: create a button with text ON,with background color red and text color white, when you click on a button, its text replaced by OFF, background color black

Ex4: Highlight all of the bold words in the paragraph text (with a yellow background for example)

<h3>DOM Selecting and style</h3>


    <!--1. Using Dom colour in the bee below -->
    <h1>Question 1</h1>

    <div class="bee">
        <div class="beeStinger"></div>
        <div class="beeBody">
            <div class="beeSection"></div>
            <div class="beeSection"></div>
            <div class="beeSection"></div>
            <div class="beeSection"></div>
            <div class="beeSection"></div>
        </div>
        <div id="beeHead"></div>
    </div>





    <!--2. Write the function for this button. When the function runs it should show an alert of whatever the message in the button is -->
    <h1>Question 2</h1>

    <button onclick="printMessage()" id="messageButton" message="You did it!!">Message</button>






    <!--3. Write the spin function. When clicked spin the shape 90 degrees clock-wise -->
    <!-- !Hint: the unit used for rotate is deg     ex(90deg) -->
    <h1>Question 3</h1>

    <div onclick="spin()" class="shape"></div>




ex1:
Give all the images at even position a similar border color and style, and all the images at odd position same border style but different then the even ones.
Ex2: 
Count the number of list items and and add a para tag to show the results.

Ex3: Adding Some Images
You are given a DOM element like <ul class="iamge-list"></ul>. Your job is to add 10 images to that list. For the src attribute you can use https://picsum.photos/200
Ex4:
Add the following elements to the container using ONLY JavaScript and the DOM methods.

		a <p> with red text that says “Hey I’m red!”
		an <h3> with blue text that says “I’m a blue h3!”
		a <div> with a black border and pink background color with the following elements inside of it:
		another <h1> that says “I’m in a div”
		a <p> that says “ME TOO!”
Ex5:
You are given some names of different fruit and an unordered list html element; two button : one to add a list item for each to the unordered list, second to remove item from the list	

https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/21_Day_DOM/21_day_dom.md
https://codepen.io/ericadamski/full/pqaNYG
https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
https://github.com/wesbos/JavaScript30
https://www.crocoder.dev/blog/the-dom-exercises/
https://medium.com/nerd-for-tech/up-your-dom-manipulation-game-through-these-exercises-part-01-103864ac8b0b
https://www.tutorialstonight.com/js/js-dom-events

8/3/2023
1. Implement a 'click' event handler that toggles the 'A' area between the background colors 'silver' and 'gold'.
2. Implement two event handlers for the 'C' area, 'mouseenter' and 'mouseleave'. When the mouse pointer enters the area, its background color changes to "red"; when it leaves the area, its background color changes to "green".

3. Create a page welcome message :

Get the user name in the input field
When the button is pressed add an event that get the user name and creates a welcome message on the page
Add a check to ensure the length of the input is larger than 3 characters long

<ul>
</ul>


<p>I am red
<h3>I am blue
<div>
	<h1>
	<p>
</div>

<h2>DOM Creating and Appending</h2>

    <!-- Write the function for adding the product to the cart -->
    <div class="product">
        <div class="imgDiv">
            <img src="https://m.media-amazon.com/images/I/61jR700-izL._SL1391_.jpg" alt="">
        </div>
        <p class="productDetails"><span class="name">Skateboard</span> $<span class="price">5.99</span></p>
        <button class="addToCart" onclick="addToCart()">Add to Cart</button>
    </div>

    <div class="cart">
        <h1>Cart</h1>
    </div>


    <!-- Using a loop create 15 boxes. give each box the class 'box'. append them to the body so that there are 3 rows of 5 boxes -->
    <!-- !Hint
        it should look like this
        ▢▢▢▢▢
        ▢▢▢▢▢
        ▢▢▢▢▢
    -->



    <!-- Write the function for the flip button. When pressed flip the body upside down. when pressed again it should flip again -->
    <button onclick="flip()">Flip</button>

