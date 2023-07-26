// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create route handler
// 5. Start web server
// 6. Test

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create router
const router = express.Router();

// 3. Create route
router.get('/', (req, res) => {
  res.send('comments');
});

router.get('/new', (req, res) => {
  res.send('new comment');
});

router.get('/:id', (req, res) => {
  res.send(`comment ${req.params.id}`);
});

router.get('/:id/edit', (req, res) => {
  res.send(`edit comment ${req.params.id}`);
});

// 4. Create route handler
app.use('/comments', router);

// 5. Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 6. Test
// http://localhost:3000/comments
// http://localhost:3000/comments/new
// http://localhost:3000/comments/1
// http://localhost:3000/comments/1/edit