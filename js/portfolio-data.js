/**
 * Portfolio Data Configuration
 * 
 * This file contains all the photo data for the portfolio.
 * You can easily add, remove, or modify photos by editing this file.
 * 
 * PHOTO SOURCES:
 * - Local images: Use relative paths like "images/category/photo.jpg"
 * - GitHub hosted: Use raw URLs like "https://raw.githubusercontent.com/username/repo/main/path/photo.jpg"
 * - Google Photos: Use direct sharing links (make sure they're publicly accessible)
 * 
 * PHOTO STRUCTURE:
 * Each photo object should have:
 * - id: Unique identifier
 * - src: Image URL or path
 * - thumb: Thumbnail URL (can be same as src, or a smaller version)
 * - alt: Alt text for accessibility
 * - group: (optional) Group ID to link related photos together
 */

const portfolioData = {
    
    // Editorial Category
    editorial: [
        {
            id: 'ed-1',
            src: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80',
            alt: 'Editorial makeup look - dramatic eyes',
            group: 'editorial-shoot-1'
        },
        {
            id: 'ed-2',
            src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80',
            alt: 'Editorial makeup - natural beauty',
            group: 'editorial-shoot-1'
        },
        {
            id: 'ed-3',
            src: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80',
            alt: 'Editorial makeup - bold lips',
            group: 'editorial-shoot-2'
        },
        {
            id: 'ed-4',
            src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
            alt: 'Editorial makeup - soft glam',
            group: 'editorial-shoot-2'
        },
        {
            id: 'ed-5',
            src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
            alt: 'Editorial makeup - artistic look',
            group: 'editorial-shoot-3'
        },
        {
            id: 'ed-6',
            src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80',
            alt: 'Editorial makeup - high fashion',
            group: 'editorial-shoot-3'
        }
    ],
    
    // Fashion Category
    fashion: [
        {
            id: 'fa-1',
            src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
            alt: 'Fashion makeup - runway look',
            group: 'fashion-shoot-1'
        },
        {
            id: 'fa-2',
            src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
            alt: 'Fashion makeup - editorial style',
            group: 'fashion-shoot-1'
        },
        {
            id: 'fa-3',
            src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
            alt: 'Fashion makeup - street style',
            group: 'fashion-shoot-2'
        },
        {
            id: 'fa-4',
            src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80',
            alt: 'Fashion makeup - avant garde',
            group: 'fashion-shoot-2'
        },
        {
            id: 'fa-5',
            src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
            alt: 'Fashion makeup - minimal chic',
            group: 'fashion-shoot-3'
        },
        {
            id: 'fa-6',
            src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
            alt: 'Fashion makeup - high fashion portrait',
            group: 'fashion-shoot-3'
        }
    ],
    
    // Beauty Category
    beauty: [
        {
            id: 'be-1',
            src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
            alt: 'Beauty makeup - flawless skin',
            group: 'beauty-shoot-1'
        },
        {
            id: 'be-2',
            src: 'https://images.unsplash.com/photo-1560577744-b84c5e6aa857?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1560577744-b84c5e6aa857?w=600&q=80',
            alt: 'Beauty makeup - natural glow',
            group: 'beauty-shoot-1'
        },
        {
            id: 'be-3',
            src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
            alt: 'Beauty makeup - soft focus',
            group: 'beauty-shoot-2'
        },
        {
            id: 'be-4',
            src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
            alt: 'Beauty makeup - dewy finish',
            group: 'beauty-shoot-2'
        },
        {
            id: 'be-5',
            src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&q=80',
            alt: 'Beauty makeup - skincare focus',
            group: 'beauty-shoot-3'
        },
        {
            id: 'be-6',
            src: 'https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?w=600&q=80',
            alt: 'Beauty makeup - luminous complexion',
            group: 'beauty-shoot-3'
        }
    ],
    
    // Glam Category
    glam: [
        {
            id: 'gl-1',
            src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
            alt: 'Glam makeup - red carpet ready',
            group: 'glam-shoot-1'
        },
        {
            id: 'gl-2',
            src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&q=80',
            alt: 'Glam makeup - smokey eyes',
            group: 'glam-shoot-1'
        },
        {
            id: 'gl-3',
            src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&q=80',
            alt: 'Glam makeup - evening look',
            group: 'glam-shoot-2'
        },
        {
            id: 'gl-4',
            src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
            alt: 'Glam makeup - bold and beautiful',
            group: 'glam-shoot-2'
        },
        {
            id: 'gl-5',
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
            alt: 'Glam makeup - golden hour',
            group: 'glam-shoot-3'
        },
        {
            id: 'gl-6',
            src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
            alt: 'Glam makeup - statement look',
            group: 'glam-shoot-3'
        }
    ],
    
    // Bridal Category
    bridal: [
        {
            id: 'br-1',
            src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
            alt: 'Bridal makeup - classic bride',
            group: 'bridal-shoot-1'
        },
        {
            id: 'br-2',
            src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
            alt: 'Bridal makeup - traditional look',
            group: 'bridal-shoot-1'
        },
        {
            id: 'br-3',
            src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
            alt: 'Bridal makeup - soft romantic',
            group: 'bridal-shoot-2'
        },
        {
            id: 'br-4',
            src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
            alt: 'Bridal makeup - elegant bride',
            group: 'bridal-shoot-2'
        },
        {
            id: 'br-5',
            src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            alt: 'Bridal makeup - modern bride',
            group: 'bridal-shoot-3'
        },
        {
            id: 'br-6',
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            alt: 'Bridal makeup - timeless beauty',
            group: 'bridal-shoot-3'
        }
    ]
};

/**
 * Example configuration for using your own images:
 * 
 * // Using images from your GitHub repository
 * {
 *     id: 'br-1',
 *     src: 'https://raw.githubusercontent.com/shivikatiwari9/makeup/main/subpages/bridal/IMG_7693.jpeg',
 *     thumb: 'https://raw.githubusercontent.com/shivikatiwari9/makeup/main/subpages/bridal/IMG_7693.jpeg',
 *     alt: 'Bridal makeup look',
 *     group: 'bridal-wedding-1'
 * }
 * 
 * // Using local images (stored in your portfolio folder)
 * {
 *     id: 'ed-1',
 *     src: 'images/editorial/shoot1-look1.jpg',
 *     thumb: 'images/editorial/thumb-shoot1-look1.jpg',
 *     alt: 'Editorial magazine shoot',
 *     group: 'editorial-magazine-1'
 * }
 */

// Export for use in main.js (for module-based systems)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
