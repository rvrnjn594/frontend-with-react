import "./Hero.css";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          We are here to help you with our shoes. Your feet deserve the best and
          were here to help you with our shoes.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On </p>
          <div className="brand-icons">
            <img src="" alt="amzon logo" />
            <img src="" alt="flipkart logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          className="product-image"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="shoes image"
        />
      </div>
    </main>
  );
}

export default Hero;
