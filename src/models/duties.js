const mongoose = require('mongoose')
const validator = require('validator')

const dutiesSchema = new mongoose.Schema({
    monday: {
        first: {

        },
        second: {
            
        },
        third: {
            
        },
        fourth: {

        },
        fifth: {
            
        },
        sixth: {
            
        },
        seventh: {

        },
        eigth: {
            
        },
        ninth: {
            
        },
        tenth: {

        }
    },

    tuesday: {
        first: {

        },
        second: {
            
        },
        third: {
            
        },
        fourth: {

        },
        fifth: {
            
        },
        sixth: {
            
        },
        seventh: {

        },
        eigth: {
            
        },
        ninth: {
            
        },
        tenth: {

        }
    },

    wednesday: {
        first: {

        },
        second: {
            
        },
        third: {
            
        },
        fourth: {

        },
        fifth: {
            
        },
        sixth: {
            
        },
        seventh: {

        },
        eigth: {
            
        },
        ninth: {
            
        },
        tenth: {

        }
    },


    thursday: {
        first: {

        },
        second: {
            
        },
        third: {
            
        },
        fourth: {

        },
        fifth: {
            
        },
        sixth: {
            
        },
        seventh: {

        },
        eigth: {
            
        },
        ninth: {
            
        },
        tenth: {

        }
    },


    friday: {
        first: {

        },
        second: {
            
        },
        third: {
            
        },
        fourth: {

        },
        fifth: {
            
        },
        sixth: {
            
        },
        seventh: {

        },
        eigth: {
            
        },
        ninth: {
            
        },
        tenth: {

        }
    },

})

const Duties = mongoose.model('Duties',dutiesSchema)

module.exports = Duties