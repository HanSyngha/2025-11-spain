/**
 * Resolves the correct path for images, accounting for the base URL in production.
 * @param {string} path - The absolute path to the image (e.g., "/reservations/ticket.jpg")
 * @returns {string} - The resolved path with base URL if applicable.
 */
export const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const baseUrl = import.meta.env.BASE_URL;
    // Remove leading slash if present to avoid double slashes when joining
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    return `${baseUrl}${cleanPath}`;
};
