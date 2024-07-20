import React, { useEffect, useState } from 'react';
import PDFViewer from './component/PDFViewer';
import InvoiceForm from './component/InvoiceForm';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import axios from 'axios';
import { saveInvoice } from './services/apis';




function App() {
  const [InvData, setInvData] = useState(null)
  const [formData, setFormData] = useState({
    currency: 'INR',
    invBasicAmt: 15000,
    invTaxAmt: 1000,
    totalInvAmt: 16000,
    advancePaid: 0,
    tcsApplicable: false,
    netPayableAmt: 16000,
    alternatePayee1: '',
    alternatePayee2: '',
    city: '',
    street: '',
    country: '',
    bankKey: '',
    bankAccNo: '',
  });


  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get('https://invoice-app-nimble.vercel.app/invoice');
        setInvData(response.data);
      } catch (error) {
        console.error('Error fetching invoice data:', error);
      }
    };

    fetchInvoice();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      await saveInvoice(formData);
      alert('Invoice saved successfully');
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };




  return (
    <div className="App max-w-full" >
      <div className='flex w-full justify-between border'>
        <div>
          <h1 className='flex font-bold text-[25px]'> <AiOutlineArrowLeft className="m-2 text-[25px] font-bold" /> Task 38991 AP Team</h1>
        </div>
        <div className='flex '>
          <div className='border m-1 p-1'>
            <AiOutlineSwap className="font-semibold text-[20px]" />
          </div>
          <div className='border p-1 m-1' onClick={() => handleSubmit(formData)} >Save to Draft</div>
        </div>
      </div>
      <div className='flex p-1'>
        <div style={{ width: "50%", height: "auto", alignItems: "center" }}>
          <PDFViewer file="/assets/sample.pdf" />
        </div>
        <div className='w-[50%]'>
          <InvoiceForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </div>
      </div>
      {InvData ? <div className='flex justify-evenly p-2 bg-slate-200 w-full fixed  bottom-0 left-0 '>
        <div>
          <h1>Currency : <span className='text-green-700'>{InvData[0].currency}</span> </h1>
        </div>
        <div>
          <h1>Inv Basic Amt: <span className='text-green-700'>{InvData[0].invBasicAmt}</span></h1>
        </div>
        <div>
          <h1>Basic Tax Amt: <span className='text-green-700'>{InvData[0].invTaxAmt}</span></h1>
        </div>
        <div>

          <h1>Total Inv Amt: <span className='text-green-700'>{InvData[0].totalInvAmt}</span></h1>
        </div>
        <div>
          <h1>advance Paid: <span className='text-green-700'>{InvData[0].advancePaid}</span></h1>
        </div>
        <div>
          <h1>TDS Amt: <span className='text-green-700'>{InvData[0].totalInvAmt * 0.3 / 100}</span></h1>
        </div>
        <div>
          <h1>Net Payable Amt: <span className='text-green-900'>{InvData[0].netPayableAmt}</span></h1>
        </div>
        <div className='flex'>
          <button className='bg-slate-400 rounded-md m-1 p-1'>Reject</button>
          <button className='bg-[#980DFF] text-white m-1 p-1 rounded'>Approve</button>
        </div>

      </div> : null
      }
    </div>
  );
}

export default App;





