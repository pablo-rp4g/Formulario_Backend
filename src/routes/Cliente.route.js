const {Router}=require('express')
const router=Router()
const ClienteCtrl=require('../controllers/Cliente.controller')
const Auth=require('../helpers/Auth')

router.post('/crear',Auth.verificartoken,ClienteCtrl.crear)
router.get('/listar',Auth.verificartoken,ClienteCtrl.listar)
router.get('/listarid/:id',Auth.verificartoken,ClienteCtrl.listarid)
router.get('/listarClientesPorJefe/:id',Auth.verificartoken,ClienteCtrl.listarClientesPorJefe)
router.delete('/eliminar/:id',Auth.verificartoken,ClienteCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificartoken,ClienteCtrl.actualizar)
//router.put('/actualizaValida/:id',Auth.verificartoken,ClienteCtrl.actualizarValida)//** */
router.get('/buscar/:nombres',Auth.verificartoken,ClienteCtrl.buscarcliente)

module.exports=router