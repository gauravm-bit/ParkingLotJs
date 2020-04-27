const parkingLot = require('../app/ParkingLot.js')

class Owner {

    OwnerCheckIfFull = () => parkingLot.checkStatusIfFull();
}
module.exports = new Owner