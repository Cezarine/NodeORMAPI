module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Turmas', [
			{
				data_inicio: "2020-02-01",
				nivel_Id: 1,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				data_inicio: "2020-02-01",
				nivel_Id: 2,
				docente_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_inicio: "2020-02-01",
				nivel_Id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				data_inicio: "2020-07-01",
				nivel_Id: 3,
				docente_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
  }
}
