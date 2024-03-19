// import path from 'path';
// import fs from 'fs';
// import express from 'express';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
// import cors from 'cors'; // Import cors module
// import App from '../src/App';
// import Home from '../src/pages/home';

// const PORT = 3500;
// const app = express();

// // Middleware to handle server-side rendering
// const serverRenderer = (req, res, next) => {
//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('An error occurred');
//     }
//     const context = {};
//     const html = data.replace(
//       '<div id="root"></div>',
//       `<div id="root">${ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={context}>
//           <Home />
//         </StaticRouter>
//       )}</div>`
//     );
//     return res.send(html);
//   });
// };

// // Enable CORS for all routes
// app.use(cors());

// // Serve static files from the build directory
// const publicPath = express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' });
// app.use(publicPath);

// // Handle all requests with server-side rendering middleware
// app.get('*', serverRenderer);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`SSR running on port ${PORT}`);
// });
