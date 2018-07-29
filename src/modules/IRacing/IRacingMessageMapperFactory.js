// @flow
import {diverMapper} from 'src/modules/IRacing/Drivers/DiverMapperFactory';
import IRacingMessageMapper from 'src/modules/IRacing/IRacingMessageMapper';

/**
 * @type {IRacingMessageMapper} iRacingMessageMapper
 */
const iRacingMessageMapper = new IRacingMessageMapper(diverMapper);

export {iRacingMessageMapper};
