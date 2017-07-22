const models = require('../models');

module.exports = {

  getAllUserMoments(userID) {
    return new models.Moment().where('user_id', userID)
    .fetchAll();
  },

  getMoment(momentID) {
    return new models.Moment().query({ where: { id: momentID } }).fetch();
  },

  saveMoment(momentObject) {
    const cred = momentObject.media.text.s3Cred ||
      momentObject.media.audio.s3Cred ||
      momentObject.media.photo.s3Cred ||
      momentObject.media.text.s3Head.params['x-amz-credential'];
    const params = {
      display_type: momentObject.displayType,
      avg_sentiment: momentObject.sentiment,
      highlight: momentObject.highlight,
      audio_uri: momentObject.media.audio.uri || null,
      text_uri: momentObject.media.text.uri || null,
      photo_uri: momentObject.media.photo.uri || null,
      user_id: momentObject.userId,
      cred
    };
    return models.Moment.forge(params).save();
  },

  updateSentiment(momentObject) {
    return models.Moment.where('id', momentObject.id)
    .fetch()
    .then(moment => moment.save({ avg_sentiment: momentObject.sentiment }));
  },

  updateMoment(momentObject) {
    return models.Moment.where({
      id: momentObject.id
    }).fetch()
      .then((uniqueMoment) => {
        uniqueMoment.save({
          display_type: momentObject.displayType,
          avg_sentiment: momentObject.sentiment,
          highlight: momentObject.highlight,
          audio_uri: momentObject.media.audio.uri,
          text_uri: momentObject.media.text.uri,
          photo_uri: momentObject.media.photo.uri,
          user_id: momentObject.userId
        }, { method: 'update' });
      });
  }
};
