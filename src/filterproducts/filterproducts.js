export const filtersearch = (data, search) => {
    if (!Array.isArray(data)) return [];
  
    const trimmedSearch = search.trim().toLowerCase();
  
    return data.filter(item =>
      item.name.toLowerCase().trim().startsWith(trimmedSearch)
    );
  };
  
export const filterproducts = (data, search, choise) => {
    let filter = filtersearch(data, search);
    if (choise === "rating") {
      filter = filter.sort((a, b) => b.rating - a.rating);
    } else if (choise === "smallprice") {
      filter = filter.sort((a, b) => b.price - a.price);
    } else if (choise === "bigprice") {
      filter = filter.sort((a, b) => a.price - b.price);
    }
    return filter;
};