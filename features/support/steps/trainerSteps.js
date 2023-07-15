const PageTrainers = require("../page/trainersPage.js");
const textUtility = require("../utils/textUtility.js");
const { expect } = require('chai');
const hash = {
    paisResidencia: 'País de residencia',
    zonaHoraria: 'Zona horaria',
    paisProcedencia: 'País de procedencia',
    teamLeader: 'Team leader',
    lenguajes: 'Idiomas',
    trainerRoutes: 'Rutas del trainer',
};

module.exports = class StepsTrainers {

    constructor(driver) {
        this.pageTrainers = new PageTrainers(driver);
        this.textUtility = new textUtility(driver);

    }


    async create(name, lastName, email) {

        await this.pageTrainers.validateTextListOfTrainer();
       await this.pageTrainers.clickAddTrainer();
        await this.pageTrainers.typeNameTrainer(name);
        await this.pageTrainers.typeLastNameTrainer(lastName);
        await this.pageTrainers.typeEmailTrainer(email);
        await this.pageTrainers.selecteOptionRandom(hash.paisResidencia);
        await this.pageTrainers.selecteOptionRandom(hash.zonaHoraria);
        await this.pageTrainers.typeWorkHours();
        await this.pageTrainers.selecteOptionRandom(hash.paisProcedencia);
        await this.pageTrainers.selecteOptionRandom(hash.teamLeader);
        await this.pageTrainers.selecteOptionRandom(hash.lenguajes);
        await this.pageTrainers.selecteOptionRandom(hash.trainerRoutes);
        await this.pageTrainers.clickCreateTrainer();
    }



    async validateTrainer(name, lastName, email) {
        await this.pageTrainers.searchEmailTrainer(email);
        expect( await this.pageTrainers.getNameTrainers(), 'Customer data does not match Nombre y Apellido').to.equal(name+" "+lastName);
        expect( await this.pageTrainers.getEmailTrainers(), 'Customer data does not match Email').to.equal(email);
        expect( await this.pageTrainers.getDateTrainers(), 'Customer data does not match Fecha de creacion').to.equal(await this.textUtility.getDateCurrent());
    }




}