cube(`DimFilm`, {
  sql: `SELECT * FROM bodega_sakila.dim_film`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    id: {
      sql: `film_id`,
      type: `number`,
      primaryKey: true
    },
    name: {
      sql: `name`,
      type: `string`
    }
  }
});
