const sequelize = require('../config/connection')
const { User, Autocorrect, Total } = require('../models')

const userData = require('./userData.json')
const autocorrectData = require('./autocorrectData.json')
const totalData = require('./totalData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true,
    });

    for (const autocorrect of autocorrectData) {
        await Autocorrect.create({
            ...autocorrect,
            user_id: users[Math.floor(Math.random() * users.length)].id
        });
    }

    for (const total of totalData) {
        await Total.create({
            ...total,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })
    }
    process.exit(0)
}

seedDatabase()