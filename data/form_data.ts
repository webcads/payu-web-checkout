import { FormData } from "@/interface/form_data";
import { AUTH } from "./auth";

export const initialFormData: FormData = {
  merchantId: AUTH.merchantId,
  accountId: AUTH.accountId,
  description: "",
  referenceCode: "testprice",
  amount: "",
  tax: "3193",
  taxReturnBase: "16806",
  currency: "COP",
  signature: "",
  test: "0",
  buyerEmail: "",
  buyerFullName: "",
  telephone: "",
  responseUrl: "http://www.test.com/response",
  confirmationUrl: "http://www.test.com/confirmation",
};
