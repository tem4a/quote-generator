import React from 'react';
import { IQuote } from './quote-generator';
import * as S from './quote.styles';

type QuoteProps = {
  quote: IQuote | null;
};

const Quote = ({ quote }: QuoteProps) => {
  return (
    <S.QuoteWrapper>
      <span>№ {quote?.id}</span>
      <p>{quote?.text}</p>
    </S.QuoteWrapper>
  );
};

export default Quote;
