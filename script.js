
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const inputQueue = [];
const solutionQueue = [1, 3, 2, 4];

function isQueuePromising() {
	//console.log(inputQueue);
	for (let i = 0; i < inputQueue.length; i++) {
		if (inputQueue[i] != solutionQueue[i])
			return false;
	}
	return true;
}
function isQueuesEqual() {
	if (inputQueue.length != solutionQueue.length)
		return false;
	return isQueuePromising();
}
function clearInputQueue() {
	while (inputQueue.length > 1)	//leaves the last element alive
		inputQueue.shift();
}
function checkQueueProgress() {
	if (!isQueuePromising()) {
		console.log("queue broken");
		clearInputQueue();
	}
}
function checkVictory() {
	if (isQueuesEqual()) {
		alert("Последовательность правильная!\nВам 1 [подарок]!");	//violation
		clearInputQueue();
	}
}



btn1.addEventListener('click', () => {
	console.log("input 1");
	inputQueue.push(1);
	checkQueueProgress();
	checkVictory();
});
btn2.addEventListener('click', () => {
	console.log("input 2");
	inputQueue.push(2);
	checkQueueProgress();
	checkVictory();
});
btn3.addEventListener('click', () => {
	console.log("input 3");
	inputQueue.push(3);
	checkQueueProgress();
	checkVictory();
});
btn4.addEventListener('click', () => {
	console.log("input 4");
	inputQueue.push(4);
	checkQueueProgress();
	checkVictory();
});
btn5.addEventListener('click', () => {
	console.log("input 5");
	inputQueue.push(5);
	checkQueueProgress();
	checkVictory();
});
btn6.addEventListener('click', () => {
	console.log("input 6");
	inputQueue.push(6);
	checkQueueProgress();
	checkVictory();
});

