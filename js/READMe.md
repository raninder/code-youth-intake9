16/02/2023
# Introduction to javascript
- console.log
- let, var, const
- arithmetic operators (+,-,*,/)

17/02/2023
- typecasting
- operators

int a = 20;
float b = 20.5;
char c= 'a';
string s = 'hello'

let a = 'hello';
a = 25; 

==, equality operator- compares value only
=== strict equality operator -compares value and data type

- logical operators
- comparison opertors
- if-else statements
- multiple if-else
- nested if-else
Ex: 
1. read any day number in integer and display day name in the word.
2. even or odd
3. postive, negative or zero
4. check leap year
5. divisible by 5 or 11
6. check whether a character is vowel or consonant
7. accept a grade and declare the equivalent description : Go to the editor

		Grade	Description
		E	Excellent
		V	Very Good
		G	Good
		A	Average
		F	Fail
8. find no. of days in a month
9. find the greater of three numbers
10. if no. divisible by 3, print three, if divisible by 5 print five, if by both 3 and 5, print threefive
11. read temperature in celsius and display a suitable message according to temperature state below : 
		Temp < 0 then Freezing weather
		Temp 0-10 then Very Cold weather
		Temp 10-20 then Cold weather
		Temp 20-30 then Normal in Temp
		Temp 30-40 then Its Hot
		Temp >=40 then Its Very Hot


1. Input two numbers.
2. com pare one number with the other
3. if one is greater than, print: one is greater
4. goto step1


difference between =, ==,===
=  a=3
== comparison/equality a==3  checks value only
=== strict equality operator, value as well as data type   a=3
a===3

/
%

21/02/2023
# loop
repeat a task/statement certain no. of times
- for, while, do-while


for(initlization;condition;updation){
	//code to be executed
}

Ex1: display first 20 odd natural numbers
1
3
5
7
9
11
13
15
17
19

ex2: input 5 numbers from user and display sum
2+5+4+7+12 = 30

Ex-practice:
1. program to find the sum  and average of first 20 even natural numbers.
2. program that prompts the user to input a positive integer. It should then print the multiplication table of that number. 
3. program to enter 5 numbers from the user and display the count of positive, negative and zeros entered. 
4. program to display the cube of the number upto given an integer. 
Test Data :
Input number of terms : 5
Expected Output :
Number is : 1 and cube of the 1 is :1
Number is : 2 and cube of the 2 is :8
Number is : 3 and cube of the 3 is :27
Number is : 4 and cube of the 4 is :64
Number is : 5 and cube of the 5 is :125
5. Factorial of a number
6. program to keep asking for a number until you enter a negative number. At the end, print the sum of all entered numbers.
7. program to ask for a name until the user enters END. Print the name each time. When you are done, print "I am done."
8. program which iterates the integers from 1 to 100. But for multiples of three print "Three" instead of the number and for the multiples of five print "Five". For numbers which are multiples of both three and five print "Three-Five".

23/02/2023

- break and continue statements within loop
break is used to come out of the loop
continue skip some repetitions

- switch statement

# Functions
- Function declaration/definition
- Function Call
# Functions
1. Find cube using functions
2. Diameter & area of circle using functions   pi=3.142
3. swap two numbers using function
4. program to find the value of one number raised to the power of another using functions. 
5. Functions to perform various arithmetic operations.
6. Write a value-returning function, isVowel that returns the value true if a given character is a vowel, and otherwise returns false. 

24/02/2023
- return statement
- arrow functions

Ex: using arrow functions:
1. return greater of 2 numbers
2. return average of 4 numbers
3. check if leap year or not , return true/false


- arrays -orderly collection of data

array ex:
1. read n number of values in an array and display it in reverse order.
2. sum and average of marks
3. to count total number of even and odd elements in an array.
4. to print all negative elements in an array.
4. search an element in array
5. copy the elements of one array into another array. 
6. find the smallest element in an array.
7. sorting

28/02/2023
array methods
1. Captialize every word in array  let arr = ['red','green','blue','gray','black'];  ['RED','GREEN'...]
2. Given an array of movies, iterate over them using the forEach method of the array type and console.log 				every movie in the array preceded by an ascending number. e.g. 
		1. Titanic  
		2. Avatar
3. find length of each word of array [3, 5,4,4,5]
4. round an array of numbers [10.5, 23.5]   Math.floor   Math.ceil
5. display only odd numbers from an array
6. find the product of odd elements in an array
7. find the sum of squares of an array
8. Capitalize first letter of each word in an array

1/3/2023
1. create an object student with properties:
id,
name,
address,  another object
email,
phone
marks --array 
course:
hobbies-array


in string form display:
student John with id(1) and country(US) got (45) marks in first subject and is interested in these things

2. The Recipe Card

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

3. The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
       const library = [ 
                {
                    title: 'The Road Ahead',
                    author: 'Bill Gates',
                    readingStatus: true
                },
                {
                    title: 'Steve Jobs',
                    author: 'Walter Isaacson',
                    readingStatus: true
                },
                {
                    title: 'Mockingjay: The Final Book of The Hunger Games',
                    author: 'Suzanne Collins',
                    readingStatus: false
                }];
4. Here’s the sample data.

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
		1. Get characters with mass greater than 100
		2. Get characters with height less than 200
		3. Get all male characters
