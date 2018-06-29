// @flow
import { iRacingDriverMapper } from './IRacingDriverMapperFactory';
import IRacingMessageMapper from './IRacingMessageMapper';

/**
 * @type {IRacingMessageMapper} iRacingMessageMapper
 */
const iRacingMessageMapper = new IRacingMessageMapper(iRacingDriverMapper);

export { iRacingMessageMapper };
