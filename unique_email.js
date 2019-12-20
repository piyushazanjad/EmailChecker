var numberOfUniqueEmails = function(emails) {
    
    var set = new Set();
    
    for (var i = 0; i < emails.length; i++) {
		
        var split_str = emails[i]. split("@");
		var domain = split_str[1];
    	var email_string = emails[i].split(".").join("");
        email_string = email_string.replace(/\+.*\@/,'@');
		var final_string = email_string+"@"+domain;
		set.add(final_string);
    }
    
    return set.size;
    
};


console.log(numberOfUniqueEmails(['test.email@gmail.com', 'test.email+spam@gmail.com','testemail@gmail.com']));