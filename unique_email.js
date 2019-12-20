var numberOfUniqueEmails = function(emails) {
    
    var set = new Set();
    
    for (var i = 0; i < emails.length; i++) {
		
        var split_str = emails[i]. split("@");
		var domain = split_str[1];
    	var email_string = emails[i].split(".").join("");
		var index_plus = email_string.indexOf('+');
      
        if(index_plus !== -1)
		    email_string = email_string.substring(0, index_plus);
        else{
            var r = email_string.indexOf('@');
            email_string = email_string.substring(0, r);
        }
        
		var final_string = email_string+"@"+domain;
		set.add(final_string);
    }
    
    return set.size;
    
};


console.log(numberOfUniqueEmails(['test.email@gmail.com', 'test.email+spam@gmail.com','testemail@gmail.com']));