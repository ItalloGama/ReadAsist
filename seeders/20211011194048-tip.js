'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tips',
      [
        {
          tipName: 'Stop the Inner Monologue',
          tip: 'One’s inner monologue, also known as subvocalization, is an extremely common trait among readers. It is the process of speaking the words in your head as you read, and it is the biggest obstacle that gets in the way of you being able to increase your reading speed.',
          img: 'https://images.unsplash.com/photo-1569537001294-a2f2e3a978d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Word–Chunking.',
          tip: 'Word-chunking closely parallels with the idea of eliminating the inner monologue. This is the act of reading multiple words at once, and is the key to reading faster. All of these reading tips tie together, yet word-chunking is probably the most active tool to use when you work to increase your reading speed.',
          img: 'https://images.unsplash.com/photo-1569537001294-a2f2e3a978d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Do Not Reread the Words on the Page.',
          tip: 'Before we move on to the peripheral vision part – that’s the real kicker – you’re going to want to make sure you break the habit of rereading the words on the page.',
          img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Use Peripheral Vision.',
          tip: 'Use the techniques from everything above to view and comprehend several words at one time. Instead of chunking in smaller groups of words, try reading one line at a time. This involves looking at the center of the line, and using your peripheral vision to read the rest of it. Scan the page in this manner and, when you reach the bottom, you will find that you still understood what you read.',
          img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Use a Timer.',
          tip: 'Speaking of ‘record time’, now is your chance to test yourself and work on how to increase your reading speed each time you read. Set a timer for one minute, reading normally as the time dwindles down. When the timer goes off, note how many pages you have read.',
          img: 'https://images.unsplash.com/photo-1585158531004-3224babed121?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Read MORE!',
          tip: 'The old adage, “Practice makes perfect,” is actually pretty darn accurate. Any professional, artist, musician, etc. practices their work regularly.',
          img: 'https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Set a Goal.',
          tip: 'Holding yourself accountable will better ensure you stick with your reading and your timer tests. Give yourself a goal of a certain number of pages to read each day/week/etc., and stick to it. When you reach it, treat yourself. Incentive never hurt anyone!',
          img: 'https://images.unsplash.com/photo-1497169132349-e201761db064?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Use a Marker',
          tip: 'Do you find your vision slipping and sliding through the page as you read? Not a problem. Simply place an index card below each line, and slip it down as you read. This will ensure you stay at reading one line at a time, rather than flitting your eyes about and taking nothing in.',
          img: 'https://images.unsplash.com/photo-1573946117500-8e03742a2fff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=857&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Work on Improving Your Vocabulary',
          tip: 'Think about it: You’re reading along, and then you run into a word you don’t know. Do you skip it? Do you try to figure it out by context? Do you stop to look it up? Whichever course of action you take, you are slowing your time significantly, if not stopping it all together to go and look up the retarding word.',
          img: 'https://images.unsplash.com/photo-1626428702485-397c8a479e36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          tipName: 'Skim the Main Points FIRST',
          tip: 'Finally, when you’re in a real time-crunch and need to get something read by yesterday, take a deep breath and calm down. Open the book, and take some time reading over all the main points. Read the table of contents. Read the subtitles. Read the captions under the diagrams. Get an overall feel for the chapter/section/etc.',
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
