const router = require('express').Router();

// class import
const { constructBusActObj } = require('./classes/businessActivityClass');

const { bisAct, coverOptions } = constructBusActObj();

const allActivities = bisAct.getBusinessActivities();
const bisActByType = bisAct.getBusinessActivitiesByType();

// Controllers
const DateOptionsController = require('./inceptionController');

const dateOptionsController = new DateOptionsController();

generalRoutes = {
  1: {
    path: '/',
    method: 'GET',
    purpose: 'List all routes within this router',
    authentication: false,
  },
};

router.get('/', (req, res) => {
  res.send('General API Index');
});

router.get('/inception', (req, res) => {
  const inceptionDateOptions = dateOptionsController.getInceptionDateOptions();
  const cellNumber = req.query['cell_number'] || "";
  if (cellNumber.length > 0) {
    console.log(`Cell Number: ${cellNumber}`);
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
      allActivities,
    }
  );
});

router.get('/businessActivity', (req, res) => {
  res.render(
    'businessActivity',
    {
      businessActivity: allActivities,
    }
  );
});

router.get('/inceptionOptions', (req, res) => {
  const bisActivityParam = req.query['business_activity'] || "";
  let bisTypeSelected = ''
  for (const [key, value] of Object.entries(bisActByType)) {
    if (value.includes(bisActivityParam)) {
      bisTypeSelected = key;
    } else {
      console.log(`No match`);
    }
  }
  const coverOptionsOnSelection = coverOptions[bisTypeSelected];
  res.render(
    'inceptionOptions',
    {
      coverOptionsOnSelection,
    }
  );
});

module.exports = router;