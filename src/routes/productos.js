const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', ( req , res ) => {
 mysqlConnection.query('SELECT * FROM productos', (err, rows, fields) => {
     if (!err) {
         res.json(rows);
     } else {
         console.log(err);
     }
 })
});

router.get('/:idprod', (req, res) => {
    const {idprod} = req.params;
    mysqlConnection.query('SELECT * FROM productos WHERE idprod = ?', [idprod], (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});


router.post('/', (req, res) => {
    const { idprod, descripcion, marca, existencia, categoria} = req.body;
    const query=`
    CALL productosaddoredit (?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [idprod, descripcion, marca, existencia, categoria], (err, rows, fields) =>{
        if (!err){
            res.json({Status: 'Producto guardado'});
        }else{
            console.log(err);
        }
    })
});

router.put('/:idprod', (req, res) => {
    const { descripcion, marca, existencia, categoria } = req.body;
    const {idprod} = req.params;
    const query = 'CALL productosaddoredit(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [idprod, descripcion, marca, existencia, categoria], (err, rows, fields) => {
        if (!err){
            res.json({Status: 'Producto actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:idprod', (req, res) => {
    const {idprod} = req.params;
    mysqlConnection.query('DELETE FROM productos WHERE idprod = ?', [idprod], (err, rows, fields) => {
        if (!err){
            res.json({Status: 'producto eliminado'});
        }else{
            console.log(err);
        }
    })
})



module.exports = router;