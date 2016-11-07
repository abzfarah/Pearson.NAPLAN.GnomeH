import _ from 'lodash';

module.exports = {

  hasClaim: function (claims, claim) {
    return _.includes(claims, claim);
  }
}
