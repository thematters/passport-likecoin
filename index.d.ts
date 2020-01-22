import {
    Strategy,
    StrategyOptionsWithRequest,
    VerifyFunctionWithRequest
  } from 'passport-oauth2'
  
  export default class LikeCoinStrategy extends Strategy {
    constructor(
      options: StrategyOptionsWithRequest,
      verify: VerifyFunctionWithRequest
    )
  
    name: string
  }
  