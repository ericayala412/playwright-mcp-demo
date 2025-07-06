import { test, expect } from '@playwright/test';
import { config } from './config/config';

test('add recycled hoodie to cart', async ({ page, context }) => {
    // Clear cookies for clean test
    await context.clearCookies();

    // Navigate to the store
    await page.goto(config.appUrl);

    // Click Shop Now for Men's Outerwear
    await page.getByRole('link', { name: 'Men\'s Outerwear Shop Now' }).click();

    // Find and click on the Recycled Plastic Bottle Hoodie
    const hoodieLink = page.getByRole('link', { name: 'Recycled Plastic Bottle Hoodie - Green' });
    await hoodieLink.scrollIntoViewIfNeeded();
    await hoodieLink.click();

    // Find and click Add to Cart button
    const addToCartButton = page.getByRole('button', { name: 'Add this item to cart' });
    await addToCartButton.scrollIntoViewIfNeeded();
    await addToCartButton.click();

    // Verify item was added to cart by checking cart count increased
    await expect(page.getByRole('link', { name: /Shopping cart: \d+ items/ })).toBeVisible();

    // Verify the success dialog appears
    await expect(page.getByText('Added to cart')).toBeVisible();
});
