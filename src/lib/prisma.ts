//inicializar apenas um client de prisma por cliente, para
//que todo recarregamento não gere uma nova conexão com o banco
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {prisma: PrismaClient}

//prisma vai estar no escopo global, ou se não estiver,outro vai ser criado
//e o que for criado será o novo global, deixando assim apenas um client
export const prisma = 
globalForPrisma.prisma ||
new PrismaClient({
    log : ["query"],
});

if(process.env.NODE_ENV != "production") globalForPrisma.prisma