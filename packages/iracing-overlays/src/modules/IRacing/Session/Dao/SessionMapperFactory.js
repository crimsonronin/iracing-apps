// @flow
import SessionMapper from './../IRacing/Session/Dao/SessionMapper';
import {lapMapper} from './../IRacing/Session/Laps/LapMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(lapMapper);

export {sessionMapper};
