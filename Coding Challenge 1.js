const heightMark = 1.88;
const weightMark = 80;
const heightJone = 1.75;
const weightJone = 70;

const bmiMark = weightMark / (heightMark*heightMark); 
const bmiJone = weightJone / (heightJone*heightJone);

const isMarkBmiGreater = bmiMark > bmiJone;

console.log(isMarkBmiGreater);