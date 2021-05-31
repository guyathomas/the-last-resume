import dotenv from 'dotenv';

dotenv.config();

const hasuraEnvName = "X-HASURA-ADMIN-SECRET"

const hasuraSecret = process.env[hasuraEnvName];

if (!hasuraSecret){
    console.warn(`${hasuraEnvName} is not set`)
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
