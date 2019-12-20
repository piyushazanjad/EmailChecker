var numberOfUniqueEmails = function(emails) {
    
    // define a set
    var set = new Set();
    
    // iterate over the list of emails
    for (var i = 0; i < emails.length; i++) {
		// split the email by '@' character
        var split_str = emails[i]. split("@");
		// get second part of the split_str for domain
		var domain = split_str[1];
		// remove '.' from the email and create a new string 'email_string'
    	var email_string = emails[i].split(".").join("");
		// replace anything in between '+ and @' to @
	    email_string = email_string.replace(/\+.*\@/,'@');
	    var index_at = email_string.indexOf('@');
		// take string until '@' charater
	    email_string = email_string.substring(0, index_at);
	    var final_string = email_string+"@"+domain;

	    // add the final_string to the set
	    set.add(final_string);
	    
    }
    // Return set size. Since set stores unique values, we can count no of unique email addresses using size.
    return set.size;
    
};


console.log(numberOfUniqueEmails(['test.email@gmail.com', 'test.email+spam@gmail.com','testemail@gmail.com']));
