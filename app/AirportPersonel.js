const parkingLot = require('../app/ParkingLot.js')
class AirportSecurity{

    SecurityCheckIfFull = () => parkingLot.checkStatusIfFull();
}
module.exports = new AirportSecurity