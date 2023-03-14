const express = require('express');
const router = express.Router();
const MaisInfo = require('../models/MaisInfo');

// Test route

router.get('/test', (req, res) => {
  res.send('Deu certo');
});

// Job add via post

router.post('/add', (req, res) => {

  let { id, cor_de_fundo, cor_caixa_link, cor_de_fonte, cor_fonte_link, titulo_primario, cabecalho_citacao, img_fundo_cabecalho, img_perfil, link_instagram, link_facebook, link_email, link_whatsapp, img_link_01, img_link_02, img_link_03, img_link_04, img_link_05, img_link_06, link_01, link_02, link_03, link_04, link_05, link_06, texto_link_01, texto_link_02, texto_link_03, texto_link_04, texto_link_05, texto_link_06, numero_de_links, copywrite } = req.body;

  // Insert

    MaisInfo.create({
    id, cor_de_fundo, cor_caixa_link, cor_de_fonte, cor_fonte_link, titulo_primario, cabecalho_citacao, img_fundo_cabecalho, img_perfil, link_instagram, link_facebook, link_email, link_whatsapp, img_link_01, img_link_02, img_link_03, img_link_04, img_link_05, img_link_06, link_01, link_02, link_03, link_04, link_05, link_06, texto_link_01, texto_link_02, texto_link_03, texto_link_04, texto_link_05, texto_link_06, numero_de_links, copywrite

      // id: 1,
      // cor_de_fundo: '#fff',
      // cor_caixa_link: '#ddd',
      // cor_de_fonte: '#000',
      // cor_fonte_link: '#dfd',
      // titulo_primario: 'Heleno Salgado Lopes',
      // cabecalho_citacao: '',
      // img_fundo_cabecalho: '',
      // img_perfil: '',
      // link_instagram: '',
      // link_facebook: '',
      // link_email: '',
      // link_whatsapp: '',
      // img_link_01: '',
      // img_link_02: '',
      // img_link_03: '',
      // img_link_04: '',
      // img_link_05: '',
      // img_link_06: '',
      // link_01: '',
      // link_02: '',
      // link_03: '',
      // link_04: '',
      // link_05: '',
      // link_06: '',
      // texto_link_01: '',
      // texto_link_02: '',
      // texto_link_03: '',
      // texto_link_04: '',
      // texto_link_05: '',
      // texto_link_06: '',
      // numero_de_links: '',
      // copywrite: ''
    
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
  
})

module.exports = router;