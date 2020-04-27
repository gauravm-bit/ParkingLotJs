 class parkingLot{
    constructor(){
        this.Lot = [];
        this.parkingCapacity = 5;
    }

    doParking = (car) => {
        if(this.checkStatusIfFull())
        {
            throw "Parking Lot is Full"
        }
        else
        {
            if(this.Lot.includes(car))
            {
                return false;
            }
            else
            {
            this.Lot.push(car)
            return true;
            }
     }   
    }

    doUnpark = (car) => {
        if(this.Lot.includes(car)){
            this.Lot.pop(car)
            return true;
        }
        return false;
    }

    checkStatusIfFull = () => {
        if(this.Lot.length >= this.parkingCapacity)
        {
            return true;
        }
        return false;
    }
      
}
module.exports = new parkingLot