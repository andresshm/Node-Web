const http = require('http');


http.createServer((request, response)=>{
    
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content-type': 'application/csv'});
    response.write('hola joeputa');
    response.end();
})
.listen(8081);

console.log('Escuchando el el prt 8081...')