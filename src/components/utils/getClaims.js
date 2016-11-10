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
  
  let school_code = parseInt(claims["schoolCode"])
  let user_claims = _.pick(claims, available_claims);
  user_claims = _.pickBy(claims, _.isString);


  user_claims = _.mapValues(user_claims, function(value) {
          value = _.toLower(value)

          if (value == "false") return false
              else return true
        }
      )

user_claims["schoolCode"] = school_code
      return user_claims
    }
