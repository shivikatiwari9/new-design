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
        // Vogue HK Shoot (4 images)
        {
            id: 'ed-1',
            src: 'images/editorial/Vogue HK1.png',
            thumb: 'images/editorial/Vogue HK1.png',
            alt: 'Vogue Hong Kong editorial shoot',
            group: 'vogue-hk'
        },
        {
            id: 'ed-2',
            src: 'images/editorial/Vogue HK2.png',
            thumb: 'images/editorial/Vogue HK2.png',
            alt: 'Vogue Hong Kong editorial shoot',
            group: 'vogue-hk'
        },
        {
            id: 'ed-3',
            src: 'images/editorial/Vogue HK3.png',
            thumb: 'images/editorial/Vogue HK3.png',
            alt: 'Vogue Hong Kong editorial shoot',
            group: 'vogue-hk'
        },
        {
            id: 'ed-4',
            src: 'images/editorial/Vogue HK4.png',
            thumb: 'images/editorial/Vogue HK4.png',
            alt: 'Vogue Hong Kong editorial shoot',
            group: 'vogue-hk'
        },
        // 26th Feb Magazine Shoot (8 images)
        {
            id: 'ed-5',
            src: 'images/editorial/26th Feb magazine6190.jpg',
            thumb: 'images/editorial/26th Feb magazine6190.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-6',
            src: 'images/editorial/26th Feb magazine6224.jpg',
            thumb: 'images/editorial/26th Feb magazine6224.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-7',
            src: 'images/editorial/26th Feb magazine6249.jpg',
            thumb: 'images/editorial/26th Feb magazine6249.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-8',
            src: 'images/editorial/26th Feb magazine6472.jpg',
            thumb: 'images/editorial/26th Feb magazine6472.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-9',
            src: 'images/editorial/26th Feb magazine6530.jpg',
            thumb: 'images/editorial/26th Feb magazine6530.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-10',
            src: 'images/editorial/26th Feb magazine6540.jpg',
            thumb: 'images/editorial/26th Feb magazine6540.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-11',
            src: 'images/editorial/26th Feb magazine6694.jpg',
            thumb: 'images/editorial/26th Feb magazine6694.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        {
            id: 'ed-12',
            src: 'images/editorial/26th Feb magazine6707.jpg',
            thumb: 'images/editorial/26th Feb magazine6707.jpg',
            alt: 'Magazine editorial shoot',
            group: 'feb-magazine'
        },
        // 12 Feb Grace Shoot (3 images)
        {
            id: 'ed-13',
            src: 'images/editorial/12 feb Grace3816.jpg',
            thumb: 'images/editorial/12 feb Grace3816.jpg',
            alt: 'Grace editorial shoot',
            group: 'grace-shoot'
        },
        {
            id: 'ed-14',
            src: 'images/editorial/12 feb Grace3822.jpg',
            thumb: 'images/editorial/12 feb Grace3822.jpg',
            alt: 'Grace editorial shoot',
            group: 'grace-shoot'
        },
        {
            id: 'ed-15',
            src: 'images/editorial/12 feb.jpg',
            thumb: 'images/editorial/12 feb.jpg',
            alt: 'Grace editorial shoot',
            group: 'grace-shoot'
        },
        // Iulia Test (1 image)
        {
            id: 'ed-16',
            src: 'images/editorial/Iuliatest.jpg',
            thumb: 'images/editorial/Iuliatest.jpg',
            alt: 'Iulia editorial test shoot',
            group: 'iulia-test'
        }
    ],

    // Fashion Category
    fashion: [
        // Jennifer Cole / Linden Staub by Samuel Geals (2 images)
        {
            id: 'fa-1',
            src: 'images/fashion/Jennifer_Cole_Linden_Staub_by_Samuel_Geals_Photography_3.jpg',
            thumb: 'images/fashion/Jennifer_Cole_Linden_Staub_by_Samuel_Geals_Photography_3.jpg',
            alt: 'Jennifer Cole - Linden Staub by Samuel Geals Photography',
            group: 'jennifer-cole-shoot'
        },
        {
            id: 'fa-2',
            src: 'images/fashion/Jennifer_Cole_Linden_Staub_by_Samuel_Geals_Photography_9.jpg',
            thumb: 'images/fashion/Jennifer_Cole_Linden_Staub_by_Samuel_Geals_Photography_9.jpg',
            alt: 'Jennifer Cole - Linden Staub by Samuel Geals Photography',
            group: 'jennifer-cole-shoot'
        },
        // Zhou / Linden Staub by Samuel Geals (1 image)
        {
            id: 'fa-3',
            src: 'images/fashion/Zhou_Linden_Staub_by_Samuel_Geals_Photography_5.jpg',
            thumb: 'images/fashion/Zhou_Linden_Staub_by_Samuel_Geals_Photography_5.jpg',
            alt: 'Zhou - Linden Staub by Samuel Geals Photography',
            group: 'zhou-shoot'
        },
        // Other Fashion Shoots
        {
            id: 'fa-4',
            src: 'images/fashion/IMG_1955.JPG',
            thumb: 'images/fashion/IMG_1955.JPG',
            alt: 'Fashion shoot',
            group: 'fashion-misc-1'
        },
        {
            id: 'fa-5',
            src: 'images/fashion/IMG_1979.JPG',
            thumb: 'images/fashion/IMG_1979.JPG',
            alt: 'Fashion shoot',
            group: 'fashion-misc-1'
        },
        {
            id: 'fa-6',
            src: 'images/fashion/9556A787-AB00-4615-9F90-CF7878BF1D1C.jpg',
            thumb: 'images/fashion/9556A787-AB00-4615-9F90-CF7878BF1D1C.jpg',
            alt: 'Fashion shoot',
            group: 'fashion-misc-2'
        }
    ],

    // Beauty Category
    beauty: [
        {
            id: 'be-1',
            src: 'images/beauty/IMG_4416.JPG',
            thumb: 'images/beauty/IMG_4416.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-1'
        },
        {
            id: 'be-2',
            src: 'images/beauty/IMG_4688.JPG',
            thumb: 'images/beauty/IMG_4688.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-1'
        },
        {
            id: 'be-3',
            src: 'images/beauty/IMG_4693.JPG',
            thumb: 'images/beauty/IMG_4693.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-2'
        },
        {
            id: 'be-4',
            src: 'images/beauty/IMG_4694.JPG',
            thumb: 'images/beauty/IMG_4694.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-2'
        },
        {
            id: 'be-5',
            src: 'images/beauty/IMG_5098.JPG',
            thumb: 'images/beauty/IMG_5098.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-3'
        },
        {
            id: 'be-6',
            src: 'images/beauty/IMG_5126.JPG',
            thumb: 'images/beauty/IMG_5126.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-3'
        },
        {
            id: 'be-7',
            src: 'images/beauty/IMG_5127.JPG',
            thumb: 'images/beauty/IMG_5127.JPG',
            alt: 'Beauty makeup look',
            group: 'beauty-shoot-3'
        }
    ],

    // Glam Category
    glam: [
        {
            id: 'gl-1',
            src: 'images/glam/lizaKoshy.jpg',
            thumb: 'images/glam/lizaKoshy.jpg',
            alt: 'Liza Koshy glam makeup',
            group: 'liza-koshy'
        },
        {
            id: 'gl-2',
            src: 'images/glam/IMG_2702.JPG',
            thumb: 'images/glam/IMG_2702.JPG',
            alt: 'Glam makeup look',
            group: 'glam-look-1'
        }
    ],

    // Bridal Category (no images yet - keeping placeholders)
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
