import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/shared/lib/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "mysql",
	}),
	secret: process.env.BETTER_AUTH_SECRET,

	emailAndPassword: {
		enabled: true,
		minPasswordLength: 6,
	},
	plugins: [nextCookies()],
});
