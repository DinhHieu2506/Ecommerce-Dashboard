import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get(PRODUCTS_URL);
  return res.data;
});

export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
  const res = await axios.post(PRODUCTS_URL, product);
  return res.data;
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
  const res = await axios.put(`${PRODUCTS_URL}/${product.id}`, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) => {
  
  await axios.delete(`${PRODUCTS_URL}/${id}`);

  const ordersRes = await axios.get("http://localhost:3000/orders");
  const orders = ordersRes.data;

  const ordersToUpdateOrDelete = orders.filter(order => order.productIds.includes(id));

  for (const order of ordersToUpdateOrDelete) {
    const updatedProductIds = order.productIds.filter(pid => pid !== id);

    if (updatedProductIds.length === 0) {
     
      await axios.delete(`http://localhost:3000/orders/${order.id}`);
    } else {
      
      await axios.put(`http://localhost:3000/orders/${order.id}`, {
        ...order,
        productIds: updatedProductIds
      });
    }
  }

  return id; 
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
   
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { clearError } = productsSlice.actions;
export default productsSlice.reducer;
