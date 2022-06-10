import { GraphQLClient } from 'graphql-request';
const NEXT_PUBLIC_GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;

const authorization = `Bearer ${GRAPHCMS_API_KEY}`;
export default new GraphQLClient(NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});
