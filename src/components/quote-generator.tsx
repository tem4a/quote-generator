import React, { useState } from 'react';
import { QuoteService } from '../api/services/quote-service';
import Button from './button';
import Divider from './divider';
import Quote from './quote';
import * as S from './quote-generator.styles';

export interface IQuote {
  author: string;
  category: string;
  id: number;
  text: string;
}

export type RequestStatusType = 'idle' | 'pending' | 'resolved' | 'rejected';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState<IQuote | null>(null);
  const [status, setStatus] = useState<RequestStatusType>('idle');
  const [error, setError] = useState(null);

  const handleGenerateQuote = () => {
    setStatus('pending');
    setError(null);
    QuoteService.fetchRandomQuote()
      .then((quotes) => {
        setQuote(quotes.data[0]);
        setStatus('resolved');
      })
      .catch((error) => {
        setError(error);
        setStatus('rejected');
      });
  };

  if (error) {
    throw error;
  }

  return (
    <S.Wrapper>
      <div style={{ marginBottom: -72 }}>
        {(status === 'idle' || status === 'pending') && !quote ? <p>Roll the dice for some wisdom</p> : null}
        {quote && <Quote quote={quote} />}
        <Divider />
        <Button onClick={handleGenerateQuote} loading={status === 'pending'} />
      </div>
    </S.Wrapper>
  );
};

export default QuoteGenerator;
