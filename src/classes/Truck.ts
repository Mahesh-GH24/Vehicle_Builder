// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface

// Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number),
  // topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  //Truck class properties
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

    // Constructor for the Truck class
    constructor(
      // Vehicle class properties
      //started: boolean,
      //currentSpeed: number,

      //Truck class properties
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
    ) {
      // Call the constructor of Vehicle class
      super();

      //initialize the properties of the Motorbike class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      
      //check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
      if (wheels.length !==4) {
        this.wheels = [new Wheel(),new Wheel(),new Wheel(),new Wheel()];
      }
      else {
      this.wheels = wheels;
      }
      this.towingCapacity = towingCapacity;
     }


  // TODO: Implement the tow method from the AbleToTow interface

  //Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {

    // TODO: Get the make an model of the vehicle if it exists
    let make ='';
    if (vehicle.make){
      make = vehicle.make;
    }
    
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.weight <= this.towingCapacity){
      if (make!='')
      {
        console.log(`Vehicle: ${vehicle.make} is being towed`);
      }
      else {
        console.log(`Vehicle is being towed`);
      }
    }
    else{
      if (make!='')
        {
          console.log(`Vehicle: ${vehicle.make} is too heavy to be towed`);
        }
        else {
          console.log(`Vehicle is too heavy to be towed`);
        }
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels

    // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Truck class
    console.log('Truck details');
    console.log(`Truck VIN: ${this.vin}`);
    console.log(`Truck Make: ${this.make}`);
    console.log(`Truck Model: ${this.model}`);
    console.log(`Truck Year: ${this.year}`);
    console.log(`Truck Weight: ${this.weight} lbs`);
    console.log(`Truck Top Speed: ${this.topSpeed} mph`);
    console.log(`Truck Color: ${this.color}`);
    console.log(`Truck Towing Capacity: ${this.towingCapacity}`);
    
    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }

}

// Export the Truck class as the default export
export default Truck;
