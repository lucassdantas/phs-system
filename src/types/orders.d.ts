export interface OrdersType {
  orderId:number;
  userId:number;
  productId:number;
  orderDate:Date;
  totalAmount:number;
  status:string;
  paymentStatus:string;
}