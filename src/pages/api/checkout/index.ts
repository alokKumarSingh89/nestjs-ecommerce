import Stripe from 'stripe';
import graphql from '../../../lib/graphql';
import getProductsById from '../../../lib/graphql/queries/getProductsById';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null);

export default async function handler(req, res) {
  const { items } = req.body;
  const { products } = await graphql.request(getProductsById, {
    ids: Object.keys(items),
  });
  const line_items = products.map((product) => ({
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
    },
    price_data: {
      currency: 'EUR',
      product_data: {
        name: product.name,
        images: product.images.map((img) => img.url),
      },
      unit_amount: product.price,
    },
    quantity: items[product.id],
  }));
}
