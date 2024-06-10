import styled from "styled-components";
import QuoteItem from "./QuoteItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getQuotes } from "../../store/quote/quoteThunk";

const QuoteList = () => {
  const { quotes } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const customFetch = useFetch();

  useEffect(() => {
    dispatch(getQuotes(customFetch));
  }, [dispatch, customFetch]);

  return (
    <QuoteContainer>
      {quotes.map((item) => (
        <QuoteItem key={item.id} {...item} />
      ))}
    </QuoteContainer>
  );
};

export default QuoteList;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
