import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
// auth admin
import { protect, admin } from '../middleware/authMiddleware.js'
// imports the product controller functionality and routes them to the correct destinations, visit the controller files to see api routes for requests
router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect,admin,updateProduct)

export default router
