const http = require('http');

const allNames = [{
    name: 'Anna',
    age: '24',
    location: 'London'
},
{
    name: 'Miki',
    age: '10',
    location: 'London'
}]

let newName;

const requestListener = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.statuscode = 200;
    let body;

    switch(req.url) {
        case '/':
            body = "Hello there!"
        break;
        case '/greeting':
            body = "How are you?"
        break; 
        case '/name':
            if (req.method === 'GET') {
                body = { name : allNames}
            } else if (req.method === 'POST') {
                let reqBody = [] 
                req.on('data', chunk => reqBody.push(chunk)); 
                req.on('end', () => {
                    newName = JSON.parse(reqBody);
                    console.log(newName);
                    body = changeName(newName)
                    // allNames.push(newName); // push the parsed data to our allNames collection
                })
            };
        break;
        default:
            res.statuscode = 404;
            body = { error: 'Unknown Route'};    
    };

    res.end(JSON.stringify(body)); // This is where the response is sent back
};

function changeName(input) {
    console.log('dkfjdf');
    return input.split("").reverse().join("");
    
}

const port = 8000;
const host = 'localhost'

const server = http.createServer(requestListener);
server.listen(port, host, () => console.log(`This is the your server: http://${host}:${port}`));
