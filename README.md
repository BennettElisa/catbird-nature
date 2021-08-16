## Overview:

- The index.js files contains two functions:

1. aboveAndBelowNum

   This function accepts two arguments, an array of integers, and a numeric value. The function returns a string that indicates how many integers in the array are greater than the numeric value passed in as the second argument and how many integers are less than this value. This function also includes error handling for empty array arguments and if the second argument is left undefined.

2. rotateChars

   This function accepts two arguments, a string of characters and a numeric value that indicates how many characters to rotate within the string. If the numeric value is greater than the length of the string along with various other conditions then the original string is returned.

## Q & A

- If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?

Currently, my favorite programming language is JavaScript however it does have some quarks. One thing I would change is building into the language native enums versus creating an object and using the freeze() method to make the properties immutable. However, because enums are not native to JS the freeze method only applies to the top layer properties within the object and nested properties are still mutable. In addition, the way an enum structure is implemented in JS makes the values of the properties susceptible to additional quarks that come with the language such as type coercion. Meaning, if the value of the property is set to an integer value of zero then a strict comparison must be used when checking the value. Otherwise, due to type coercion, an empty string, undefined, or false when compared to an integer value of zero will all evaluate to true. Enums are important because they allow a developer to define a set of named constants that can't be changed or mutated. In many other languages, enums are a special class which is a type. As a result, the quarks that come with JavaScript don't exist.

Introduced in ECMAScript 2015, syntactically sugaring has given JavaScript the illusion of having an object-oriented inheritance model with the class syntax. However, under the hood JavaScript still has a prototype-based inheritance. This can at times get confusing when one also has experience with an object-oriented language where enums are a class type.

At times, it can feel a little extra tedious to create enums in JS. Especially since it's critical to use the freeze method, steer clear of nested properties, and remember to only make comparisons with the strictly equals operator. Perhaps future versions of the language will find a work around to help enums in JS better mimic that of a class type like in other object-oriented languages!
