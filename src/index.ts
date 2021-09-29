import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/values/get/all', async (req, res) => {
  const data = await prisma.values.findMany();
  res.json(data);
});

app.get(`/values/get/:id`, async (req, res) => {
  const { id } = req.params;
  const value = await prisma.values.findFirst({
    where: { id: Number(id) },
  });
  res.json(value);
});

app.post(`/values/post`, async (req, res) => {
  const value = await prisma.values.create({
    data: { ...req.body },
  });
  res.json(value);
});

app.put(`/values/update:id`, async (req, res) => {
  const { id } = req.params;
  const { newValue } = req.body;
  const value = await prisma.values.update({
    where: { id: Number(id) },
    data: { value: newValue },
  });
  res.json(value);
});

app.delete(`/values/delete:id`, async (req, res) => {
  const { id } = req.params;
  const value = await prisma.values.delete({
    where: { id: Number(id) },
  });
  res.json(value);
});

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
);
