const assert = require('chai').assert
const parkingLot = require('../app/ParkingLot.js')
const owner = require('../app/Owner.js')
const security = require('../app/AirportPersonel.js')

let car = { type : 'car'}
let car1,car2,car3,car4,car5 = { type : 'car'}
describe(`Testing for Parking Lot service`, () => {

//TC 1.1 let the driver park so that he can board his flight
it(`allow parking so the driver can board flight`, () => {
    let result = parkingLot.doParking(car)
    assert.isTrue(result)
})

//TC 1.2 if the car is already parked, system should not allow  to park again
it(`dont allow parking if already parked`, () =>{
    let result = parkingLot.doParking(car)
    assert.isFalse(result)
 })

 //TC 2.1 let the driver unpark so he can go home
it(`allow unparking so the driver can home`, () => {
    let result = parkingLot.doUnpark(car)
    assert.isTrue(result)
})

//TC 2.2 if the car is already unparked system should not allow to unpark again
it(`dont allow unparking if already unparked`, () => {
    let result = parkingLot.doUnpark(car)
    assert.isFalse(result)
})

//TC 3.1 if the lot is full allow put sign board
it(`dont allow parking if the lot is full and put the sign board`, () => {
    try{
        parkingLot.doParking(car1)
        parkingLot.doParking(car2)
        parkingLot.doParking(car3)
        parkingLot.doParking(car4)
        parkingLot.doParking(car5)
        
        let result = owner.OwnerCheckIfFull() 
        assert.notEqual(parkingLot.doParking(car),result)
   }
   catch(e)
   {
     return e;
   }
})

//TC 4.1 if the lot is full redirect security staff
it(`if lot is full redirect security staff`, () => {
  try{
            parkingLot.doParking(car1)
            parkingLot.doParking(car2)
            parkingLot.doParking(car3)
            parkingLot.doParking(car4)
            parkingLot.doParking(car5)
                
            let result = security.SecurityCheckIfFull() 
            assert.notEqual(parkingLot.doParking(car),result)
   }
   catch(e)
   {
     return e;
   }
})

//TC 5.1 if the lot is not full owner takes in the sign again
it(`if the lot is not full the owner takes in signboard again`, () => {
    let result = owner.OwnerCheckIfFull()
    assert.isFalse(result) 
})

})