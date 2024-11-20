import React, { useState, useContext, createContext } from 'react';

// Dane produktów
const products = [
  {
    id: 1,
    name: "Nike Air Force 1'07",
    price: 450,
    imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png',
    tags: ['Męskie', 'Lifestyle'],
  },
  {
    id: 2,
    name: 'Adidas Runfalcon 5',
    price: 230,
    imageUrl: 'https://img.eobuwie.cloud/eob_product_660w_880h(4/4/5/b/445b3d61e84fa8990aaad50dbd0dacaa41e6c69a_20_4067889164045_rz.jpg,webp)/sneakersy-adidas-runfalcon-5-ie0527-bialy-0000303986742.webp',
    tags: ['Damskie', 'Sportowe'],
  },
  {
    id: 3,
    name: 'Crocsy Klapki',
    price: 180,
    imageUrl: 'https://img01.ztat.net/article/spp-media-p1/81cd8ff2fb864120ae7aedc86be38d17/2f1a6eea304c46a7a49b5e6789080e05.jpg?imwidth=1800&filter=packshot',
    tags: ['Dziecięce', 'Klapki'],
  },
  {
    id: 4,
    name: 'Nike Calm SE',
    price: 250,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/67a8f1d0-21cc-4fec-9e85-ca439fa24f52/W+NIKE+CALM+SLIDE+SE.png',
    tags: ['Damskie', 'Klapki'],
  },
  {
    id: 5,
    name: 'Nike Precision 7',
    price: 330,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/177f7bfc-5226-46e5-9999-e149dfe3e4de/NIKE+PRECISION+VII.png',
    tags: ['Męskie', 'Sportowe'],
  },
  {
    id: 6,
    name: 'Adidas Samba',
    price: 380,
    imageUrl: 'https://img01.ztat.net/article/spp-media-p1/34f7481205e141e3961668ccf6bfdbc7/137c32396c3845848ec5f3dda5582bc9.jpg?imwidth=1800&filter=packshot',
    tags: ['Damskie', 'Lifestyle'],
  },
  {
    id: 7,
    name: 'Nike Sky Jordan 1',
    price: 320,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e821dc6-dedd-475b-a934-1922ea4ce097/SKY+JORDAN+1+%28PS%29.png',
    tags: ['Dziecięce', 'Lifestyle'],
  },
  {
    id: 8,
    name: 'Adidas Adilette 22',
    price: 180,
    imageUrl: 'https://img01.ztat.net/article/spp-media-p1/fe1b45790dcb414aa42346d0d427c3c7/87851834f7ec411c999a3bbf1d9b0604.jpg?imwidth=762&filter=packshot',
    tags: ['Męskie', 'Klapki'],
  },
  {
    id: 9,
    name: 'Nike Phanton GX II',
    price: 160,
    imageUrl: 'https://img01.ztat.net/article/spp-media-p1/19bcb80f303546ae8b0e49d34aa453d9/d015266962254bdf809db8005fd716ea.jpg?imwidth=1800&filter=packshot',
    tags: ['Dziecięce', 'Sportowe'],
  },
  {
    id: 10,
    name: 'Converse Trampki',
    price: 280,
    imageUrl: 'https://sklep.sizeer.com/media/cache/resolve/gallery/images/17/1723/m72ccefda5f02df98af12dbd615013ba1_313547_z_1.jpg',
    tags: ['Damskie', 'Lifestyle'],
  },
  {
    id: 11,
    name: 'Crocsy Klapki Happy Meal',
    price: 260,
    imageUrl: 'https://www.crocs.pl/data/gallery/2024/838da9499612cb0d315ac9657e23898750c6fcf8/6O1728385150100crocs.webp',
    tags: ['Dziecięce', 'Klapki'],
  },
  {
    id: 12,
    name: 'NIKE DUNK LOW GS',
    price: 390,
    imageUrl: 'https://sklep.sizeer.com/media/cache/gallery/rc/hghrkgjp/nike-dunk-low-gs-mlodziezowe-sneakersy-bialy-do6485-600.jpg',
    tags: ['Damskie', 'Lifestyle'],
  },
  {
    id: 13,
    name: 'Puma Buty koszykarskie',
    price: 580,
    imageUrl: 'https://images.footlocker.com/is/image/FLEU/316705515704_01?wid=581&hei=581&fmt=png-alpha',
    tags: ['Męskie', 'Sportowe'],
  },
  {
    id: 14,
    name: 'Adidas Runfalcon 3',
    price: 130,
    imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/15bda3926d7848ca8c7aaf4600271b02_9366/RunFalcon_3.0_Elastic_Lace_Top_Strap_Shoes_Czerwony_HP5872_01_standard.jpg',
    tags: ['Dziecięce', 'Sportowe'],
  },
  {
    id: 15,
    name: 'Jordan 4',
    price: 1400,
    imageUrl: 'https://grailpoint.com/wp-content/uploads/2024/08/jordan-4-white-thunder.webp',
    tags: ['Męskie', 'Lifestyle'],
  },
];

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username) => {
    if (!users[username]) {
      setUsers((prevUsers) => ({ ...prevUsers, [username]: [] }));
    }
    setCurrentUser(username);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addToCart = (product) => {
    if (currentUser) {
      setUsers((prevUsers) => {
        const userCart = prevUsers[currentUser];
        const updatedCart = userCart.some((item) => item.id === product.id)
          ? userCart
          : [...userCart, product];
        return { ...prevUsers, [currentUser]: updatedCart };
      });
    } else {
      alert('Zaloguj się, aby dodać produkt do koszyka.');
    }
  };

  const removeFromCart = (productId) => {
    if (currentUser) {
      setUsers((prevUsers) => {
        const updatedCart = prevUsers[currentUser].filter((item) => item.id !== productId);
        return { ...prevUsers, [currentUser]: updatedCart };
      });
    }
  };

  const getCart = () => {
    return currentUser ? users[currentUser] : [];
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout, addToCart, removeFromCart, getCart }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

const ProductCard = ({ product }) => {
  const { addToCart } = useUser();

  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.productPrice}>{product.price} zł</p>
      <div style={styles.tags}>
        {product.tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <button style={styles.button} onClick={() => addToCart(product)}>
        Dodaj do koszyka
      </button>
    </div>
  );
};

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesName = product.name.toLowerCase().includes(lowerCaseSearchTerm);
    const matchesTags = product.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseSearchTerm)
    );
    return matchesName || matchesTags;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Wyszukaj produkty lub tagi..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.container}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={styles.noResults}>Nie znaleziono produktów</p>
        )}
      </div>
    </div>
  );
};

