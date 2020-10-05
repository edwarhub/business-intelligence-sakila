cube(`DimCity`, {
  sql: `SELECT * FROM bodega_sakila.dim_city`,
  
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
      sql: `city_id`,
      type: `number`,
      primaryKey: true
    },

    name: {
      sql: `name`,
      type: `string`
    }
  }
});
