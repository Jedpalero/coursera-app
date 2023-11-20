import banner from "../icons_assets/restauranfood.jpg";

const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve Table</button>
        </div>
        <div>
          <img src={banner} alt="banner 1" width={250} height={200} />
        </div>
      </section>
    </header>
  );
};
export default Header;
