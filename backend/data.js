import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Raul Loyola',
      email: 'raul.loy@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Apple MacBook Pro',
      slug: 'apple-macbook-pro',
      category: 'Electronics',
      image: '/images/apple-macbook-pro.jpg',
      price: 1299,
      countInStock: 8,
      brand: 'Apple',
      rating: 4.8,
      numReviews: 15,
      description:
        'The Apple MacBook Pro is a powerful and versatile laptop, perfect for professionals and creatives.',
    },
    {
      name: 'Samsung Galaxy S21',
      slug: 'samsung-galaxy-s21',
      category: 'Electronics',
      image: '/images/samsung-galaxy-s21.jpg',
      price: 799,
      countInStock: 12,
      brand: 'Samsung',
      rating: 4.6,
      numReviews: 18,
      description:
        'The Samsung Galaxy S21 is a top-of-the-line smartphone with cutting-edge features and performance.',
    },
    {
      name: 'Bose QuietComfort 35 II',
      slug: 'bose-quietcomfort-35-ii',
      category: 'Electronics',
      image: '/images/bose-quietcomfort-35-ii.jpg',
      price: 299,
      countInStock: 6,
      brand: 'Bose',
      rating: 4.5,
      numReviews: 11,
      description:
        'The Bose QuietComfort 35 II is a premium noise-cancelling headphone that delivers exceptional sound quality and comfort.',
    },
    {
      name: 'Nespresso VertuoPlus Coffee Maker',
      slug: 'nespresso-vertuoplus-coffee-maker',
      category: 'Home',
      image: '/images/nespresso-vertuoplus-coffee-maker.jpg',
      price: 149,
      countInStock: 9,
      brand: 'Nespresso',
      rating: 4.3,
      numReviews: 7,
      description:
        'The Nespresso VertuoPlus Coffee Maker is a stylish and easy-to-use appliance that makes delicious coffee with just the touch of a button.',
    },
    {
      name: 'iRobot Roomba 960',
      slug: 'irobot-roomba-960',
      category: 'Home',
      image: '/images/irobot-roomba-960.jpg',
      price: 499,
      countInStock: 3,
      brand: 'iRobot',
      rating: 4.7,
      numReviews: 21,
      description:
        'The iRobot Roomba 960 is a high-performance robotic vacuum cleaner that cleans your floors with precision and ease.',
    },
    {
      name: 'Instant Pot Duo Nova Pressure Cooker',
      slug: 'instant-pot-duo-nova-pressure-cooker',
      category: 'Home',
      image: '/images/instant-pot-duo-nova-pressure-cooker.jpg',
      price: 119,
      countInStock: 11,
      brand: 'Instant Pot',
      rating: 4.4,
      numReviews: 13,
      description:
        'The Instant Pot Duo Nova Pressure Cooker is a versatile and convenient kitchen appliance that lets you cook meals quickly and easily.',
    },
  ],
};

export default data;
