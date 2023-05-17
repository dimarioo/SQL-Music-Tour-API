'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bands', [{
      band_name: 'One Republic',
      band_genre: 'Pop',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
      
    },{
      band_name: 'Nirvana',
      band_genre: 'Rock',
      start_time: '2023-06-01T12:00:00',
      end_time: '2023-10-31T23:00:00'
    },{
      band_name: 'AC/DC',
      band_genre: 'Classic Rock',
      start_time: '2023-04-01T12:00:00',
      end_time: '2023-08-15T12:00:00'
    },{
      band_name: 'The Beatles',
      band_genre: 'Rock',
      start_time: '2023-06-15T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      band_name: 'Imagine Dragons',
      band_genre: 'Classic Pop',
      start_time: '2023-07-15T12:00:00',
      end_time: '2023-08-05T12:00:00'
    },{
      band_name: 'Blink-182',
      band_genre: 'Punk Rock',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-10-31T12:00:00'
    },{
      band_name: 'Cold Play',
      band_genre: 'Pop',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bands', null, {});
  }
};