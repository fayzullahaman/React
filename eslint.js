// Filter Method
  const [category, setCategory] = useState('');
  const filteredProducts = products.filter((product) => product.category.includes(category));

  const [prodStatus, setStatus] = useState('');
  // console.log(prodStatus);

  // const filteredByAvailability = filteredProducts.filter((product) =>
  //   product.status.includes(prodStatus)
  // );

  // Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.

// Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.target.value);
    // console.log(searchItems);
  };

  // let searchedProducts = products;
  let searchedProducts = filteredProducts;
  searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
  );