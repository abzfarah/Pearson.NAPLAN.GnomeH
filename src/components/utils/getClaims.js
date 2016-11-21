const available_claims =
    [ 'centreSearch',
      'centre',
      'soc',
      'authorizedStaff',
      'userService',
      'socService',
      'alternativeTestFormatOrder',
      'studentRegistrationData'
    ]

export function getClaims(claims) {
  
  let school_code = parseInt(claims["schoolCode"])
  let filter_claims = _.pick(claims, available_claims);
  user_claims = _.pickBy(filter_claims, _.isString);

  user_claims = _.mapValues(user_claims, function(value) {
          value = _.toLower(value)
          if (value == "false") return false
              else return true
        }
      )

user_claims["schoolCode"] = school_code
      return user_claims
    }
