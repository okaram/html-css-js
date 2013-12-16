grades = ['k','1','2','3','4','5']; 
salutations = ['Mr','Ms'];

// Overall viewmodel for this screen, along with initial state
function BoardModel() {
    var self = this;
	self.currentPlayer=ko.observable();
	
	
    self.showAll = function() {
        alert(ko.toJSON(self));
        ko.utils.postJson($('form')[0], self)
    }

    
	self.save = function(form) {
        alert("Could now transmit to server: " + ko.utils.stringifyJson(self.gifts));
        // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
    };
}

