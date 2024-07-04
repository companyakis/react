class City {
    constructor(cityName) {
        this.cityName = cityName
    }

    cityInfo() {
        return `${this.cityName} is a beautiful city in Turkiye.`
    }
}

class University extends City {
    constructor(cityName, universityName) {
        super(cityName)
        this.universityName = universityName
    }

    universityInfo() {
        return `${this.universityName} is a well-known university in ${this.cityName}.`
    } 
}

const cityIzmir = new City("İzmir")

console.log(cityIzmir.cityInfo()) // İzmir is a beautiful city in Turkiye.

const universityDokuzEylul = new University(cityIzmir.cityName, "Dokuz Eylul University")

console.log(universityDokuzEylul.universityInfo()) // Dokuz Eylul University is a well-known university in İzmir.
