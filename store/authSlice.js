
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Xử lý đăng nhập bất đồng bộ
export const login = createAsyncThunk("auth/login", async ({ username, password }) => {
    const res = await axios.post("http://localhost:8081/login", { username, password });
    localStorage.setItem("token", res.data.token);
    console.log(res.data.token)
    return res.data.token;
});

// Tạo slice Redux cho xác thực người dùng
const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isAuthenticated: !!localStorage.getItem("token"),
    },
    reducers: {
        logout: (state) => {
            state.token = "";
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;