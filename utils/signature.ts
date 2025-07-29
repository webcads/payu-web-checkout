import CryptoJS from "crypto-js"

export function calculateMD5(
  apiKey: string,
  merchantId: string,
  reference: string,
  price: string,
  currency: string,
  ): string {
  const concatenatedArray = [apiKey, merchantId, reference, price, currency]
  const concatenatedString = concatenatedArray.join("~")
  const hash = CryptoJS.MD5(concatenatedString).toString()
  return hash
}

export function validateSignature(
  apiKey: string,
  merchantId: string,
  referenceCode: string,
  amount: string,
  currency: string,
  state: string,
  signature: string,
): boolean {
  const string = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}~${state}`
  const calculatedSignature = CryptoJS.MD5(string).toString()
  return calculatedSignature === signature
}
