const { BusinessActivities } = require('../classes/businessActivityClass')
const { test, expect } = require('@jest/globals');

test('add business activity', () => {
    const businessActivity = new BusinessActivities();
    businessActivity.add('trader', 'buying and selling');
    expect(businessActivity.businessActivity).toEqual(['buying and selling']);
    expect(businessActivity.businessActivitiesByType['trader']).toEqual(['buying and selling']);
});

test('add business activity with invalid type', () => {
    const businessActivity = new BusinessActivities();
    expect(() => businessActivity.add('invalid', 'buying and selling')).toThrow('Type not valid');
});

test('business activities and type equal same count', () => {
    const businessActivity = new BusinessActivities();
    businessActivity.add('trader', 'buying and selling');
    businessActivity.add('artisan', 'craftsman');
    businessActivity.add('services', 'cleaning');
    businessActivity.add('services', 'car wash');
    expect(businessActivity.businessActivity.length).toEqual(4);
    expect(businessActivity.businessActivitiesByType['trader'].length).toEqual(1);
    expect(businessActivity.businessActivitiesByType['artisan'].length).toEqual(1);
    expect(businessActivity.businessActivitiesByType['services'].length).toEqual(2);
});

test('get business activities', () => {
    const businessActivity = new BusinessActivities();
    businessActivity.add('trader', 'buying and selling');
    businessActivity.add('artisan', 'craftsman');
    businessActivity.add('services', 'cleaning');
    businessActivity.add('services', 'car wash');
    expect(businessActivity.getBusinessActivities()).toEqual(['buying and selling', 'craftsman', 'cleaning', 'car wash']);
});