import React, { useState } from 'react';
import { saveInvoice } from '../services/apis';

const InvoiceForm = ({formData, setFormData, handleSubmit}) => {
    const [selectedOption, setSelectedOption] = useState('');

    // Handler for radio button change
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
      };


    return (
        <>
            <div className='flex justify-start'>
                <div className='text-[#6500B0] font-bold m-2'>Invoice Details</div>
                <div className='m-2'>Action History</div>
            </div>
            <form onSubmit={onSubmit}>
                <h1>INVOICE AMOUNT DETAILS</h1>
                <div>
                    <label>Currency: </label>
                    <input type="text" required defaultValue="INR" name="currency" disabled onChange={handleChange1} />
                </div>
                <div>
                    <label>Inv Basic Amt: </label>
                    <input type="number" required value={formData.invBasicAmt} disabled name="invBasicAmt" onChange={handleChange1} />
                </div>
                <div>
                    <label>Inv Tax Amt: </label>
                    <input type="number" required value={formData.invTaxAmt} disabled name="invTaxAmt" onChange={handleChange1} />
                </div>
                <div>
                    <label>Total Inv Amt [Inclu. of tax]: </label>
                    <input type="number" required value={formData.totalInvAmt} disabled name="totalInvAmt" onChange={handleChange1}/>
                </div>
                <div>
                    <label>Advance Paid: </label>
                    <input type="number" required value={formData.advancePaid} className='border' name="advancePaid" onChange={handleChange1} />
                </div>

                <div className='flex'>
                    <h3>TCS Applicable: </h3>
                    <div className='flex mx-1'>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={selectedOption === 'yes'}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleChange1({ target: { name: 'tcsApplicable', value: true } });
                                }}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={selectedOption === 'no'}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleChange1({ target: { name: 'tcsApplicable', value: false } });
                                }}
                            />
                            No
                        </label>
                    </div>
                </div>
                <div>
                    <label>Net Payable Amt [Exclu. of TDS]: </label>
                    <input type="number" required value={formData.netPayableAmt} disabled name="netPayableAmt" onChange={handleChange1} />
                </div>
                <h1>ALTERNATE PAYEE DETAILS</h1>
                <div>
                    <label>Alternate Payee 1: </label>
                    <input type="text" value={formData.alternatePayee1} className='border' name="alternatePayee1" onChange={handleChange1} />
                </div>
                <div>
                    <label>Alternate Payee 2: </label>
                    <input type="text" value={formData.alternatePayee2} className='border' name="alternatePayee2" onChange={handleChange1} />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" value={formData.city} className='border' name="city" onChange={handleChange1} />
                </div>
                <div>
                    <label>Street: </label>
                    <input type="text" value={formData.street} className='border' name="street" onChange={handleChange1} />
                </div>
                <div>
                    <label>Country: </label>
                    <input type="text" value={formData.country} className='border' name="country" onChange={handleChange1} />
                </div>
                <div>
                    <label>Bank Key / IFSC Code: </label>
                    <input type="text" value={formData.bankKey} className='border' name="bankKey" onChange={handleChange1} />
                </div>
                <div>
                    <label>Bank Acc No: </label>
                    <input type="text" value={formData.bankAccNo} className='border' name="bankAccNo" onChange={handleChange1} />
                </div>
            </form>
        </>
    );
};

export default InvoiceForm;
