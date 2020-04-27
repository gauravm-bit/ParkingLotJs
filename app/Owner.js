const parkingLot = require('../app/ParkingLot.js')
class Ownerclass {

    OwnerCheckIfFull = () => parkingLot.checkStatusIfFull();
}
module.exports = new Ownerclass