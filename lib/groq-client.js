import Groq from 'groq-sdk';

let groqClient = null;

export function getGroqClient() {
  if (!groqClient) {
    groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }
  return groqClient;
}

export const MODEL_OPTIONS = {
  'mixtral-8x7b-32768': 'Mixtral 8x7B (Fast)',
  'llama2-70b-4096': 'LLaMA2 70B',
  'gemma-7b-it': 'Gemma 7B'
};
