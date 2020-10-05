cube(`DimLanguage`, {
  sql: `SELECT * FROM bodega_sakila.dim_language`,
  
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
      sql: `language_id`,
      type: `number`,
      primaryKey: true
    },
    name: {
      sql: `name`,
      type: `string`
    }
  }
});
