import { Router } from 'express';

import * as Atividade from './controllers/atividadeController.js';
import * as Professor from './controllers/authController.js';
import * as Turma from './controllers/turmaController.js';

export const routes = Router();

routes.get('/', (req, res) => {
  res.send('API funcionando!');
});

console.log('Atividade:', Atividade);
console.log('Professor:', Professor);
console.log('Turma:', Turma);

routes.get('/atividades', Atividade.read);
routes.post('/atividades', Atividade.create);
routes.patch('/atividades', Atividade.update);
routes.delete('/atividades', Atividade.del);

routes.get('/professores', Professor.read);
routes.post('/professores', Professor.create);
routes.patch('/professores', Professor.update);
routes.delete('/professores', Professor.del);

routes.get('/turmas', Turma.read);
routes.post('/turmas', Turma.create);
routes.patch('/turmas', Turma.update);
routes.delete('/turmas', Turma.del);

export default routes;