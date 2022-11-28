import { wrap } from 'svelte-spa-router/wrap'
import Main from '@/routes/Main.svelte'

export default {
  "/": Main,
  "/sub": wrap({
    asyncComponent: () => import("@/routes/SubPage.svelte"),
  }),
  "/sub/:id": wrap({
    asyncComponent: () => import("@/routes/SubDesc.svelte"),
  }),
  "*": wrap({
    asyncComponent: () => import("@/routes/NotFound.svelte"),
  }),
};