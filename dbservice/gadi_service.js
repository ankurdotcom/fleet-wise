const dbConnectionPool = require('./common/db_pool');

const getGadiList = async () => {

    const dataArray = [];
    const query = {
      name: 'get-all-gadi-number',
      text: 'SELECT distinct gadi_number  FROM fleetwise_schema.vehicle_master vm ',
      values: [],
    }
    
    try {
      const result = await dbConnectionPool.query(query);
      result.rows.forEach((d) => dataArray.push(d.gadi_number));
      return dataArray;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getGadiRokarList = async () => {

    const query = {
      name: 'get-gadi-rokar-by-rokar',
      text: `SELECT l.vehiclenumber as gadi_num, l.rokar as rokar_num FROM fleetwise_schema.loading l 
      order by l.loaddt desc`,
      values: [],
    }
    
    try {
      const result = await dbConnectionPool.query(query);
      const dataArray = [];
      result.rows.forEach((d) => dataArray.push(d));
      return dataArray;
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const getGadiByRokar = async (rokar) => {

    const dataArray = [];
    const query = {
      name: 'get-gadi-rokar-by-rokar',
      text: `SELECT l.vehiclenumber as gadi_num, l.rokar as rokar_num FROM fleetwise_schema.loading l 
      where l.rokar = $1 order by l.loaddt desc`,
      values: [rokar],
    }
    
    try {
      const result = await dbConnectionPool.query(query);
      result.rows.forEach((d) => dataArray.push(`{
                                          gadi_number: ${d.gadi_num},
                                          rokar_number: ${d.rokar_num}
                                        }`));
      return dataArray;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /**
   * 
   * @returns All Gaadi Detail
   */
  const getAllGaadi = async () => {
    const dataArray = [];

    const query = {
      name: 'get-all-gadi',
      text: `SELECT id, gadi_number, chassis_no, engine_no, current_owner_name, mobile_no, vin_no,
       fitness_valid_up_to, model_name, maker_name, vehicle_type, fuel_type, registration_date,
        tax_valid_up_to, emission_norm, financier, is_active, create_at, updated_at, created_by,
         updated_by FROM fleetwise_schema.vehicle_master vm
      order by vm.updated_at desc`,
      values: [],
    }

    try {
      
      const result = await dbConnectionPool.query(query);

      const rowsFromDatabase = result.rows;
      
      const listOfObjects = rowsFromDatabase.map(d => {
        return {
          gadi_number: d.gadi_number,
        chassis_number: d.chassis_no,
        engine_number: d.engine_no,
        owner_name: d.current_owner_name,
        mobile: d.mobile_no,
        vin: d.vin_no,
        fitness_validity: d.fitness_valid_up_to,
        model: d.model_name,
        maker: d.maker_name,
        vehicle_type: d.vehicle_type,
        fuel_type: d.fuel_type,
        registration_date: d.registration_date,
        tax_valid_up_to: d.tax_valid_up_to,
        emission_norm: d.emission_norm,
        financier: d.financier,
        is_active: d.is_active,
        create_date: d.create_at,
        last_update_date: d.updated_at,
        created_by: d.created_by,
        updated_by: d.updated_by,
        };


      });

      return listOfObjects;

    } catch (error) {
      console.error('Error:', error);
    }

  }

  module.exports = {  getGadiList, getGadiByRokar, getGadiRokarList, getAllGaadi };