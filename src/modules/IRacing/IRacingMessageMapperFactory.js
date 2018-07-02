// @flow
import {iRacingDriverMapper} from 'src/modules/IRacing/Drivers/IRacingDriverMapperFactory';
import IRacingMessageMapper from 'src/modules/IRacing/IRacingMessageMapper';

/**
 * @type {IRacingMessageMapper} iRacingMessageMapper
 */
const iRacingMessageMapper = new IRacingMessageMapper(iRacingDriverMapper);

export {iRacingMessageMapper};
