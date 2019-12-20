var numberOfUniqueEmails = function(emails) {
    //define a set
    var set = new Set();
    // iterating over the list of emails
    for (var i = 0; i < emails.length; i++) {
	// split email by '@' into an array 	
        var split_str = emails[i]. split("@");
	// get the second part from the split_str array 
	var domain = split_str[1];
	// remove '.' from the original email string    
    	var email_string = emails[i].split(".").join("");
	// get index of '+' from the email_string
	var index_plus = email_string.indexOf('+');
      	// if index of '+' is found,remove characters after '+' 
        if(index_plus !== -1)
	    email_string = email_string.substring(0, index_plus);
        else{
	//if index of '+' is not found, take the whole string before '@'	
            var index_at = email_string.indexOf('@');
            email_string = email_string.substring(0, index_at);
        }
        //create a final string by concatenating email_string and domain
	var final_string = email_string+"@"+domain;
	// add email into set
	set.add(final_string);
    }
    // Return set size. Since set stores unique values, we can count number of unique email addresses.
    return set.size;
    
};

// to test the function
console.log(numberOfUniqueEmails(['test.email@gmail.com', 'test.email+spam@gmail.com','testemail@gmail.com']));
