import { createServer} from 'http';

const port = process.env.PORT || 300;

const server = createServer((req, res) => {
    console.log('Request received:', req.method, req.url)
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});