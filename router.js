const router = require('express').Router();

// Controllers
const DateOptionsController = require('./inceptionController');

const dateOptionsController = new DateOptionsController()

generalRoutes = {
    1 : {
        path: '/',
        method: 'GET',
        purpose: 'List all routes within this router',
        authentication: false,
    },
}

router.get('/', (req, res) => {
    res.send('General API Index');
});

router.get('/inception', (req, res) => {
    const inceptionDateOptions = dateOptionsController.getInceptionDateOptions();
    const cellNumber = req.query['cell_number'] || "";
    if (cellNumber.length > 0) {
      console.log(`Cell Number: ${cellNumber}`)
    } else {
      console.log(`No cell number provided`);
    }
    console.log(`Cell Number: ${JSON.stringify(cellNumber)}`);
    console.log(`Inception Date Options: ${JSON.stringify(inceptionDateOptions)}`);
      res.render(
        'inceptionForm', 
        {
          ...inceptionDateOptions, 
          cellNumber,
          businessActivity: ['Advertising Agency','Airtime Sales','Audio Visual Production','Bakery','Barber','Beauty Spa','Bed and Breakfast','Butchery','Car Wash','Carpentry','Catering Services','Cell Phone Shop','Cleaning Service','Clothing Shop','Coffee Shop','Delivery','Design and Print','DJ','Dry Cleaner','Events Coordinator','Fast Food Delivery','Fast Food Outlet','Fencing','Fresh Produce Store','Furniture Mover','Furniture Shop','Garden Services','General Maintenance','General Movers','Glass Fitment','Graphic Designer','Hair Extensions Sales','Hair Salon','Handyman','Hardware Store','High-Pressure Cleaning','Hiring Business - Wedding Attire','Internet Cafe','Liquor Store','Mobile Car Wash','Mobile Kitchen','Motor Mechanic','Musician','Paint Contractor','Part and Spares Shop','Pest Control','Photographer','Plumber','Pool Maintenance','Printing and Copying Services','Sales - Cosmetics','Second-hand Shop','Sound and AV Fitment','Sound Technician','Spaza Shop','Tailor','Tavern','Upholsterer', 'Waste Pickers']
        }
      );
});

module.exports = router;