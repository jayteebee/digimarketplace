import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return "hi"
    })
})

export type AppRouter = typeof appRouter