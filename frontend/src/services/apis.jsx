import axios from 'axios';

const api = axios.create({
  baseURL: 'https://invoice-app-nimble.vercel.app/invoice',
});

export const saveInvoice = (invoiceData) => {
  return api.post('/add', invoiceData);
};


