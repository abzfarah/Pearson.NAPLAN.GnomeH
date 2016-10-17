var Joi = require('joi'),
    Boom = require('boom'),
    School = require('../models/School').SchoolModel;

exports.getAll = {
    handler: function(request, reply) {
        School.find({}, function(err, school) {
            if (!err) {
                reply(school);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getOne = {
    handler: function(request, reply) {
        School.findOne({
            'schoolId': request.params.schoolId
        }, function(err, school) {
            if (!err) {
                reply(school);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};
