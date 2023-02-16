export type OrderData = {
  id: number;
  orderNumber: string;
  address: string;
  orderDate: string;
  price: number;
  status: string;
  shippingMethod: string;
}[];

export type POData = {
  id: number;
  poNumber: string;
  totalSKUs: number;
  quantity: number;
  createdDate: string;
  expectedDate: string;
  trackingNumber: string;
}[];

export const allOrdersData: OrderData = [
  {
    id: 1,
    orderNumber: "12345",
    address: "123 Main St, Anytown USA",
    orderDate: "2022-02-14",
    price: 100.0,
    status: "Fulfilled",
    shippingMethod: "UPS Ground",
  },
  {
    id: 2,
    orderNumber: "23456",
    address: "456 Elm St, Anytown USA",
    orderDate: "2022-02-10",
    price: 200.0,
    status: "On hold",
    shippingMethod: "UPS Air",
  },
  {
    id: 3,
    orderNumber: "0980uu",
    address: "123 Main St, Anytown USA",
    orderDate: "2022-02-14",
    price: 30.0,
    status: "Fulfilled",
    shippingMethod: "USPS Ground",
  },
  {
    id: 4,
    orderNumber: "23456",
    address: "456 Elm St, Anytown USA",
    orderDate: "2022-02-10",
    price: 200.0,
    status: "Cancelled",
    shippingMethod: "FedEx Ground",
  },
  {
    id: 5,
    orderNumber: "12345",
    address: "123 Main St, Anytown USA",
    orderDate: "2022-02-14",
    price: 100.0,
    status: "Ready to ship",
    shippingMethod: "UPS Ground Saver",
  },
  {
    id: 6,
    orderNumber: "23456",
    address: "456 Elm St, Anytown USA",
    orderDate: "2022-02-10",
    price: 200.0,
    status: "Fulfilled",
    shippingMethod: "DHL Expedited",
  },
];

export const dueTodayOrdersData: OrderData = [
  {
    id: 1,
    orderNumber: "34567",
    address: "789 Maple St, Anytown USA",
    orderDate: "2022-02-14",
    price: 50.0,
    status: "Ready to ship",
    shippingMethod: "Ground",
  },
  {
    id: 2,
    orderNumber: "45678",
    address: "234 Oak St, Anytown USA",
    orderDate: "2022-02-14",
    price: 75.0,
    status: "Ready to ship",
    shippingMethod: "Ground",
  },
  {
    id: 3,
    orderNumber: "34567",
    address: "789 Maple St, Anytown USA",
    orderDate: "2022-02-14",
    price: 510.0,
    status: "Ready to ship",
    shippingMethod: "Ground",
  },
  {
    id: 4,
    orderNumber: "45678",
    address: "234 Oak St, Anytown USA",
    orderDate: "2022-02-14",
    price: 75.0,
    status: "Ready to ship",
    shippingMethod: "Ground",
  },
  {
    id: 5,
    orderNumber: "45678",
    address: "234 Oak St, Anytown USA",
    orderDate: "2022-02-14",
    price: 75.0,
    status: "Ready to ship",
    shippingMethod: "Ground",
  },
  // add more data points
];

export const incomingPOData: POData = [
  {
    id: 1,
    poNumber: "P012345",
    totalSKUs: 20,
    quantity: 200,
    createdDate: "2022-02-14",
    expectedDate: "2022-03-01",
    trackingNumber: "18nnion918uob1988n",
  },
  {
    id: 2,
    poNumber: "P023456",
    totalSKUs: 10,
    quantity: 100,
    createdDate: "2022-02-14",
    expectedDate: "2022-02-28",
    trackingNumber: "18nnion918uob1988n",
  },
  {
    id: 3,
    poNumber: "P012345",
    totalSKUs: 10,
    quantity: 500,
    createdDate: "2022-02-14",
    expectedDate: "2022-05-02",
    trackingNumber: "18nnion918uob1988n",
  },
  {
    id: 4,
    poNumber: "P023456",
    totalSKUs: 5,
    quantity: 300,
    createdDate: "2022-06-11",
    expectedDate: "2023-02-28",
    trackingNumber: "18nniok918uob1988n",
  },
  {
    id: 5,
    poNumber: "P023456",
    totalSKUs: 8,
    quantity: 500,
    createdDate: "2023-02-14",
    expectedDate: "2023-03-21",
    trackingNumber: "18nnion918uob1988n",
  },
  // add more data points
];

export const onHoldOrdersData: OrderData = [
  {
    id: 1,
    orderNumber: "32456789",
    address: "567 Pine St, Anytown USA",
    orderDate: "2022-01-31",
    price: 150.0,
    status: "On hold",
    shippingMethod: "Ground",
  },
  {
    id: 2,
    orderNumber: "2167890",
    address: "890 Cedar St, Anytown USA",
    orderDate: "2022-01-30",
    price: 175.0,
    status: "On hold",
    shippingMethod: "Air",
  },
  {
    id: 3,
    orderNumber: "5986789",
    address: "567 Pine St, Anytown USA",
    orderDate: "2022-01-31",
    price: 50.0,
    status: "On hold",
    shippingMethod: "Ground",
  },
  {
    id: 4,
    orderNumber: "68987890",
    address: "890 Cedar St, Anytown USA",
    orderDate: "2022-01-30",
    price: 75.0,
    status: "On hold",
    shippingMethod: "Air",
  },
  {
    id: 5,
    orderNumber: "56789",
    address: "567 Pine St, Anytown USA",
    orderDate: "2022-01-31",
    price: 150.0,
    status: "On hold",
    shippingMethod: "Ground",
  },
  {
    id: 6,
    orderNumber: "67890",
    address: "890 Cedar St, Anytown USA",
    orderDate: "2022-01-30",
    price: 175.0,
    status: "On hold",
    shippingMethod: "Air",
  },
];
