import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();
// if (!process.env.FLY_IO) config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,

        undefined: null,
      },
    });
  }
  const sql = globalThis.postgresSqlClient;
  return sql;

  // return globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();