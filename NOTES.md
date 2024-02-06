Please add any additional notes here…

# Setup
used 'npm install' - tried installing 'yarn' and setting it up however I have tested 'npm run dev' and 'npm run test' and they run the server successfully so will continue under this.

# GET Cards

## first commit
I have used Typescript before but in a limited fashion and not to build an API, however I like a challenge and will do my best to cobble together an API using Typescript and my knowledge of JavaScript. First challenge was, while setting up an initial test to receive a response from the server, changing my normal export functionality to export a module across my MVC artitecture.

The second challenge was getting the correct form of Promises/async to match Typescript's declarative types. fs.readFile is the obvious go-to for getting the data out, though initial usage of it has run into problems with detecting the json files. To start with I am using Promise<any> to ensure compatability, and async/await for syntactic sugar. A first success is getting a response from the server on one test.

## second commit 
I solved the fs.readFile dilemma by using __dirname after figuring it was a problem with the pathing. I now have the data being sent through.

I put in a new test to check the functionality of '/cards'. After parsing the JSON result, I confirmed that it matched the shape of the JSON object.