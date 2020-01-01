import { accountEndpoint } from "../api/endpoints";
import axios from "axios";

export const createAccount = async data => {
  const url = accountEndpoint.readAllAccount;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const readAllAccounts = async () => {
  const url = accountEndpoint.readAllAccount;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const readOneAccount = async id => {
  const url = accountEndpoint.readOneAccount;
  try {
    const response = await axios.get(url, id);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const updateAccount = async id => {
  const url = accountEndpoint.updateAccount;
  try {
    const response = await axios.post(url, id);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const disableAccount = async id => {
  const url = accountEndpoint.disableAccount;
  try {
    const response = await axios.post(url, id);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const enableAccount = async id => {
  const url = accountEndpoint.enableAccount;
  try {
    const response = await axios.post(url, id);
    return response.data;
  } catch (error) {
    return error.data;
  }
};

export const removeAccount = async id => {
  const url = accountEndpoint.removeAccount;
  try {
    const response = await axios.post(url, id);
    return response.data;
  } catch (error) {
    return error.data;
  }
};
