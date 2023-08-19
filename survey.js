const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user what they think of Node.js
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  // Ask user what their name is
  rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
    console.log(`My name is ${answer}`);

    // Ask user what their favourite activity is
    rl.question('What is an activity you like doing? ', (answer) => {
      console.log(`My favourite activity is ${answer}`);

      // Ask user what they like listening to while doing their favourite activity
      rl.question('What do you listen to while doing that? ', (answer) => {
        console.log(`I like listening to ${answer}`);

        // Ask user which meal is their favourite (e.g., dinner, brunch, etc.)
        rl.question('Which meal is your favourite (e.g., dinner, brunch, etc)? ', (answer) => {
          console.log(`My favourite meal is ${answer}`);

          // Ask user what their favourite thing to eat for that meal is
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            console.log(`My favourite thing to eat for that meal is ${answer}`);

            // Ask user what their absolute favourite sport is
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              console.log(`My favourite sport is ${answer}`);

              // Ask user what their superpower is
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                console.log(`My superpower is ${answer}`);
                
                // Close the readline interface
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
