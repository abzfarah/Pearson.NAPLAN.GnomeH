const available_claims =
    [ 'centreSearch',
      'centre',
      'authorizedStaff',
      'userService',
      'socService',
      'alternativeTestFormatOrder',
      'studentRegistrationData'
    ]

export function getClaims(claims) {

  let user_claims = _.pick(claims, available_claims);
debugger
  user_claims = _.mapValues(user_claims, function(value) {


        if( _.isString(value) ) {
            if (value == "false") return false
              else return true
          }
        }
      )
      return user_claims
    }
