const pages = [
  {
    title: 'Home',
    href: '/demos/ecommerce',
    id: 'demo__ecommerece-home',
  },
  {
    title: 'Listing',
    id: 'demo__ecommerece-listing',
    children: [
      {
        title: 'Search Listing',
        href: '/demos/ecommerce/listing',
        id: 'demo__ecommerece-listing--search',
      },
      {
        title: 'Promotions',
        href: '/demos/ecommerce/promotions',
        id: 'demo__ecommerece-listing--promotions',
      },
    ],
  },
  {
    title: 'Product Overview',
    href: '/demos/ecommerce/product-overview',
    id: 'demo__ecommerece-product-overview',
  },
  {
    title: 'Pages',
    id: 'demo__ecommerece-pages',
    children: [
      {
        title: 'Cart',
        href: '/demos/ecommerce/cart',
        id: 'demo__ecommerece-pages--cart',
      },
      {
        title: 'Checkout',
        href: '/demos/ecommerce/checkout',
        id: 'demo__ecommerece-pages--checkout',
      },
      {
        title: 'Empty Cart',
        href: '/demos/ecommerce/empty-cart',
        id: 'demo__ecommerece-pages--empty-cart',
      },
      {
        title: 'Order Complete',
        href: '/demos/ecommerce/order-complete',
        id: 'demo__ecommerece-pages--order-complete',
      },
    ],
  },
];

export default pages;
