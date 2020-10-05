cube(`FacRental`, {
  sql: `SELECT * FROM bodega_sakila.fac_rental`,
  
  joins: {
    DimStore: {
      relationship: `belongsTo`,
      sql: `${FacRental}.store_id = ${DimStore}.store_id`
    },
    DimDate: {
      relationship: `belongsTo`,
      sql: `${FacRental}.date_id = ${DimDate}.date_id`
    },
    DimFilm: {
      relationship: `belongsTo`,
      sql: `${FacRental}.film_id = ${DimFilm}.film_id`
    },
    DimCity: {
      relationship: `belongsTo`,
      sql: `${FacRental}.city_id = ${DimCity}.city_id`
    },
    DimLanguage: {
      relationship: `belongsTo`,
      sql: `${FacRental}.language_id = ${DimLanguage}.language_id`
    }				
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
	
    store_id: {
      sql: `store_id`,
      type: `number`
    }
	
  }
});
