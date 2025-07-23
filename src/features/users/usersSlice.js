import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USERS_URL = `${API_BASE_URL}/users`;
const ORDERS_URL = `${API_BASE_URL}/orders`;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get(USERS_URL);
  return res.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  const updatedUser = {
    ...user,
    createdAt: new Date().toISOString(),
  };
  const res = await axios.put(`${USERS_URL}/${user.id}`, updatedUser);
  return res.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  const ordersRes = await axios.get(`${ORDERS_URL}?userId=${id}`);
  const orders = ordersRes.data;

  await Promise.all(
    orders.map(order => axios.delete(`${ORDERS_URL}/${order.id}`))
  );

  await axios.delete(`${USERS_URL}/${id}`);
  return id;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null,
    searchTerm: '',
    roleFilter: '',
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setRoleFilter(state, action) {
      state.roleFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export const { setSearchTerm, setRoleFilter } = usersSlice.actions;
export default usersSlice.reducer;
