/**import http from 'http';
const PORT = 3000;

const studentDataBase = [
    {
        name:"swapnil",
        age:24,
        gender:"male"
    }
];

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    console.log(url,method);
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify({
        data: "hello swapnil",
    }))
});

server.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}/`);
});*/


import http from 'http';

const PORT = 3000;

const studentDataBase = [
    {
        id: 1,
        name:"swapnil",
        age:24,
        gender:"male"
    },
    {
        id: 1,
        name:"vrushabh",
        age:25,
        gender:"male"
    }
];

const server = http.createServer((req, res) => {
    const path = req.url
    const method = req.method
    console.log(path,method);
    res.writeHead(200, {'Content-type': 'application/json'});

     if(path === "/students" || path === "/students/"){
        if(method === "GET"){
            res.end(JSON.stringify({message:"student get api called",data: studentDataBase}))
        }
        if(method === "POST"){
            res.end(JSON.stringify({message:"student post api called",data: null}))
        }
        if(method === "PUT"){
            res.end(JSON.stringify({message:"student put api called",data: null}))
        }
        if(method === "DELETE"){
            res.end(JSON.stringify({message:"student delete api called",data: null}))
        }
     }



    res.end(JSON.stringify({
        data: "no api  found ",
    }))
});

server.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}/`);
})