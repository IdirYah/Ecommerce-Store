import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analyticRoutes from "./routes/analytics.route.js"

import { connectDB } from "./lib/db.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/coupon",couponRoutes)
app.use("/api/payment",paymentRoutes)
app.use("/api/analytic",analyticRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    connectDB()
})