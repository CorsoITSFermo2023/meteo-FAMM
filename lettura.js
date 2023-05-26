const { Router } = require("express");
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require("./lettura.dao")

const router = Router()

router.get("/", async (req,res) => {
    const lista = await listLetture({1:1});
    res.json(lista);
})
router.put('/', async (req,res) =>{
    const lettura= await updateLettura()
    res.json(lettura)
})
router.post('/:idLettura', async (req,res) =>{
    const lettura= await insertLettura(req.body.previsione,req.body.dataora,req.body.provincia, { id: req.params.idLettura })
    res.json(lettura)
})
router.delete('/', async (req,res) =>{
const lettura = await deleteLettura({ id: previsione.id });
  res.json(lettura)
})

module.exports = router