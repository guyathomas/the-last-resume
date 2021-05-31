import dotenv from 'dotenv';

dotenv.config();

const hasuraSecret = process.env.HASURA_ADMIN_SECRET;

if (!hasuraSecret){
    console.warn(`HASURA_ADMIN_SECRET is not set`)
}

module.exports = {
  projects: {
    client: {
      schema: ["packages/graphql/dist/graphql.schema.json"],
      documents: ["packages/client/**/*.{graphql,js,ts,jsx,tsx}"],
      extensions: {
        endpoints: {
          default: {
            url: "https://thelastresume.hasura.app/v1/graphql",
            headers: {
              "X-HASURA-ADMIN-SECRET": hasuraSecret,
            },
          },
        },
      },
    },
  },
};
