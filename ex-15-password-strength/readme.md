<!------

Regular expressions or RegEx are sequences of characters that define a pattern in a string. We can use regular expressions to do things like remove certain characters in a string or check whether a string matches a set of criteria. In this challenge, you'll build a password validator for a signup form, which tests whether or not a user's desired password is strong enough. You must use a regular expression in your solution. If the user's password is strong enough, return the string, your password is valid. Otherwise, return the string, your password is invalid. You must also use a ternary operator to return a Boolean value. Ternary operators check to see if a certain condition has been met. We follow the expression we want to check with a question mark, and if the condition is truthy, it will execute the code following the question mark. The truthy expression is followed by a colon. And if the condition is falsy, it will execute the following code. Here are the criteria which must be met in order for a password to be strong enough.

1. The password must have at least one lowercase letter.
2. The password must have at least one uppercase letter.
3. It must contain one digit and one special character.
4. And it must be at least eight characters long.

---->
