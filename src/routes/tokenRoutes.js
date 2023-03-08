import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', TokenController.store);

export default router;
/*
index > lista todos os usuários> GET
store/create > cria um novo usuário> POST
delete > apaga um usuário> DELETE
show >mostra um usuário> GET
update>atualizar um usuário> PATCH OU PUT
*/
