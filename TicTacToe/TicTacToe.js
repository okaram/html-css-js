
function GameState() {
	this.board=[ [0,0,0],[0,0,0],[0,0,0] ];
	this.nextPlayer=1;
	this.togglePlayer=function() { this.nextPlayer=(this.nextPlayer==1? 2:1);}
	this.playerClass=function() { return this.nextPlayer==1? 'p1':'p2';}
	
	// returns 1 or 2 if they could win, 0 if no winner
	this.currentWinner=function() {
		for(var row=0; row<3; ++row) {
			if((this.board[row][0]!=0) && (this.board[row][0]==this.board[row][1]) && (this.board[row][1]==this.board[row][2]))
				return this.board[row][0];
		}

		for(var col=0; col<3; ++col) {
			if((this.board[col][0])!=0) 
				if(this.board[0][col]==this.board[1][col])
					if(this.board[1][col]==this.board[2][col]) 
						return this.board[0][col];
		}
		
		if(this.board[0][0]!=0 && this.board[0][0]==this.board[1][1] && this.board[1][1]==this.board[2][2])
			return this.board[0][0];

		if(this.board[0][2]!=0 && this.board[0][2]==this.board[1][1] && this.board[1][1]==this.board[2][0])
			return this.board[0][2];
		
		return 0;
	}
	
	this.setMark=function(row,col,player) {
		this.board[row][col]=player;
	}
	this.resetBoard=function() {
		this.board=[ [0,0,0],[0,0,0],[0,0,0] ];
		this.nextPlayer=1;
	}
	this.isFull=function(){
		for(var row=0; row<3; ++row) {
			for(var col=0; col<3; ++col) {
				if(this.board[row][col]==0)
					return false;
			}
		}
		return true;
		
	}
	return this;
}

state=new GameState();

resetBoard=function() {
	state.resetBoard(); // player is p1, board is all empty
	
	$('td').removeClass('p1'); // make the visible board all empty
	$('td').removeClass('p2');
	$('td').addClass('e');
	
	$('#nextPlayer').removeClass('p2'); // make next player display img for  p1
	$('#nextPlayer').addClass('p1');
	
	}
toggleNextPlayer=function() {
	$('#nextPlayer').removeClass(state.playerClass());
	state.togglePlayer();
	$('#nextPlayer').addClass(state.playerClass());
}

tdClick=function(e) {
//	console.log('click'+this+" "+$(this));
	if($(this).hasClass('e')) {
		$(this).removeClass('e');
		$(this).addClass(state.playerClass());
		state.setMark(this.parentNode.getAttribute('r'),this.getAttribute('c'), state.nextPlayer);
		var w=state.currentWinner();
		if(w!=0) {
			alert("Player "+w +" won !!");
			resetBoard();
		} else if(state.isFull()) {
			alert("tie !!");
			resetBoard();
		} else
			toggleNextPlayer();
		
	}
}