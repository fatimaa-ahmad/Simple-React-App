import React from 'react';

const Products = () => {
  return (
    <div>
      <h2 className="section-title">Our Products</h2>

      {/* Container holds two columns: Flowers on the left, Chocolates on the right */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '20px', 
          justifyContent: 'space-around' 
        }}
      >
        {/* ====== FLOWERS SECTION ====== */}
        <div 
          style={{ 
            flex: '1', 
            minWidth: '300px', 
            textAlign: 'center' 
          }}
        >
          <h3 className="section-title">Flowers</h3>

          {/* Flower 1 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/roses.webp" 
              alt="Roses" 
              className="responsive-image" 
            />
            <h4>Roses</h4>
            <p>A timeless classic, perfect for any romantic occasion.</p>
          </div>

          {/* Flower 2 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/Tulips.jpeg" 
              alt="Tulips" 
              className="responsive-image" 
            />
            <h4>Tulips</h4>
            <p>Bright and cheerful, a symbol of perfect love.</p>
          </div>

          {/* Flower 3 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/lilies.webp" 
              alt="Lilies" 
              className="responsive-image" 
            />
            <h4>Lilies</h4>
            <p>Elegant and fragrant, a touch of sophistication.</p>
          </div>

          {/* Flower 4 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/orchids.webp" 
              alt="Orchids" 
              className="responsive-image" 
            />
            <h4>Orchids</h4>
            <p>Exotic and refined, perfect for a modern look.</p>
          </div>

          {/* Flower 5 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/sunflower.jpeg" 
              alt="Sunflowers" 
              className="responsive-image" 
            />
            <h4>Sunflowers</h4>
            <p>Bright and sunny, guaranteed to lift anyone’s spirits.</p>
          </div>
        </div>

        {/* ====== CHOCOLATES SECTION ====== */}
        <div 
          style={{ 
            flex: '1', 
            minWidth: '300px', 
            textAlign: 'center' 
          }}
        >
          <h3 className="section-title">Chocolates</h3>

          {/* Chocolate 1 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/darkchocolate.webp" 
              alt="Dark Chocolate" 
              className="responsive-image" 
            />
            <h4>Dark Chocolate</h4>
            <p>Rich in flavor, a perfect balance of bitter and sweet.</p>
          </div>

          {/* Chocolate 2 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/milk.webp" 
              alt="Milk Chocolate" 
              className="responsive-image" 
            />
            <h4>Milk Chocolate</h4>
            <p>Creamy, smooth, and sweet—a family favorite.</p>
          </div>

          {/* Chocolate 3 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/white.jpg" 
              alt="White Chocolate" 
              className="responsive-image" 
            />
            <h4>White Chocolate</h4>
            <p>Sweet and buttery, a delicate treat for any occasion.</p>
          </div>

          {/* Chocolate 4 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/truffle.webp" 
              alt="Truffles" 
              className="responsive-image" 
            />
            <h4>Truffles</h4>
            <p>Luxurious bite-sized confections with a velvety center.</p>
          </div>

          {/* Chocolate 5 */}
          <div style={{ marginBottom: '20px' }}>
            <img 
              src="/assorted.webp" 
              alt="Assorted Chocolates" 
              className="responsive-image" 
            />
            <h4>Assorted Box</h4>
            <p>A delightful mix of flavors for every chocolate lover.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
