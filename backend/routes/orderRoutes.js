import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js'
import { protect,admin } from '../middleware/authMiddleware.js'
// auth admin
// imports the order controller functionality and routes them to the correct destinations, visit the controller files to see api routes for requests
router.route('/').post(protect, addOrderItems).get(protect,admin,getOrders)
  router.route('/myorders').get(protect, getMyOrders)
    router.route('/:id').get(protect, getOrderById)
      router.route('/:id/pay').put(protect, updateOrderToPaid)
        router.route('/:id/deliver').put(protect, admin,updateOrderToDelivered)

export default router
