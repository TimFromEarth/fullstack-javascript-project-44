import readLineSync from 'readline-sync';

export const greetings = () => {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};