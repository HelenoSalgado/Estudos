const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const MaisInfo = db.define('mais_info', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cor_de_fundo: {
    type: DataTypes.STRING,
  },
  cor_caixa_link: {
    type: DataTypes.STRING,
  },
  cor_de_fonte: {
    type: DataTypes.STRING,
  },
  cor_fonte_link: {
    type: DataTypes.STRING,
  },
  titulo_primario: {
    type: DataTypes.STRING,
  },
  cabecalho_citacao: {
    type: DataTypes.STRING,
  },
  img_fundo_cabecalho: {
    type: DataTypes.STRING,
  },
  img_perfil: {
    type: DataTypes.STRING,
  },
  link_instagram: {
    type: DataTypes.STRING,
  },
  link_facebook: {
    type: DataTypes.STRING,
  },
  link_email: {
    type: DataTypes.STRING,
  },
  link_whatsapp: {
    type: DataTypes.STRING,
  },
  img_link_01: {
    type: DataTypes.STRING,
  },
  img_link_02: {
    type: DataTypes.STRING,
  },
  img_link_03: {
    type: DataTypes.STRING,
  },
  img_link_04: {
    type: DataTypes.STRING,
  },
  img_link_05: {
    type: DataTypes.STRING,
  },
  img_link_06: {
    type: DataTypes.STRING,
  },
  link_01: {
    type: DataTypes.STRING,
  },
  link_02: {
    type: DataTypes.STRING,
  },
  link_03: {
    type: DataTypes.STRING,
  },
  link_04: {
    type: DataTypes.STRING,
  },
  link_05: {
    type: DataTypes.STRING,
  },
  link_06: {
    type: DataTypes.STRING,
  },
  texto_link_01: {
    type: DataTypes.STRING,
  },
  texto_link_02: {
    type: DataTypes.STRING,
  },
  texto_link_03: {
    type: DataTypes.STRING,
  },
  texto_link_04: {
    type: DataTypes.STRING,
  },
  texto_link_05: {
    type: DataTypes.STRING,
  },
  texto_link_06: {
    type: DataTypes.STRING,
  },
  numero_de_links: {
    type: DataTypes.INTEGER,
  },
  copywrite: {
    type: DataTypes.STRING
  }

}, // { freezeTableName: true }
);

module.exports = MaisInfo;