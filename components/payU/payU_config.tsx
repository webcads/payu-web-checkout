"use client";

import { useState, useEffect } from "react";
import { FormData } from "@/interface/form_data";
import { products } from "@/data/products";
import { initialFormData } from "@/data/form_data";
import { calculateMD5 } from "@/utils/signature";
import { AUTH } from "@/data/auth";
import ProductSelector from "./product_selector";
import BuyerInfoForm from "./buyer_info_form";
import SubmitButton from "./submit_btn";

const PayUConfig = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    setSelectedProductIndex(index);
    const selectedProduct = products[index];
    setFormData({
      ...formData,
      description: selectedProduct.description,
      amount: selectedProduct.amount,
      referenceCode: selectedProduct.referenceCode || `REF${Date.now()}`, // Generate unique reference if not provided
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.amount && formData.currency) {
      const signature = calculateMD5(
        AUTH.apiKey,
        AUTH.merchantId,
        formData.referenceCode,
        formData.amount,
        formData.currency
      );
      setFormData((prevData) => ({
        ...prevData,
        signature: signature,
        merchantId: AUTH.merchantId, // Ensure merchantId is set
        currency: "COP", // Set default currency (adjust as needed)
      }));
    }
  }, [formData.amount, formData.currency, formData.referenceCode]);

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.description || !formData.amount || !formData.buyerEmail || !formData.buyerFullName) {
      alert("Please fill all required fields (description, amount, email, and full name).");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = formData[key as keyof FormData] || "";
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="text-purple-500 grid gap-y-2 max-w-sm justify-center">
      <ProductSelector products={products} onChange={handleProductChange} />
      <BuyerInfoForm formData={formData} onChange={handleInputChange} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default PayUConfig;