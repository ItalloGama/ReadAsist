'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tips',
      [
        {
          tipName: 'Stop the Inner Monologue',
          tip: 'One’s inner monologue, also known as subvocalization, is an extremely common trait among readers. It is the process of speaking the words in your head as you read, and it is the biggest obstacle that gets in the way of you being able to increase your reading speed.',
          img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffordhaminstitute.org%2Fnational%2Fcommentary%2Fexpanding-important-national-conversation-about-reading&psig=AOvVaw2AX6bULC9WBRoyPGrp85no&ust=1634070297934000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiG3bCYw_MCFQAAAAAdAAAAABAD',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Word–Chunking.',
          tip: 'Word-chunking closely parallels with the idea of eliminating the inner monologue. This is the act of reading multiple words at once, and is the key to reading faster. All of these reading tips tie together, yet word-chunking is probably the most active tool to use when you work to increase your reading speed.',
          img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2F2014%2F01%2Freading-a-novel-alters-brain-connectivity-so-what%2F&psig=AOvVaw2AX6bULC9WBRoyPGrp85no&ust=1634070297934000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiG3bCYw_MCFQAAAAAdAAAAABAJ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Do Not Reread the Words on the Page.',
          tip: 'Before we move on to the peripheral vision part – that’s the real kicker – you’re going to want to make sure you break the habit of rereading the words on the page.',
          img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesktime.com%2Fblog%2Fcan-reading-make-you-more-productive%2F&psig=AOvVaw2AX6bULC9WBRoyPGrp85no&ust=1634070297934000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiG3bCYw_MCFQAAAAAdAAAAABAO',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tips', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
