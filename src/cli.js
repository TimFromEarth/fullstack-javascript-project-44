import readLineSync from 'readline-sync';

const greetings = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetings;
