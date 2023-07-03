const http = required("http")
const HomePage = (res) => {
    const data = {
        user: [
            {
                name: "prashant sapkota",
                dob: {
                    date: 2062 / '07' / 14,
                    format: 'yyyy/mm/dd'
                }
            },
            {
                name: "Raj sapkota",
                dob: {
                    date: 2047 / '07' / 14,
                    format: 'yyyy/mm/dd'
                }
            },
        ]
    }
    res.setHeader('content-Type', 'application/json');
    return res.end(JSON.stringify(data));
}
const ContactPage = (res) => {
    const data = {
        companyName: 'prashant pvt.ltd',
        phoneNumber: '9800000000',
        address: 'Damak-5-Jhapa'

    }
    res.setHeader('content-Type', 'application/json');
    return res.end(JSON.stringify(data));
}
const errorMethodMessage = (res) => {
    const data = {
        statusCode: 400,
        errorMessage: 'Page not found'
    }
    res.setHeader('content-Type', 'application/json');
    return res.end(JSON.stringify(data));
}
http.createServer((req, res) => {
    let data = [];
    if (req.url === '/' && req.method === 'POST') {
        //data
        console.log(data, "First console")
        req.on('data', (chunk) => {
            data.push(chunk);
            console.log(chunk, 'chunk')
        });

        req.on('end', () => {
            data = JSON.parse(data);
            console.log(data, 'data after parse');
            res.setHeader('content-Type', 'application/json');
            return res.end(JSON.stringify(data));
        })
    }
    req.on('end', () => {
        if (req.url === '/' && req.method === 'GET') {
            return HomePage(res)
        }
        if (data.length > 0) {
            data = JSON.parse(data);
            res.setHeader('content-Type', 'application/json');
            return res.end(JSON.stringify(data));
        }

        return errorMethodMessage(res)
    })
}).listen(6009);

// const http = require("http")
// const server = http.createServer((req, res)=>{
//     console.log(req);
// });

// server.listen(3000);