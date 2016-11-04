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
  user_claims = _.pickBy(claims, _.isString);

debugger
  user_claims = _.mapValues(user_claims, function(value) {
          value = _.toLower(value)

          if (value == "false") return false
              else return true

        }
      )
      return user_claims
    }
