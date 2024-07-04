import React from 'react';
import { FormData } from '@/interface/form_data';

interface BuyerInfoFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BuyerInfoForm: React.FC<BuyerInfoFormProps> = ({ formData, onChange }) => (
  <div className='grid grid-cols-1 gap-y-2'>
    <input
      type="email"
      name="buyerEmail"
      placeholder="Enter your email"
      value={formData.buyerEmail}
      onChange={onChange}
    />
    <input
      type="text"
      name="buyerFullName"
      placeholder="Enter your full name"
      value={formData.buyerFullName}
      onChange={onChange}
    />
    <input
      type="tel"
      name="telephone"
      placeholder="Enter your telephone"
      value={formData.telephone}
      onChange={onChange}
    />
  </div>
);

export default BuyerInfoForm;
