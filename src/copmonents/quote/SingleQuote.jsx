import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { getQuoteById } from "../../store/quote/quoteThunk";

export const SingleQuote = () => {
  const dispatch = useDispatch();
  const { quote } = useSelector((state) => state.quote);
  const { id } = useParams();
  const customFetch = useFetch();

  useEffect(() => {
    dispatch(getQuoteById({ customFetch, id }));
  }, [dispatch, customFetch, id]);

  return (
    <Container>
      <QuoteInfo>
        <QuoteText>{quote.quote}</QuoteText>
        <Author>{quote.author}</Author>
        <div>
          <button>load comments</button>
        </div>
      </QuoteInfo>
    </Container>
  );
};

const Container = styled("div")({
  padding: "30px 0",
  margin: "0 auto",
});

const QuoteInfo = styled("div")(() => ({
  background: "#162b2b",
  padding: "50px 20px 30px",
  borderRadius: "6px",
  width: "600px",
}));

const QuoteText = styled("div")(() => ({
  fontSize: "40px",
  margin: "40px 0",
}));

const Author = styled("p")(() => ({
  fontSize: "24px",
  fontStyle: "italic",
  textAlign: "right",
  width: "600px",
}));
