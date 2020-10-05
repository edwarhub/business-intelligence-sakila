cube(`DimStore`, {
  sql: `SELECT * FROM bodega_sakila.dim_store`,
  
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
      sql: `store_id`,
      type: `number`,
      primaryKey: true
    },

    name: {
      sql: `name`,
      type: `string`
    }
  }
});
