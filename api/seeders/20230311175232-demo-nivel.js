module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Niveis', [
			{
				descri_nivel: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descri_nivel: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descri_nivel: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Niveis', null, {})
  }
}
