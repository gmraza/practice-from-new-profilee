module.exports = {
    currentLocation: 'khi',
    currentDay: 0,
    startTime: 'morning',
    requiredVisitWithDays: [
        {cityName: 'Karachi', cityCode: 'khi', days: 4},
        {cityName: 'Lahore', cityCode: 'lhr', days: 3},
        {cityName: 'Islamabad', cityCode: 'isb', days: 3},
        {cityName: 'Quetta', cityCode: 'qta', days: 2},
        {cityName: 'Peshawar', cityCode: 'psh', days: 5},
    ],
    hotelRatesPerDay: {
        khi: 10000,
        lhr: 9000,
        isb: 15000,
        qta: 7000,
        psh: 8000
    },
    daysIndex: [
        'mon',
        'tue',
        'wed',
        'thu',
        'fri',
        'sat',
        'sun'
    ],
    flights: [
        {
            cities: ['khi', 'isl'],
            moring: true,
            evening: true,
            daysAvail: [
                true,
                true,
                true,
                true,
                true,
                true,
                true
            ],
            price: 18000
        },
        {
            cities: ['khi', 'lhr'],
            moring: true,
            evening: true,
            daysAvail: [
                true,
                true,
                true,
                true,
                true,
                false,
                false
            ],
            price: 14000
        },
        {
            cities: ['psr', 'lhr'],
            moring: true,
            evening: true,
            daysAvail: [
                false,
                true,
                false,
                true,
                false,
                false,
                false
            ],
            price: 12000
        },
        {
            cities: ['isb', 'qta'],
            moring: true,
            evening: false,
            daysAvail: [
                true,
                true,
                true,
                true,
                true,
                false,
                false
            ],
            price: 10000
        },
        {
            cities: ['khi', 'qta'],
            moring: false,
            evening: true,
            daysAvail: [
                false,
                true,
                true,
                false,
                false,
                false,
                false
            ],
            price: 11000
        },

    ]
}