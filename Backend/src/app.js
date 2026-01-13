// src/app.js
import express from 'express';
import aiRoutes from './routes/ai.routes.js'; // ✅ Add .js extension

const app = express();

app.use(express.json()); // ✅ Middleware for JSON body parsing

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/ai', aiRoutes);

export default app; // ✅ ESM export
