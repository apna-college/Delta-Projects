 const API_BASE = 'https://world.openfoodfacts.org';
        
        // DOM Elements
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const results = document.getElementById('results');
        const noResults = document.getElementById('noResults');
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.getElementById('closeModal');

        // Utility Functions
        function showLoading() {
            loading.style.display = 'block';
            error.style.display = 'none';
            results.innerHTML = '';
            noResults.style.display = 'none';
        }

        function hideLoading() {
            loading.style.display = 'none';
        }

        function showError(message) {
            error.textContent = message;
            error.style.display = 'block';
            hideLoading();
        }

        function getNutriScoreClass(grade) {
            if (!grade) return 'nutri-unknown';
            switch (grade.toLowerCase()) {
                case 'a': return 'nutri-a';
                case 'b': return 'nutri-b';
                case 'c': return 'nutri-c';
                case 'd': return 'nutri-d';
                case 'e': return 'nutri-e';
                default: return 'nutri-unknown';
            }
        }

        function getNovaClass(nova) {
            if (!nova) return 'nutri-unknown';
            return `nova-${nova}`;
        }

        function formatNutrient(value, unit = 'g') {
            if (value === undefined || value === null) return 'N/A';
            return `${parseFloat(value).toFixed(1)} ${unit}`;
        }

        // API Functions
        async function searchProducts(query) {
            const response = await fetch(
                `${API_BASE}/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=20`
            );
            
            if (!response.ok) {
                throw new Error('Failed to search products');
            }
            
            return response.json();
        }

        async function getRandomProducts() {
            const randomTerms = ['chocolate', 'bread', 'milk', 'cheese', 'yogurt', 'apple', 'banana'];
            const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)];
            return searchProducts(randomTerm);
        }

        // Render Functions
        function renderProductCard(product) {
            const productName = product.product_name || product.product_name_en || 'Unknown Product';
            const imageUrl = product.image_front_url || product.image_url;
            const brands = product.brands || '';
            const categories = product.categories ? product.categories.split(',').slice(0, 2).join(', ') : '';

            return `
                <div class="product-card" onclick="showProductDetails('${product._id}')">
                    <div class="product-image">
                        ${imageUrl ? 
                            `<img src="${imageUrl}" alt="${productName}" loading="lazy">` : 
                            '<div style="font-size: 3rem;">🍎</div>'
                        }
                        <div class="product-badges">
                            ${product.nutriscore_grade ? 
                                `<span class="badge ${getNutriScoreClass(product.nutriscore_grade)}">${product.nutriscore_grade.toUpperCase()}</span>` : 
                                ''
                            }
                            ${product.nova_group ? 
                                `<span class="badge ${getNovaClass(product.nova_group)}">★${product.nova_group}</span>` : 
                                ''
                            }
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${productName}</h3>
                        ${brands ? `<p class="product-brand">${brands}</p>` : ''}
                        ${categories ? `<p class="product-category">${categories}</p>` : ''}
                    </div>
                </div>
            `;
        }

        function renderProducts(products) {
            hideLoading();
            
            if (products.length === 0) {
                noResults.style.display = 'block';
                return;
            }

            results.innerHTML = products.map(renderProductCard).join('');
        }

        function renderProductDetails(product) {
            const productName = product.product_name || product.product_name_en || 'Unknown Product';
            const imageUrl = product.image_front_url || product.image_url;
            const nutritionImageUrl = product.image_nutrition_url;
            const brands = product.brands || '';
            const ingredients = product.ingredients_text || product.ingredients_text_en || '';
            const allergens = product.allergens || product.allergens_en || '';
            const origins = product.origins || '';
            const manufacturingPlaces = product.manufacturing_places || '';
            const nutriments = product.nutriments || {};

            return `
                <div class="product-details">
                    <div>
                        <div class="detail-section">
                            <div class="product-image" style="height: 300px; margin-bottom: 20px;">
                                ${imageUrl ? 
                                    `<img src="${imageUrl}" alt="${productName}" style="border-radius: 15px;">` : 
                                    '<div style="font-size: 4rem;">🍎</div>'
                                }
                            </div>
                            ${nutritionImageUrl ? 
                                `<div class="product-image" style="height: 200px;">
                                    <img src="${nutritionImageUrl}" alt="Nutrition facts" style="border-radius: 15px;">
                                </div>` : 
                                ''
                            }
                        </div>
                    </div>
                    
                    <div>
                        <div class="detail-section">
                            <h1 style="font-size: 2rem; margin-bottom: 10px; color: #2d3436;">${productName}</h1>
                            ${brands ? `<p style="font-size: 1.2rem; color: #636e72; margin-bottom: 15px;">${brands}</p>` : ''}
                            
                            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                                ${product.nutriscore_grade ? 
                                    `<span class="badge ${getNutriScoreClass(product.nutriscore_grade)}" style="padding: 8px 12px;">Nutri-Score: ${product.nutriscore_grade.toUpperCase()}</span>` : 
                                    ''
                                }
                                ${product.nova_group ? 
                                    `<span class="badge ${getNovaClass(product.nova_group)}" style="padding: 8px 12px;">NOVA: ★${product.nova_group}</span>` : 
                                    ''
                                }
                            </div>
                        </div>

                        ${Object.keys(nutriments).length > 0 ? `
                            <div class="detail-section">
                                <h3>🥗 Nutrition Facts (per 100g)</h3>
                                <div class="nutrition-grid">
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.energy_kcal_100g, 'kcal')}</div>
                                        <div class="nutrition-label">Energy</div>
                                    </div>
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.fat_100g)}</div>
                                        <div class="nutrition-label">Fat</div>
                                    </div>
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.carbohydrates_100g)}</div>
                                        <div class="nutrition-label">Carbs</div>
                                    </div>
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.proteins_100g)}</div>
                                        <div class="nutrition-label">Protein</div>
                                    </div>
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.sugars_100g)}</div>
                                        <div class="nutrition-label">Sugars</div>
                                    </div>
                                    <div class="nutrition-item">
                                        <div class="nutrition-value">${formatNutrient(nutriments.salt_100g)}</div>
                                        <div class="nutrition-label">Salt</div>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${allergens ? `
                            <div class="detail-section" style="background: #ffe8e8;">
                                <h3 style="color: #d63031;">⚠️ Allergens</h3>
                                <p style="color: #d63031;">${allergens}</p>
                            </div>
                        ` : ''}

                        ${ingredients ? `
                            <div class="detail-section" style="background: #e8f5e8;">
                                <h3 style="color: #00b894;">🧪 Ingredients</h3>
                                <p style="color: #00b894; line-height: 1.6;">${ingredients}</p>
                            </div>
                        ` : ''}

                        ${origins || manufacturingPlaces ? `
                            <div class="detail-section" style="background: #fff3e0;">
                                <h3 style="color: #e17055;">🌍 Origin & Manufacturing</h3>
                                ${origins ? `<p style="color: #e17055;"><strong>Origins:</strong> ${origins}</p>` : ''}
                                ${manufacturingPlaces ? `<p style="color: #e17055;"><strong>Manufacturing:</strong> ${manufacturingPlaces}</p>` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Event Handlers
        async function handleSearch(query) {
            try {
                showLoading();
                const data = await searchProducts(query);
                renderProducts(data.products || []);
            } catch (err) {
                showError('Failed to search products. Please try again.');
                console.error('Search error:', err);
            }
        }

        async function showProductDetails(productId) {
            try {
                showLoading();
                const response = await fetch(`${API_BASE}/api/v0/product/${productId}.json`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                
                const data = await response.json();
                
                if (data.status === 1 && data.product) {
                    modalBody.innerHTML = renderProductDetails(data.product);
                    modal.classList.add('active');
                } else {
                    showError('Product details not found');
                }
            } catch (err) {
                showError('Failed to load product details');
                console.error('Product details error:', err);
            } finally {
                hideLoading();
            }
        }

        // Event Listeners
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                handleSearch(query);
            }
        });

        // Suggestion buttons
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.dataset.query;
                searchInput.value = query;
                handleSearch(query);
            });
        });

        // Modal controls
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Load random products on page load
        window.addEventListener('load', async () => {
            try {
                const data = await getRandomProducts();
                renderProducts((data.products || []).slice(0, 8));
            } catch (err) {
                console.error('Failed to load initial products:', err);
            }
        });

        // Make showProductDetails globally available
        window.showProductDetails = showProductDetails;