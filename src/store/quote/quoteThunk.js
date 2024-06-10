import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useFetch } from "../../hooks/useFetch";

export const getQuotes = createAsyncThunk(
  "quote/get",
  async (customFetch, { rejectWithValue }) => {
    try {
      const data = await customFetch("quotes");

      const newData = [];
      for (let key in data) {
        newData.push({
          id: key,
          ...data[key],
        });
      }
      return newData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getQuoteById = createAsyncThunk(
  "quote/getById",
  async ({ customFetch, id }, { rejectWithValue }) => {
    try {
      const data = await customFetch(`quotes/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addQuote = createAsyncThunk(
  "quote/past",
  async (
    { customFetch, quotesData, navigate },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await customFetch("quotes", "POST", quotesData);
      dispatch(getQuotes(customFetch));
      navigate("/qoutes");
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