const Cart = () => {
  const { getCart, removeFromCart } = useUser();
  const cartItems = getCart();

  if (!cartItems.length) {
    return null; 
  }

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.sectionTitle}>Twój koszyk</h2>
      <div style={styles.cartGrid}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.imageUrl} alt={item.name} style={styles.cartImage} />
            <div>
              <p style={styles.cartItemText}>{item.name}</p>
              <p style={styles.cartItemText}>{item.price} zł</p>
            </div>
            <button
              style={styles.removeButton}
              onClick={() => removeFromCart(item.id)}
            >
              Usuń
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const UserAuth = () => {
  const { currentUser, login, logout } = useUser();
  const [username, setUsername] = useState('');

  return (
    <div style={styles.authContainer}>
      {currentUser ? (
        <div>
          <p style={styles.authText}>Zalogowany jako: <strong>{currentUser}</strong></p>
          <button style={styles.button} onClick={logout}>
            Wyloguj się
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Wprowadź nazwę użytkownika"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <button
            style={styles.button}
            onClick={() => {
              if (username) login(username);
            }}
          >
            Zaloguj się
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <div style={styles.appContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}>E-Obuwie</h1>
        </header>
        <UserAuth />
        <ProductList />
        <Cart /> {/* Koszyk zawsze widoczny, jeśli użytkownik jest zalogowany */}
      </div>
    </UserProvider>
  );
};

const styles = {
  appContainer: {
    fontFamily: '"Roboto", sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 0',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#4CAF50',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  tags: {
    marginBottom: '10px',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#eee',
    padding: '5px 10px',
    borderRadius: '4px',
    margin: '5px 0',
    fontSize: '0.9rem',
  },
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  searchBar: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  cartContainer: {
    marginTop: '40px',
  },
  cartGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cartImage: {
    width: '80px',
    height: 'auto',
    borderRadius: '8px',
    marginRight: '10px',
  },
  cartItemText: {
    fontSize: '1rem',
    margin: '5px 0',
  },
  removeButton: {
    marginLeft: 'auto',
    backgroundColor: '#ff5722',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  authContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  authText: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '250px',
    fontSize: '1rem',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
  },
};

export default App;
