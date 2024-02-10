import { z } from "zod";
import { privateProcedure, router } from "./trpc";

export const PaymentRouter = router({
    createSession: privateProcedure.input(z.object({productIds: z.array(z.string())})).mutation(({ctx, input}) => {
        const {user} = ctx
    }),
})