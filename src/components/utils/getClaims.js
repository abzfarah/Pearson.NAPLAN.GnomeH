const available_claims =
    [ 'centreSearch',
      'centre',
      'authorizedStaff',
      'userService',
      'socService',
      'alternativeTestFormatOrder',
      'studentRegistrationData'
    ]

export function getClaims(claims)
{
  let user_claims = _.pick(claims, available_claims);
      user_claims = _.mapValues(user_claims, function(value) {
        if (value == "true" || "True" || "R" || "RU") return true
        else return false
      })
  return user_claims
}
