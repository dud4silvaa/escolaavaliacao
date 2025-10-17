import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const read = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const professor = await prisma.professor.create({
      data: { nome, email, senha }
    });
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const professor = await prisma.professor.update({
      where: { id },
      data
    });
    res.json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const del = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.professor.delete({
      where: { id }
    });
    res.json({ message: 'Professor deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};