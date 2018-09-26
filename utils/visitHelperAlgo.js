const config = require('./visitConfig');
const fs = require('fs')
module.exports = new class {
    constructor () {
        this.config = config;
    }
    getAllRoutes () {
        let { currentLocation, currentDay, requiredVisitWithDays } = this.config;
        let allRoutes = this.getPairs(requiredVisitWithDays)
        // .map(locations => {
        //     return locations.map((location, index) => {
        //         if (index > 0) {
        //             currentDay += locations[index - 1].days
        //         }
        //         // currentDay += location.days
        //         return this.getAvailRouteForCity(location.cityCode, currentDay % 7) 
        //     })
        // })
        // .map(item => {
        //     let obj = {};
        //     requiredVisitWithDays.map((it, ind) => {
        //         obj[it.cityCode] = item[ind]
        //     })
        //     return obj
        // })
        allRoutes = allRoutes.map((route, index) => {
            let routeSorted = [];
            // let locations = Object.keys(route).map(city => {
            //     let flights = route[city];
            //     return {city, flights}
            // })
            let currentLocationLocal = currentLocation;
            let currentDayLocal = currentDay;
            route.map(() => {
                let ele = this.getAvailRouteForCity(currentLocationLocal, currentDayLocal).sort((a, b) => b.score - a.score)[0]
                console.log(ele)
                // let ele = route.find(loc => loc.city === currentLocationLocal)[0];
                currentDayLocal += route.find(item => item.cityCode == currentLocationLocal).days
                currentLocationLocal = ele.cities
                routeSorted.push(ele)
            })
            return routeSorted.find(loc => loc.cityCode === currentLocationLocal)
        })
        // console.log(this.getAvailRouteForCity(currentLocation, currentDay));
        fs.writeFileSync('./json.json', JSON.stringify(allRoutes[0], null, 4), 'utf8')
    }
    getAvailRouteForCity (city, dayIndex) {
        const { flights } = this.config
        let flightAvail = flights.filter(flight => flight.cities.indexOf(city) !== -1 && flight.daysAvail[dayIndex])
        let sortedPrice = flightAvail.map((a) => a.price).sort((a, b) => a - b);
        let minimumPrice = sortedPrice[0];
        let maximumPrice = sortedPrice.reverse()[0];
        console.log({ maximumPrice, minimumPrice })
        return flightAvail.map(item => {
            return {
                ...item,
                score: (item.moring ? 1 : 0) + ((1 - ((item.price - minimumPrice) / (maximumPrice - minimumPrice))) + 5)
            }
        })
    }
    getPairs (array) {
        let items = [];
        return (function follows(a, ind = 0){
            items.push(JSON.parse(JSON.stringify(a))) // breack the ref
            if (a.length < ind + 1) return items;
            return follows(a.map((item1, index) => a[(index + 1 + ind) % a.length]), ind+1);
        })(array);
    }    
}
module.exports.getAllRoutes()

