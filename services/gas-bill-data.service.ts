import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Filter} from '@loopback/repository';
import {GasConsumption} from '../models';
import csv = require("csvtojson");
var applyFilter = require('loopback-filters');

@injectable({scope: BindingScope.TRANSIENT})
export class GasBillDataService {
  constructor(/* Add @inject to inject parameters */) { }

  async getAll(
    filter?: Filter<GasConsumption>,
  ): Promise<Array<GasConsumption>> {

    var gasFiles = await csv().fromFile('data/gas_bill_data.csv');




    var filtered = applyFilter(gasFiles, filter);


    return filtered;

  }
}
