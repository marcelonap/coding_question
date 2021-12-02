import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {ElectricityConsumption} from '../models';
import csv = require("csvtojson");
var applyFilter = require('loopback-filters');

@injectable({scope: BindingScope.TRANSIENT})
export class ElectricityBillDataService {
  constructor(/* Add @inject to inject parameters */) { }

  async getAll(
    filter?: Filter<ElectricityConsumption>,
  ): Promise<Array<ElectricityConsumption>> {
    var gasFiles = await csv().fromFile('data/electricity_bill_data.csv');




    var filtered = applyFilter(gasFiles, filter);


    return filtered;
  }
}
