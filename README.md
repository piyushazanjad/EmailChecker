# EmailChecker
Function that takes in a list of email addresses and returns an integer indicating the number of unique email addresses.

I have added two approaches:

1. The first approach involves,
    a. splitting the email string by '@', separating local part and domain.
    b. Remove "." from the email_string.
    c. Find the index of "+" and remove the charaters after "+".
    d. combine the result from step c and domain from step a.
    e. Add the final string from step d into a set
    f. Return set size ( set size will return the count of unique email addresses) 
    
2. The second approach involves,
    a. splitting the email string by '@', separating local part and domain.
    b. Remove "." from the email_string.
    c. Repalace anything between + and @.
    e. Add the final string from step c into a set
    f. Return set size ( set size will return the count of unique email addresses) 
    
