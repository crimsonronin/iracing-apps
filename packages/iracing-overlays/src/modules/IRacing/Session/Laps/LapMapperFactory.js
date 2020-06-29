// @flow
import LapMapper from './../IRacing/Session/Laps/LapMapper';
import {timeFormatter} from './../IRacing/Timing/TimeFormatterFactory';

/**
 * @type {LapMapper} lapMapper
 */
const lapMapper = new LapMapper(timeFormatter);

export {lapMapper};
