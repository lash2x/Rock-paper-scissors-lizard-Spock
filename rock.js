//r=rock, p=paper, s=scissors, l=lizard, z=spock
let userScore = 0;
let compScore = 0;
let comp1Score= 0;

const youWin = document.getElementById("youWin")
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const compONeScore_span = document.getElementById("comp1Score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");
const lizard_div =document.getElementById("l");
const spock_div =document.getElementById("z");

function getComputerChoice(){
const choices = ['r','p','s','l','z'];
const randomNumber = Math.floor(Math.random() * 5)
return choices[randomNumber];
}
function getComputerChoiceOne(){
const choices_one = ['r','p','s','l','z'];
const randomNumber_one = Math.floor(Math.random() * 5)
return choices_one[randomNumber_one];
}

function win(){ 

userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
compONeScore_span.innerHTML = comp1Score;
youWin.innerHTML= "YOU WON!!!";
}

function compx(){ 
compScore ++
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
compONeScore_span.innerHTML = comp1Score;
youWin.innerHTML="COMP  WON!!!";
}

function compc(){
comp1Score++
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
compONeScore_span.innerHTML = comp1Score;
youWin.innerHTML="COMP 1 WON!!!";
}

function tie(){ 
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
compONeScore_span.innerHTML = comp1Score;
youWin.innerHTML="ITS A TIE!!!";


}


function game(userChoice) {
	const computerChoice= getComputerChoice();
	const computerChoiceOne = getComputerChoiceOne();
	switch (userChoice + computerChoice + computerChoiceOne){

		case "rsl":
		case "rls":
		case "prz":
		case "pzr":
		case "spl":
		case "slp":
		case "lzp":
		case "lpz":
		case "zrs":
		case "zsr":
		win() 
		;
		break
		case "srl":
		case "lrs":
		case "rpz":
		case "zpr":
		case "psl":
		case "lsp":
		case "zlp":
		case "plz":
		case "rzs":
		case "szr":
		compx()
		;
		break
		case "slr":
		case "lsr":
		case "rzp":
		case "zrp":
		case "pls":
		case "lps":
		case "zpl":
		case "pzl":
		case "rsz":
		case "srz":
		compc();
		break
				break
		case"rrr":
		case"ppp":
		case"lll":
		case"sss":
		case"zzz":
		case"rps":
		case"rsp":
		case"spr":
		case"srp":
		case"prs":
		case"psr":
		case"rzl":
		case"rlz":
		case"lrz":
		case"lzr":
		case"zlr":
		case"zrl":
		case"slz":
		case"szl":
		case"lsz":
		case"lzs":
		case"zls":
		case"zsl":
		case"rpl":
		case"rlp":
		case"plr":
		case"prl":
		case"lpr":
		case"lrp":
	tie()
		;

		
	}
	console.log (computerChoice)
console.log(computerChoiceOne)
	}

function main() {
	rock_div.addEventListener('click', function() {
	game("r");
	})

	paper_div.addEventListener('click', function() {
	
	game("p");
	})

	scissors_div.addEventListener('click',function() {
	game("s");
	})
	lizard_div.addEventListener('click', function() {
	game("l");
	})

	spock_div.addEventListener('click', function() {
	game("z");
	})
};
main();