import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const read = async (req, res) => {
  try {
    const atividades = await prisma.atividade.findMany();
    res.json(atividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nome, data, turmaId, professorId } = req.body;
    const atividade = await prisma.atividade.create({
      data: { nome, data, turmaId, professorId }
    });
    res.json(atividade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const atividade = await prisma.atividade.update({
      where: { id },
      data
    });
    res.json(atividade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const del = async (req, res) => {
  try {
    const { id } = req.body;
    await prisma.atividade.delete({
      where: { id }
    });
    res.json({ message: 'Atividade deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};