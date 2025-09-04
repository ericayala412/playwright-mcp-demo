import { test as base } from '@playwright/test';

export const test = base.extend({

  context: async ({ context }, use) => {
    await context.clearCookies();
    context.addInitScript(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await use(context);
  },
});

export { expect } from '@playwright/test';
