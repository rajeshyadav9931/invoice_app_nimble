import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/invoice',
});

export const saveInvoice = (invoiceData) => {
  return api.post('/add', invoiceData);
};


