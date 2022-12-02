
Week 1 Code Challenge - Assignment

In this assignment there are three challenges

1: First challenge is to generate student grades
2: Second challenge is to detect car speed
3: Thrid challenge is to calculate net salary of an employee

Challenge 1

I have imlemented a function called 'grades'. It will output grades A, B , C, D, E. Each grade depends student marks between 0-100. For instance, if student marks is 79 to 100 than the code will output A.

Challenge 2

In this, we have a function called 'speedCar'. It caluclates differnce between normal speed and high speed. If the speed is greater than 70 it will output demerit points and if the demerit point is greater than 12 points thqn it will suspend license. 

Challenge 3

This third challenge has a function called 'basicSalary'. It calculates monthly net salary of an employee. It takes gross salary as an input and makes Tax, NHIF and NSSF deductions. After deductions it will output net salary of an output.










Implement a function called `saturdayFun`:

- It should define a function
- It uses a default argument, `'roller-skate'` when no arguments are passed
  - allows the default argument to be overridden

Implement a function called `mondayWork`:

- It should define a function
- It uses a default argument, `'go to the office'` when no arguments are passed
  - allows the default argument to be overridden

Implement a function called `wrapAdjective`:

- It should return a function
  - This "inner" function should:
    - take a single parameter that should default to `"special"`. Name it
      however you wish.
    - return a `String` of the form "You are ..." where `...` should be the
      adjective this function received wrapped in visual flair
- It should take as parameter a `String` that will be used to create visual flair
- You may call the parameter whatever you like, but its default value should
  be `"*"`
- Call example: `const encouragingPromptFunction = wrapAdjective("!!!")`

Thus a total call should be:

```js
wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
```