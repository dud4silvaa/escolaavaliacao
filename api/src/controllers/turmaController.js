import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const read = async (req, res) => {
  try {
    const turmas = await prisma.turma.findMany();
    res.json(turmas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nome, ano, professorId } = req.body;
    const turma = await prisma.turma.create({
      data: { nome, ano, professorId }
    });
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const turma = await prisma.turma.update({
      where: { id },
      data
    });
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const del = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.turma.delete({
      where: { id }
    });
    res.json({ message: 'Turma deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};