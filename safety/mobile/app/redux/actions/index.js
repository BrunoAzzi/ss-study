import axios from 'axios';
import {SERVER_URL} from '../../configs';
import {
  FETCH_WIDGETS,
  FETCH_DETALHES,
  FETCH_IMAGE
} from '../consts';

//formato HTTP para obter os Widgets
export const getWidgets = (id_start, num_rows) => {
  const param = `id_start=${id_start}&num_rows=${num_rows}`;
  return `${SERVER_URL}/getWidgets?${param}`;
}
//formato HTTP para obter os detalhes do Widget
export const getDetalhes = (widget) => {
  const param = `widget=${widget}`;
  return `${SERVER_URL}/getDetalhes?${param}`;
}
//formato HTTP para obter imagens dos Widgets
export const getImage = (dir, name) => {
  const param = `dir=${dir}&name=${name}`;
  return `${SERVER_URL}/getImage?${param}`;
}

//fazer pedido HTTP para obter os Widgets
export const fetchWidgets = (id_start, num_rows) => {
  return get(FETCH_WIDGETS, getWidgets(id_start, num_rows));
}
//fazer pedido HTTP para obter os detalhes do Widget
export const fetchDetalhes = (widget) => {
  return get(FETCH_DETALHES, getDetalhes(widget));
}
//fazer pedido HTTP para obter imagens dos Widgets
export const fetchImage = (dir, name) => {
  return get(FETCH_IMAGE, getImage(dir, name));
}

const get = (type, http) => {
  console.log('get '+type+' -> '+http);
  //fazer pedido HTTP para obter dados do servidor
  const request = axios.get(http);

  //despachar, action com os dados obtidos
  return {
    type: type,
    payload: request,
  };
}
