'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      event_name: 'Morning Coffee',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
      
    },{
      event_name: 'Afternoon Showing',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      event_name: 'Evening Performance',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      event_name: 'Midnight Experience',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      event_name: 'Lucky Draw',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      event_name: 'Special Showcase',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    },{
      event_name: 'Lively Day',
      date: '2023-05-01T12:00:00',
      start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};

