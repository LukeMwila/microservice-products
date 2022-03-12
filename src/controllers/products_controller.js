const get = (req, res, next) => {
  try {
    const products = [
      { id: '1a', name: 'DSLR Camera' },
      { id: '1b', name: 'Trainers' },
      { id: '1c', name: 'Bluetooth Headphones' },
      { id: '1d', name: 'Avengers T-Shirt' },
      { id: '1e', name: 'Coffee Mug' }
    ];
    res.status(200).send(products);
  } catch (e) {
    next();
  }
};

const getById = (req, res, next) => {
  const productId = req.params.id;
  const products = [
    { id: '1a', name: 'DSLR Camera' },
    { id: '1b', name: 'Trainers' },
    { id: '1c', name: 'Bluetooth Headphones' },
    { id: '1d', name: 'Avengers T-Shirt' },
    { id: '1e', name: 'Coffee Mug' }
  ];
  try {
    const product = products.filter(product => product.id === productId)[0]

    if(product){
      res.status(200).send(product);
    }else{
      res.status(404).send('No product matching the given id was found');
    }
    
  } catch (e) {
    next();
  }
};

const ProductsController = {
  get,
  getById
};

module.exports = ProductsController;
