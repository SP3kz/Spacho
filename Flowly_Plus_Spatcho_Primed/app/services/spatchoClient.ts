// Spatcho Router Client for Flowly
import axios from 'axios';

const BASE_URL = 'http://localhost:9000'; // Replace with deployed Spatcho URL

export const routeAI = async (prompt: string, context = {}, intent = '') => {
  const response = await axios.post(`${BASE_URL}/route/ai`, { prompt, context, intent });
  return response.data;
};

export const executeWorkflow = async (workflow) => {
  const response = await axios.post(`${BASE_URL}/workflow/execute`, workflow);
  return response.data;
};

export const callDynamicAPI = async (target, payload) => {
  const response = await axios.post(`${BASE_URL}/api/dynamic/${target}`, payload);
  return response.data;
};

export const checkBloom = async (query: string) => {
  const response = await axios.post(`${BASE_URL}/filter/bloom/check`, { query });
  return response.data.found;
};