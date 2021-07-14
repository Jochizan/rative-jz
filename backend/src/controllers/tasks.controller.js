import connect from '../db';
import asyncHandler from '../middlewares/asyncHandler';

export const getTasks = asyncHandler(async (req, res) => {
  const db = await connect();
  const [rows] = await db.query('SELECT * FROM tasks');

  res.json(rows);
});

export const getTask = asyncHandler(async (req, res) => {
  const db = await connect();
  const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);

  res.json(rows[0]);
});

export const getTaskCount = asyncHandler(async (req, res) => {
  const db = await connect();
  const [rows] = await db.query('SELECT COUNT(*) FROM tasks');

  res.json(rows[0]['COUNT(*)']);
});

export const createTask = asyncHandler (async (req, res) => {
  const db = await connect();
  const [results] = await db.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [
    req.body.title,
    req.body.description
  ]);
  res.json({
    id: results.insertId,
    ...req.body
  })
});

export const deleteTask = asyncHandler(async (req, res) => {
  const db = await connect();
  await db.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
  res.sendStatus(204);
});

export const updateTask = asyncHandler(async (req, res) => {
  const db = await connect();
  const results = db.query('UPDATE tasks SET ? WHERE id = ?', [
    req.body,
    req.params.id
  ]);
  console.log(results)
  res.sendStatus(204);
});