cube(`DimDate`, {
  sql: `SELECT * FROM bodega_sakila.dim_date`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [monthName]
    }
  },
  
  dimensions: {
    id: {
      sql: `date_id`,
      type: `number`,
      primaryKey: true
    },

    monthName: {
      sql: `month_name`,
      type: `string`
    },
    year: {
      sql: `year`,
      type: `number`
    },
    month: {
      sql: `month`,
      type: `string`
    },
    day: {
      sql: `day`,
      type: `number`
    } 	
		
  }
});
