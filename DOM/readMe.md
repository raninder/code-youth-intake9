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
(https://codepen.io/ericadamski/full/pqaNYG)
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



<ul>
</ul>


<p>I am red
<h3>I am blue
<div>
	<h1>
	<p>
</div>