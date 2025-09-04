import { test, expect } from '@playwright/test';

test.describe('Add Men\'s Bamboo T-Shirt to Cart', () => {
  test('should add Men\'s Bamboo T-Shirt to cart', async ({ page }) => {
    // Navigate to the shop
    await page.goto('https://shop.polymer-project.org/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Find and click "SHOP NOW" under Men's T-Shirts
    await page.getByRole('link', { name: "Men's T-Shirts Shop Now" }).click();
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Find and click on "Men's Bamboo T-Shirt"
    await page.getByRole('link', { name: 'Men\'s Bamboo T-Shirt Men\'s Bamboo T-Shirt $20.65' }).click();
    
    // Wait for product page to load
    await page.waitForLoadState('networkidle');
    
    // Select XL size from the dropdown
    await page.getByLabel('Size').selectOption('XL');
    
    // Click "ADD TO CART"
    await page.getByRole('button', { name: 'Add this item to cart' }).click();
    
    // Verify that the item has been added to cart
    // Check for the "Added to cart" dialog message
    await expect(page.locator('text=Added to cart')).toBeVisible();
    
    // Verify cart count increased to 1 item by checking the link aria-label
    await expect(page.getByRole('link', { name: 'Shopping cart: 1 item' })).toBeVisible();
    
    // Additional verification - check cart contents by navigating to cart
    await page.getByRole('link', { name: 'View Cart' }).click();
    
    // Wait for cart page to load
    await page.waitForLoadState('networkidle');
    
    // Verify cart contents with more specific selectors
    await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
    await expect(page.getByText('(1 item)')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Men\'s Bamboo T-Shirt' }).first()).toBeVisible();
    await expect(page.getByText('Size: XL')).toBeVisible();
    await expect(page.getByText('Total: $20.65')).toBeVisible();
  });
});
