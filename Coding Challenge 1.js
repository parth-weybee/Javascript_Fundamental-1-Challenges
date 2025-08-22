const heightMark = 100;
const widthMark = 80;
const heightJone = 100;
const widthJone = 80;

const bmiMark = weightMark / (heightMark*heightMark); 
const bmiJone = weightJone / (heightJone*heightJone);

const isMarkBmiGreater = bmiMark > bmiJone;

console.log(isMarkBmiGreater);