import { MD5 } from "crypto-js";

// Función para calcular el hash MD5
export function calculateMD5(apiKey: string, merchantId: string, reference: string, price: string, currency: string): string {
  const concatenatedArray = [apiKey, merchantId, reference, price, currency];
  const concatenatedString = concatenatedArray.join("~");
  const hash = MD5(concatenatedString).toString();
  return hash;
}
