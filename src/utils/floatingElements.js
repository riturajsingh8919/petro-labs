/**
 * Utility function to generate random floating element positions
 * This is safe to call here as it's not during component render
 */
export function generateRandomPositions(count = 12) {
  // Only generate on client side
  if (typeof window === "undefined") {
    return [];
  }

  return [...Array(count)].map(() => ({
    width: Math.random() * 100 + 40,
    height: Math.random() * 100 + 40,
    left: Math.random() * 100,
    top: Math.random() * 100,
    initialX: Math.random() * 100 - 50,
    initialY: Math.random() * 100 - 50,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
  }));
}
