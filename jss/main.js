/**
 * Shivika Tiwari - Makeup Artist Portfolio
 * Main JavaScript functionality
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const photoGrid = document.getElementById('photoGrid');
    const expandedView = document.getElementById('expandedView');
    const expandedPhotos = document.getElementById('expandedPhotos');
    const closeExpandedBtn = document.querySelector('.close-expanded');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    // State
    let currentCategory = 'editorial';
    let currentExpandedPhotoId = null;
    let currentLightboxIndex = 0;
    let lightboxImages = [];

    // Initialize
    function init() {
        setupNavigation();
        setupMobileMenu();
        setupCategoryNavigation();
        setupLightbox();
        setupContactForm();
        setupScrollEffects();
        
        // Load first category by default
        loadCategory('editorial');
        
        // Handle hash navigation
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
    }

    // Navigation between sections
    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                showSection(sectionId);
                closeMobileMenu();
                
                // Update URL hash
                history.pushState(null, '', `#${sectionId}`);
            });
        });
    }

    function showSection(sectionId) {
        // Update nav links
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
        });

        // Update sections
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Scroll to top when changing sections
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        }
    }

    // Mobile Menu
    function setupMobileMenu() {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header')) {
                closeMobileMenu();
            }
        });
    }

    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    }

    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
    }

    // Category Navigation
    function setupCategoryNavigation() {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                
                // Update active state
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Close expanded view if open
                closeExpandedView();
                
                // Load new category
                loadCategory(category);
            });
        });
    }

    // Load Category Photos
    function loadCategory(category) {
        currentCategory = category;
        const photos = portfolioData[category] || [];
        
        // Clear existing photos
        photoGrid.innerHTML = '';
        
        // Add photos to grid
        photos.forEach((photo, index) => {
            const photoItem = createPhotoItem(photo, index);
            photoGrid.appendChild(photoItem);
        });

        // Lazy load images
        lazyLoadImages();
    }

    function createPhotoItem(photo, index) {
        const div = document.createElement('div');
        div.className = 'photo-item';
        div.setAttribute('data-id', photo.id);
        div.setAttribute('data-group', photo.group || '');
        div.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.setAttribute('data-src', photo.thumb);
        img.setAttribute('alt', photo.alt);
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 4"%3E%3C/svg%3E';
        
        div.appendChild(img);
        
        // Click handler - expand to show related photos
        div.addEventListener('click', () => handlePhotoClick(photo, index));
        
        return div;
    }

    // Photo Click Handler - Shows expanded view with related photos
    function handlePhotoClick(photo, index) {
        const photos = portfolioData[currentCategory];
        
        // If same photo clicked, close expanded view
        if (currentExpandedPhotoId === photo.id) {
            closeExpandedView();
            return;
        }
        
        // Get related photos (same group)
        let relatedPhotos;
        if (photo.group) {
            relatedPhotos = photos.filter(p => p.group === photo.group);
        } else {
            relatedPhotos = [photo];
        }
        
        // Update state
        currentExpandedPhotoId = photo.id;
        
        // Remove expanded class from all items
        document.querySelectorAll('.photo-item').forEach(item => {
            item.classList.remove('expanded');
        });
        
        // Add expanded class to clicked item
        const clickedItem = document.querySelector(`[data-id="${photo.id}"]`);
        if (clickedItem) {
            clickedItem.classList.add('expanded');
        }
        
        // Populate expanded view
        expandedPhotos.innerHTML = '';
        relatedPhotos.forEach((p, i) => {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'expanded-photo';
            photoDiv.setAttribute('data-index', i);
            
            const img = document.createElement('img');
            img.src = p.src;
            img.alt = p.alt;
            img.addEventListener('click', () => openLightbox(relatedPhotos, i));
            
            photoDiv.appendChild(img);
            expandedPhotos.appendChild(photoDiv);
        });
        
        // Show expanded view
        expandedView.classList.add('active');
        
        // Scroll to expanded view
        expandedView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeExpandedView() {
        expandedView.classList.remove('active');
        currentExpandedPhotoId = null;
        
        // Remove expanded class from all items
        document.querySelectorAll('.photo-item').forEach(item => {
            item.classList.remove('expanded');
        });
    }

    // Close expanded view button
    if (closeExpandedBtn) {
        closeExpandedBtn.addEventListener('click', closeExpandedView);
    }

    // Lightbox
    function setupLightbox() {
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        
        // Close on backdrop click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        });
    }

    function openLightbox(images, startIndex = 0) {
        lightboxImages = images;
        currentLightboxIndex = startIndex;
        
        showLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showLightboxImage() {
        if (lightboxImages.length === 0) return;
        
        const image = lightboxImages[currentLightboxIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        
        // Update navigation visibility
        lightboxPrev.style.display = lightboxImages.length > 1 ? 'block' : 'none';
        lightboxNext.style.display = lightboxImages.length > 1 ? 'block' : 'none';
    }

    function showPrevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage();
    }

    function showNextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
        showLightboxImage();
    }

    // Lazy Loading
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Contact Form
    function setupContactForm() {
        const form = document.querySelector('.contact-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(form);
                
                // For Netlify forms
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form error:', error);
                showFormMessage('Something went wrong. Please try again or email directly.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    function showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
        messageDiv.textContent = message;
        
        const form = document.querySelector('.contact-form');
        form.insertBefore(messageDiv, form.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Scroll Effects
    function setupScrollEffects() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Header shadow on scroll
            if (currentScroll > 10) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Utility: Debounce
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
