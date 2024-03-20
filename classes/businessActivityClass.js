class BusinessActivities{
    constructor(){
        this.businessActivity = [];
        this.typeOptions = ['trader', 'artisan', 'services'];
        this.businessActivitiesByType = {};
        for (let type of this.typeOptions) {
            this.businessActivitiesByType[type] = [];
        }
    }

    // JSDOC
    /*
    * @param {string} type - type of business activity (trader, artisan, services)
    * @param {string} businessActivities - business activities
    */
    add(type, businessActivities){
        if (this.typeOptions.indexOf(type) === -1) {
            throw new Error('Type not valid');
        }   
        this.businessActivitiesByType[type].push(businessActivities);
        this.businessActivity.push(businessActivities);
    }

    getBusinessActivities(){
        return this.businessActivity;
    }

    getBusinessActivitiesByType(){
        return this.businessActivitiesByType;
    }
}

function constructBusActObj() {
    const businessActivitiesPresetObjs = {
      trader: [
        "Airtime Sales",
        "Bakery",
        "Butchery",
        "Cell Phone Shop",
        "Clothing Shop",
        "Coffee Shop",
        "Coffin Supplier",
        "Fast Food Outlet",
        "Florist",
        "Fresh Produce Store",
        "Furniture Shop",
        "General Dealer",
        "Hardware Store",
        "Liquor Store",
        "Livestock Retailer",
        "Part and Spares Shop",
        "Restaurant",
        "Cosmetic Sales",
        "School Tuck Shop",
        "Second-hand Shop",
        "Spaza Shop",
        "Tavern"
      ],
      artisan: [
        "Aircon Services",
        "Auto Electrician",
        "Auto Refurbisher",
        "Building Contractor",
        "Carpentry",
        "Electrician",
        "Engineer",
        "Fencing",
        "Flooring Installation",
        "Garden Services",
        "Gas Installation",
        "General Maintenance",
        "Glass Fitment and Repair",
        "Handyman",
        "High-Pressure Cleaning",
        "Landscaper",
        "Locksmith",
        "Motor Mechanic",
        "Painting Contractor",
        "Panel Beater",
        "Paving",
        "Plumbing",
        "Pool Services",
        "Refrigeration",
        "Sound and AV Fitment",
        "Sound Technician",
        "Towing Service",
        "Tyre Fitment Centre",
        "Upholsterer",
        "Waterproofing",
        "Welder and Fabricator",
        "Windscreen Fitment",
      ],
      services: [
        "Admin Services",
        "Advertising Services",
        "Audio Visual Production",
        "Beauty Spa",
        "Bed and Breakfast",
        "Business Consultant",
        "Car Wash",
        "Catering Services",
        "Cleaning Service",
        "Couriers",
        "Delivery",
        "Design and Print",
        "DJ",
        "Driving School",
        "Dry Cleaner",
        "Education",
        "Estate Agent",
        "Events Coordinator",
        "Fast Food Delivery",
        "Feeding Scheme",
        "Funeral Parlour",
        "Furniture Mover",
        "Graphic Designer",
        "Guest Lodge",
        "Gymnasium",
        "Hair Extensions Sales",
        "Hair Salon",
        "Hiring Business",
        "Insurance Broker",
        "Internet Cafe",
        "IT Services",
        "Laundromat",
        "Legal Services",
        "Microlender",
        "Mobile Car Wash",
        "Mobile Kitchen",
        "Musician",
        "NGO",
        "Pest Control",
        "Photographer",
        "Printing and Copying Services",
        "Project Management",
        "Publishing",
        "Recruitment Agency",
        "Removals",
        "Rubble Removal",
        "Tailor",
        "Tour Operator",
        "Waste Pickers",
        "Waste Removal",
      ]
    };
    const bisAct = new BusinessActivities();
    for (let type in businessActivitiesPresetObjs) {
      for (let businessActivity of businessActivitiesPresetObjs[type]) {
        bisAct.add(type, businessActivity);
      }
    }
    const coverOptions = {
      trader:
      {
        bronze: {
          name: 'Trader Bronze',
          totalPremium: 70,
          stockAndContentLmt: 40000,
          barLmt: 0,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: '',
        },
        silver: {
          name: 'Trader Silver',
          totalPremium: 100,
          stockAndContentLmt: 40000,
          barLmt: 2500,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        gold: {
          name: 'Trader Gold',
          totalPremium: 150,
          stockAndContentLmt: 75000,
          barLmt: 5000,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        platinum: {
          name: 'Trader Platinum',
          totalPremium: 220,
          stockAndContentLmt: 100000,
          barLmt: 5000,
          paLmt: 50000,
          pl: 250000,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        diamond: {
          name: 'Trader Diamond',
          totalPremium: 300,
          stockAndContentLmt: 150000,
          barLmt: 5000,
          paLmt: 50000,
          plLmt: 500000,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
      },
      atrisan: {
        bronze: {
          name: 'Artisan Bronze',
          totalPremium: 70,
          stockAndContentLmt: 10000,
          barLmt: 3000,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        silver: {
          name: 'Artisan Silver',
          totalPremium: 100,
          stockAndContentLmt: 20000,
          barLmt: 5000,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        gold: {
          name: 'Artisan Gold',
          totalPremium: 150,
          stockAndContentLmt: 20000,
          barLmt: 5000,
          paLmt: 25000,
          plLmt: 250000,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        platinum: {
          name: 'Artisan Platinum',
          totalPremium: 220,
          stockAndContentLmt: 30000,
          barLmt: 10000,
          paLmt: 50000,
          pl: 250000,
          sasriaLmt: 500000,
          coverNote: 'BAR - Two specified items at R5k each, with an option being General All Risks at R5k',
        },
        diamond: {
          name: 'Artisan Diamond',
          totalPremium: 300,
          stockAndContentLmt: 40000,
          barLmt: 15000,
          paLmt: 50000,
          plLmt: 500000,
          sasriaLmt: 500000,
          coverNote: 'BAR - Three specified items at R5k each, or with options also being General All Risks at R5k or R10k',
        },
      },
      services: {
        bronze: {
          name: 'Services Bronze',
          totalPremium: 70,
          stockAndContentLmt: 10000,
          barLmt: 3000,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        silver: {
          name: 'Services Silver',
          totalPremium: 100,
          stockAndContentLmt: 20000,
          barLmt: 5000,
          paLmt: 25000,
          plLmt: 0,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        gold: {
          name: 'Services Gold',
          totalPremium: 150,
          stockAndContentLmt: 20000,
          barLmt: 5000,
          paLmt: 25000,
          plLmt: 250000,
          sasriaLmt: 500000,
          coverNote: 'BAR - One specified item',
        },
        platinum: {
          name: 'Services Platinum',
          totalPremium: 220,
          stockAndContentLmt: 30000,
          barLmt: 10000,
          paLmt: 50000,
          pl: 250000,
          sasriaLmt: 500000,
          coverNote: 'BAR - Two specified items at R5k each, with an option being General All Risks at R5k',
        },
        diamond: {
          name: 'Services Diamond',
          totalPremium: 300,
          stockAndContentLmt: 40000,
          barLmt: 15000,
          paLmt: 50000,
          plLmt: 500000,
          sasriaLmt: 500000,
          coverNote: 'BAR - Three specified items at R5k each, or with options also being General All Risks at R5k or R10k',
        },
      }
    };
    return {bisAct: bisAct, coverOptions: coverOptions};;
}

module.exports = {
    BusinessActivities, 
    constructBusActObj
};