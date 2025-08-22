const heightMark = 100;
const weightMark = 80;
const heightJone = 100;
const weightJone = 70;

const bmiMark = weightMark / (heightMark*heightMark); 
const bmiJone = weightJone / (heightJone*heightJone);

const isMarkBmiGreater = bmiMark > bmiJone;

if(isMarkBmiGreater)
{
    console.log(`Mark's BMI (${bmiMark}) is Higher then Jone's BMI (${bmiJone})`)
}
else
{
    console.log(`Jone's BMI (${bmiJone}) is Higher then Mark's BMI (${bmiMark})`)
}