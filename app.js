const http= require('http');
const fs= require('fs');

function reListener(req,res){

}
const server=http.createServer((req,res)=>{
    const url =req.url;
    if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"/> <button type="submit">Send</button></form></body>');
    res.write('</htnl>');
     return res.end()
    }

    if(url==='/message'){
         fs.writeFileSync('message.txt','Dummy')
         res.statusCode=302;
         res.setHeader('Location','/')
         return res.end()
    }
    console.log(req)
    // process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1>Hello Ok server</h1></body>');
    res.write('</htnl>');
    res.end()
})

server.listen(30001)