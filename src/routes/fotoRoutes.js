import { Router } from 'express';

import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
/*
index > lista todos os usuários> GET
store/create > cria um novo usuário> POST
delete > apaga um usuário> DELETE
show >mostra um usuário> GET
update>atualizar um usuário> PATCH OU PUT
*/
