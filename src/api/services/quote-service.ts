import { IQuote } from '../../components/quote-generator';
import { publicAxios } from '../publicAxios';

const fetchRandomQuote = () => {
  return publicAxios.get<IQuote[]>('/random', { params: { category: 'all', count: '1' } });
};

export const QuoteService = {
  fetchRandomQuote,
};
