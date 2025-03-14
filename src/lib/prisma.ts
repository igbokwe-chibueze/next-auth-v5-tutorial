import { PrismaClient } from "@prisma/client";
import {Pool} from "@neondatabase/serverless"
import {PrismaNeon} from "@prisma/adapter-neon";


const prismaClientSingleton = () => {
  // Make this edge-compatible
  const neon = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  })
  const adapter = new PrismaNeon(neon);

  return new PrismaClient({ adapter});
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
