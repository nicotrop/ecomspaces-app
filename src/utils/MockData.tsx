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

export function fetchMockData(activeTab: string) {
  switch (activeTab) {
    case "allOrders":
      return Promise.resolve(allOrdersData);
    case "dueTodayOrders":
      return Promise.resolve(dueTodayOrdersData);
    case "incomingPo":
      return Promise.resolve(incomingPOData);
    case "onHoldOrders":
      return Promise.resolve(onHoldOrdersData);
    default:
      return Promise.resolve([]);
  }
}

export const mockTabs = [
  {
    title: "All",
    value: "allOrders",
    number: "2",
  },
  {
    title: "Orders due today",
    value: "dueTodayOrders",
    number: "20",
  },
  {
    title: "Incoming POs",
    value: "incomingPo",
    number: "100",
  },
  {
    title: "Orders on hold",
    value: "onHoldOrders",
    number: "43",
  },
];

export const TextValue: {
  buttonText: string;
  value: string;
}[] = [
  {
    buttonText: "Last 7 days",
    value: "sevenDays",
  },
  {
    buttonText: "Last 30 days",
    value: "thirtyDays",
  },
  {
    buttonText: "Last 3 months",
    value: "threeMonths",
  },
  {
    buttonText: "Last 6 months",
    value: "sixMonths",
  },
  {
    buttonText: "Last year",
    value: "lastYear",
  },
];

export const MockDashboardStats: {
  title: string;
  number: number;
  percent: number;
}[] = [
  {
    title: "Shipments",
    number: 100,
    percent: 10,
  },
  {
    title: "Shipments On Time",
    number: 10,
    percent: 85,
  },
  {
    title: "Returns",
    number: 27,
    percent: -25,
  },
  {
    title: "Purchase Orders",
    number: 22,
    percent: 7,
  },
];

export type InvoiceData = {
  id: number;
  alias: string;
  name: string;
  value: number;
  dollarValue?: boolean;
}[];

export const mockInvoiceData: InvoiceData = [
  {
    id: 1,
    alias: "amountDue",
    name: "Amount Due",
    value: 3450,
    dollarValue: true,
  },
  {
    id: 2,
    alias: "totalPaid",
    name: "Total Paid",
    value: 10450,
    dollarValue: true,
  },
  {
    id: 3,
    alias: "amountOverdue",
    name: "Amount Overdue",
    value: 450,
    dollarValue: true,
  },
  {
    id: 4,
    alias: "invoicesLate",
    name: "Invoices Late",
    value: 2,
  },
];

export const invoiceStatus = [
  {
    name: "Paid",
    value: "paid",
  },
  {
    name: "Due",
    value: "due",
  },
  {
    name: "Late",
    value: "late",
  },
];

export const mockInvoiceTabData = [
  {
    status: "paid",
    invoiceName: "PPT-152859",
    invoiceDate: "2021-05-01",
    dueDate: "2021-05-31",
    amount: 150.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "www.nicotroplent.com",
  },
  {
    status: "due",
    invoiceName: "PPOY-8921",
    invoiceDate: "2021-02-01",
    dueDate: "2021-02-31",
    amount: 90.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676932518/WAL-152845_nevua1.pdf",
    paymentLink: "https://nicotroplent.com",
  },
  {
    status: "late",
    invoiceName: "SLC-2901",
    invoiceDate: "2021-06-12",
    dueDate: "2021-06-20",
    amount: 50.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "https://nicotroplent.com",
  },
  {
    status: "due",
    invoiceName: "AFWM-1029",
    invoiceDate: "2021-03-01",
    dueDate: "2021-03-15",
    amount: 75.0,
    invoicePDF:
      "https://res.cloudinary.com/dygjptmlc/image/upload/v1676930997/PPT-152859_vtwcvj.pdf",
    paymentLink: "https://nicotroplent.com",
  },
];

type RadioTypes = {
  id: string;
  title: string;
}[];

export const AddressTypes: RadioTypes = [
  { id: "residential", title: "Residential" },
  { id: "business", title: "Business" },
];

export const ConfirmationTypes: RadioTypes = [
  { id: "none", title: "None" },
  { id: "delivery", title: "Delivery" },
  { id: "signature", title: "Signature" },
];

export const mockShippingRates = [
  {
    carrier: "UPS",
    service: "UPS Next Day Air",
    rate: 155.99,
    deliveryDays: 1,
  },
  {
    carrier: "UPS",
    service: "UPS Ground",
    rate: 5.99,
    deliveryDays: 3,
    cheapest: true,
  },
  {
    carrier: "DHL",
    service: "DHL Ground",
    rate: 55.99,
    deliveryDays: 3,
  },

  {
    carrier: "FedEx",
    service: "FedEx Ground",
    rate: 5.99,
    deliveryDays: 3,
  },
];
