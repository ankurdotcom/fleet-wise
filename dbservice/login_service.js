const dbConnectionPool = require('./common/db_pool');

// const users = [
//     { id: 1, username: 'user1', password: '$2b$10$AqYF1jRVJQpCmRsx2PKLG.9MHoSdF4WGAS5QGtG9RQDzqhNqgRC1a' }, // Hashed 'password1'
//     { id: 2, username: 'user2', password: '$2b$10$weGiC8uKJ/lJjIV6aS6BWu0SXBlzALThP78UNA/wyVGqZuBczkWTG' }, // Hashed 'password2'
//   ];

const getUsers = async () => {


    const dataArray = [];
    const query = {
      name: 'get-all-users-data',
      text: 'SELECT username, "password", userid FROM fleetwise_schema.users ',
      values: [],
    }
    
    try {
      const result = await dbConnectionPool.query(query);
      console.log(result);
      result.rows.forEach((d) => dataArray.push(d));
      return dataArray;
    } catch (error) {
      console.error('Error:', error);
    }
  
}

module.exports = { getUsers };