const get = (req, res, next) => {
  try {
    const products = [
      { id: '1a', name: 'SUSE Rancher Tee' },
      { id: '1b', name: 'Cow-meleon Face Mask' },
      { id: '1c', name: 'Cow-meleon Plushie' },
      { id: '1d', name: 'Longhorn T-Shirt' },
      { id: '1e', name: 'Rancher Cow T-Shirt' }
    ];
    res.status(200).send(products);
  } catch (e) {
    next();
  }
};

const getById = (req, res, next) => {
  const productId = req.params.id;
  const products = [
    { id: '1a', name: 'SUSE Rancher Tee' },
    { id: '1b', name: 'Cow-meleon Face Mask' },
    { id: '1c', name: 'Cow-meleon Plushie' },
    { id: '1d', name: 'Longhorn T-Shirt' },
    { id: '1e', name: 'Rancher Cow T-Shirt' }
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
