// ==UserScript==
// @name        QuizWiz : All or Nothing
// @namespace   https://github.com/jamesjonesmath/canvancement
// @description Regrading and speed enhancements for Canvas quizzes
// @include     https://*.instructure.com/courses/*/gradebook/speed_grader?*
// @include     https://*.instructure.com/courses/*/quizzes/*/history?*
// @noframes
// @version     4
// @grant       none
// ==/UserScript==
(function() {
  'use strict';

  var config = {
    // Regrading methods may be 'disabled', 'enabled', or 'autorun'
    'methods' : {
      'unanswered' : 'enabled',
      'full_points' : 'disabled',
      'ma_allnone' : 'enabled',
      'ma_correct' : 'disabled',
      'ma_difference' : 'disabled',
      'fill_in_blanks' : 'enabled',
      'dropdowns' : 'enabled'
    },
    // Speed enhancements may be true or false
    'autoExpandComments' : true,
    'duplicateQuestionHeader' : true,
    'showButtonCounts' : true,
    'nextAfterUpdate' : false,
    'nextAfterComment' : false,
    'nextAfterRubric' : false,
    'nextRubricExpanded' : false
  };

  $.ajax({
    'url' : 'https://gitcdn.link/repo/jamesjonesmath/canvancement/master/quizzes/quizwiz/src/qw-engine.js',
    'dataType' : 'script',
    'cache' : true,
    'success' : function() {
      QuizWiz(config);
    }
  });

})();
