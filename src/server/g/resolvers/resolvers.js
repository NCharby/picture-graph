
export default {
  Query: { 
        image: async (_source, { id }, { dataSources }) => {
            return dataSources.ImageAPI.image(id);
        },
        search: async (_source, { page, per_page, ...rest }, { dataSources }) => {
            return dataSources.ImageAPI.search(rest, page, per_page);
        },
  }
};