
/*Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});*/
//This function is to populate the words in to the Invitation table

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("CreateAdjectives", function(request, response) {
  //var emailId=request.emailId;


  var objArray = new Array();
  //var inviteList = ["Good", "Caring", "Purposeful", "Unique", "Charming", "Beautiful", "Charismatic", "Bold", "Strong","cool","dynamic"];
  var inviteList = [
    "affectionate", "amazeballs", "amazing", "authentic", "awesome", "badass", "beautiful", "bold", "brilliant", "caring", "charming", "chill", "confident", "cool",
    "courageous",
    "curious",
    "cute",
    "dazzling",
    "delightful",
    "dynamic",
    "elegant",
    "encouraging",
    "enthusiastic",
    "exceptional",
    "exciting",
    "extraordinary",
    "fabulous",
    "fantastic",
    "fascinating",
    "fierce",
    "fun",
    "generous",
    "gracious",
    "grateful",
    "happy",
    "hip",
    "hopeful",
    "hot",
    "humble",
    "impressive",
    "Incredible",
    "inspirational",
    "intelligent",
    "joyful",
    "kind",
    "loving",
    "magnificent",
    "marvelous",
    "memorable",
    "mindful",
    "noteworthy",
    "passionate",
    "phenomenal",
    "playful",
    "purposeful",
    "radiant",
    "remarkable",
    "sexy",
    "smart",
    "smashing",
    "soulful",
    "sparkling",
    "spectacular",
    "splendid",
    "strong",
    "stunning",
    "stylish",
    "superb",
    "talented",
    "terrific",
    "thankful",
    "thoughtful",
    "unique",
    "vibrant",
    "vivacious",
    "wonderful"
  ];
  for (var i = 0; i < inviteList.length; i++) {
    var Invitation = Parse.Object.extend("Invitation");
    var invites = new Invitation();
    invites.set("word", inviteList[i]);
    objArray[i] = invites;
  }

  Parse.Object.saveAll(objArray, {
    success: function(list) {
      // All the objects were saved.
      response.success("ok "); //saveAll is now finished and we can properly exit with confidence :-)
    },
    error: function(error) {
      // An error occurred while saving one of the objects.
      response.error("failure on saving list ");
    },
  });

});


//This function is to populate the positive words in to the PositiveWord table

Parse.Cloud.define("CreatePositiveWords", function(request, response) {
  //var emailId=request.emailId;

  var positiveList = ["adventurous", "advocate", "affable", "affectionate", "affluent", "agile", "agreeable", "allocentric", "alluring", "altruistic", "amazeballs", "amazing", "ambitious", "ambivert", "amiable", "amicable", "amusing", "analytical", "angel", "angelic", "animated", "anticipative", "appreciative", "articulate", "artistic", "artsy", "aspiring", "assertive", "assured", "astonishing", "astounding", "astute", "athletic", "attentive", "attractive", "attracts", "austere", "authentic", "authoritarian", "aware", "awe-inspiring", "awesome", "badass", "balanced", "baller", "beaming", "beautiful", "beloved", "benevolent", "bewitching", "big-hearted", "big-thinker", "blessed", "blissful", "blithesome", "bold", "bountiful", "brave", "breathtaking", "bright", "brightens", "brilliant", "broad-minded", "bubbly", "calm", "candid", "captivate", "captivating", "carefree", "careful", "caregiver", "caring", "cerebral", "certain", "challenging", "champion", "charismatic", "charitable", "charm", "charming", "cheeky", "cheerful", "cherish", "chill", "chivalrous", "chocoholic", "classy", "clear-headed", "clever", "collaborative", "colorful", "colossal", "comedian", "comfortable", "committed", "communicator", "compassion", "compassionate", "competitive", "complex", "comraderie", "conceptualist", "confidante", "confident", "connected", "connoisseur", "conscientious", "conscious", "conservative", "considerate", "consistent", "consummate", "contemplative", "content", "contributor", "conviction", "cool", "cooperative", "coordinator", "coquette", "cordial", "counsel", "courageous", "courteous", "creative", "creator", "crisp", "cuddler", "cuddly", "cultured", "curious", "cute", "dainty", "dapper", "daring", "darling", "daydreamer", "dazzle", "dazzling", "dear", "debonair", "decisive", "dedicated", "deep", "delicate", "delight", "delightful", "dependable", "detail-oriented", "determined", "develop", "devoted", "devout", "dignified", "diligent", "diplomatic", "direct", "disciplined", "distinguished", "divine", "dope", "doting", "down-to-earth", "dreamer", "dreamy", "driving", "dutiful", "dynamic", "dynamo", "eager", "earnest", "earthy", "easy-going", "ebullient", "eco-concious", "educated", "effective", "effervescent", "efficient", "effortless", "elated", "electrifying", "elegance", "elegant", "eloquent", "embracer", "eminent", "empathetic", "empathy", "empowered", "empowering", "enchant", "enchanting", "encouraging", "energetic", "energized", "energy", "engaging", "enigmatic", "enlightened", "entertaining", "enthusiast", "enthusiastic", "entrust", "epic", "erudite", "established", "esteemed", "esthetic", "ethical", "evergreen", "excellence", "exceptional", "excited", "exciting", "exemplary", "exhilarated", "exhilarating", "expansive", "experimental", "expert", "explorer", "expressive", "exquisite", "extraordinary", "extravagant", "extrovert", "exuberant", "exultant", "fab", "fabulous", "facilitates", "facilitator", "fair", "fair-minded", "faith in others", "faithful", "familial", "famous", "fancy", "fantabulous", "fantastic", "farsighted", "fascinated", "fascinating", "fashionable", "fashionista", "father-figure", "favorable", "fearless", "feisty", "felicific", "feminist", "femme fatale", "fierce", "fighter", "firm", "fit", "flamboyant", "flatter", "flawless", "flexible", "flirt", "flirtatious", "flirty", "flourishing", "focused", "foodie", "forceful", "forgiving", "forthright", "fortuitous", "fortunate", "foxy", "frank", "freedom", "freethinker", "fresh", "friend", "friendly", "frugal", "fun", "fun-loving", "funny", "gab", "gallant", "gathers", "generative", "generosity", "generous", "genial", "genius", "gentle", "gentle soul", "gentlewoman", "genuine", "giddy", "gifted", "giggly", "giver", "giving", "glamorous", "glorious", "glow", "goal-oriented", "goddess", "godly", "good", "good-natured", "gorgeous", "grace", "graceful", "gracious", "grand", "grateful", "great", "green", "gregarious", "grounded", "growth", "guide", "handsome", "happy", "hard-working", "harmonizer", "harmony", "healer", "healer", "healing", "healthy", "hearty", "heavenly", "help", "helpful", "herioc", "high-energy", "high-minded", "high-spirited", "highest good", "hilarious", "hip", "holy", "honest", "honorable", "hopeful", "hot", "hottie", "hug", "huggable", "humanistic", "humanitarian", "humble", "humility", "humorous", "hypnotic", "iconoclastic", "idealist", "idealistic", "ideator", "idiosyncratic", "idolized", "imaginative", "immaculate", "impartial", "impassioned", "impeccable", "impressive", "impulsive", "incomparable", "incorruptible", "incredible", "independent", "indestructible", "individualistic", "indomitable", "industrious", "ineffable", "ingenious", "initiates", "initiator", "innocent", "innovative", "inquiring", "insightful", "insouciant", "inspirational", "inspires", "inspiring", "integrates", "integrator", "integrity", "intellectual", "intelligence", "intelligent", "intense", "intentional", "interesting", "intimate", "intoxicating", "introvert", "introvert", "intuitive", "inventive", "invincible", "involved", "irreplaceable", "jolly", "jovial", "joy", "joyful", "joyous", "jubilant", "judicious", "just", "keen", "keeper", "kind", "kind soul", "kindhearted", "kindred spirit", "knowledgeable", "ladylike", "laid-back", "laughter", "lavish", "leader", "learner", "legendary", "leisurely", "liberal", "life coach", "life-saver", "lift spirits", "light", "lighthearted", "likable", "listener", "lively", "logical", "lovable", "love", "lovely", "lover", "loving", "loyal", "luminous", "luxurious", "lyrical", "magnanimous", "magnetic", "magnificent", "majestic", "marvelous", "master", "mature", "meaningful", "mellow", "melodic", "memorable", "mends", "mentor", "mesmerizing", "methodical", "meticulous", "mind-blowing", "mindful", "mirthful", "mischievous", "moderate", "modern", "modest", "moralistic", "mother-figure", "motivated", "motivates", "motivational", "musical", "mysterious", "mystical", "natural", "neat", "networker", "nice", "nimble", "non-conformist", "notable", "noteworthy", "nourishes", "nurture", "nurturer", "nurturing", "obedient", "objective", "observant", "old soul", "old-fashioned", "open", "open-minded", "opinionated", "optimist", "opulent", "organized", "original", "outgoing", "outspoken", "outstanding", "overcomes", "passionate", "patient", "patriotic", "peace-loving", "peaceful", "peacekeeper", "people person", "perceptive", "perfect", "perfectionist", "persistent", "personable", "persuasive", "petite", "phenomenal", "philanthropic", "philosophical", "pioneering", "pious", "planner", "playful", "pleasant", "poetic", "poise", "poised", "polished", "polite", "popular", "posh", "positive", "powerful", "practical", "pragmatic", "precious", "precise", "precocious", "prepared", "prestigious", "pretty", "principled", "private", "proactive", "problem-solver", "prodigious", "productive", "profound", "progressive", "prominent", "proper", "prosperous", "protective", "protector", "provider", "provocative", "prudent", "punctual", "pure", "purposeful", "queen", "queen bee", "questioning", "quick", "quick-witted", "quiet", "quintessential", "quirky", "rad", "radiant", "radical", "rare", "rational", "ravishing", "realist", "realistic", "reasonable", "rebel", "rebellious", "receptive", "refined", "reflective", "relaxed", "reliable", "religious", "remarkable", "renowned", "reserved", "resilient", "resourceful", "respectful", "resplendent", "responsible", "responsive", "reverent", "revolutionary", "rewarding", "rich", "risk-taker", "rocking", "rockstar", "romantic", "royal", "rustic", "sacred", "sacrifice", "sacrificing", "safe", "sane", "sassy", "scholar", "scholarly", "scrupulous", "secure", "seductive", "selective", "self-aware", "self-confident", "self-directed", "self-disciplined", "self-driven", "self-generating", "self-reliant", "self-sufficent", "selfless", "sensational", "sensible", "sensitive", "sensual", "sentimental", "serene", "serious", "serves others", "sexual", "sexy", "sharing", "sharp", "shines", "shoulder", "shrewd", "shy", "simple", "simplistic", "sincere", "sizzling", "skillful", "smart", "smashing", "smiling", "smooth", "snuggler", "sociable", "social", "social butterfly", "soft", "soft-spoken", "solemn", "solid", "sophisticated", "soulful", "sparkling", "special", "spectacular", "spirited", "spiritual", "splendid", "spontaneous", "sporty", "spunky", "stable", "steadfast", "steady", "stellar", "stimulating", "straightforward", "striking", "strong", "strong-willed", "studious", "stunner", "stunning", "stupefying", "stupendous", "stylish", "suave", "subjective", "sublime", "subtle", "successful", "sultry", "sunny", "super", "superb", "superman", "superstar", "superwoman", "supporter", "supportive", "supreme", "surprising", "survivor", "sweet", "swift", "sympathetic", "systematic", "tactful", "take charge", "takes ownership", "talented", "talkative", "tasteful", "tech-maven", "temperate", "tender", "tender-hearted", "terrific", "thankful", "the best", "therapeutic", "thinker", "thorough", "thought-leader", "thoughtful", "thrifty", "thrilled", "thriving", "tidy", "tolerant", "tough", "tranquil", "transformational", "treasure", "treasured", "triumphant", "triumphs", "true", "trust", "trusting", "trustworthy", "trusty", "truthful", "unafraid", "unassuming", "unbeatable", "unconventional", "understanding", "understated", "unique", "unites", "unmatched", "unpretentious", "unrivaled", "unwavering", "upbeat", "uplift", "upright", "urbane", "valued", "venturesome", "versatile", "vibrant", "vigorous", "virtuous", "visionary", "vital", "vivacious", "warm", "warm-hearted", "welcoming", "well-bred", "well-educated", "well-mannered", "well-read", "well-rounded", "whimsical", "whole", "willing", "winning", "wise", "witty", "womanly", "wonder", "wonderful", "wondrous", "workaholic", "worldly", "young", "youthful", "zeal", "zealous", "zest", "zippy"];
  var objArray = new Array();
  for (var i = 0; i < positiveList.length; i++) {
    var PositiveWord = Parse.Object.extend("PositiveWord");
    var pos = new PositiveWord();
    pos.set("word", positiveList[i]);
    objArray[i] = pos;
  }


  Parse.Object.saveAll(objArray, {
    success: function(list) {
      // All the objects were saved.
      response.success("ok "); //saveAll is now finished and we can properly exit with confidence :-)
    },
    error: function(error) {
      // An error occurred while saving one of the objects.
      response.error("failure on saving list ");
    },
  });

});


var _ = require('underscore.js');

var user_name;

function safeCase(source) {
  return source instanceof String ? source.toLowerCase() : source;
}

Parse.Cloud.define("ForgotPassword", function(request, response) {
  if (!request.params.email) {
    response.success("Email id has to be given");
  }

  var email = safeCase(request.params.email); // normalize to lowercase
  var username;


  var adjectives = new Parse.Query("Invitation");
  adjectives.find({
    success: function(adjectiveResults) {

      var rand = Math.floor(Math.random() * adjectiveResults.length) % 6;
      var adj = adjectiveResults[rand];
      var randWord = adj.get("word");
      var html = getMailHeader();

      var user = new Parse.Query("UserInfo");
      user.equalTo("userEmail", email);

      user.find({
        success: function(results) {
          var userLength = results.length;
          user_name = results[0].get("userName"); // should always be lowercase
          var Base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
              var t = "";
              var n, r, i, s, o, u, a;
              var f = 0;
              e = Base64._utf8_encode(e);
              while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                  u = a = 64
                } else if (isNaN(i)) {
                  a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
              }
              return t
            },
            decode: function(e) {
              var t = "";
              var n, r, i;
              var s, o, u, a;
              var f = 0;
              e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                  t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                  t = t + String.fromCharCode(i)
                }
              }
              t = Base64._utf8_decode(t);
              return t
            },
            _utf8_encode: function(e) {
              e = e.replace(/\r\n/g, "\n");
              var t = "";
              for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                  t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                  t += String.fromCharCode(r >> 6 | 192);
                  t += String.fromCharCode(r & 63 | 128)
                } else {
                  t += String.fromCharCode(r >> 12 | 224);
                  t += String.fromCharCode(r >> 6 & 63 | 128);
                  t += String.fromCharCode(r & 63 | 128)
                }
              }
              return t
            },
            _utf8_decode: function(e) {
              var t = "";
              var n = 0;
              var r = c1 = c2 = 0;
              while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                  t += String.fromCharCode(r);
                  n++
                } else if (r > 191 && r < 224) {
                  c2 = e.charCodeAt(n + 1);
                  t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                  n += 2
                } else {
                  c2 = e.charCodeAt(n + 1);
                  c3 = e.charCodeAt(n + 2);
                  t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                  n += 3
                }
              }
              return t
            }
          }
          if (results.length == 1) {
            var usernew = results[0];
            var password = Base64.encode(randWord);
            usernew.set("password", password);
            usernew.save();

            html += "<p>Hey " + user_name + ",</p>" +

              "<p>We’ve reset your password on Nitkan. You can pick a new password after you log into the app using the following credentials. You can also change your password under the Settings section.</p>" +

              "<p><strong>username: </strong>" + user_name + "<br />" +
              "<strong>password: </strong>" + randWord + "</p>";
            html += getMailFooter();

            var Mailgun = require('mailgun');
            Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');

            Mailgun.sendEmail({
              to: email,
              from: "Reset Password - Nitkan <love@nitkan.com>",
              subject: "Reset your password on Nitkan",
              html: html
            }, {
              
              success: function(httpResponse) {
                console.log(httpResponse);

                response.success({
                  message: "Your password has been reset and the mail has been sent.",
                  password:randWord
                });
              },

              error: function(httpResponse) {
                console.error(httpResponse);
                response.error("Uh oh, something went wrong");
              }

            });


          }
        },
        error: function() {

        }
      });



    },
    error: function() {

    }
  });


});


//Sending message via mail to non registered user.
Parse.Cloud.define("SendMessageToNewUser", function(request, response) {

  if (!request.params.to) {
    response.success("Email id has to be given");
  }
  var email = safeCase(request.params.to); // normalize to lower case
  var msg = request.params.message;
  var from = request.params.from;
  //var senderName = request.params.senderName;
  var firstname = request.params.firstName;
  var lastname = request.params.lastName;

  var adjectives = new Parse.Query("Invitation");
  adjectives.find({
    success: function(adjectiveResults) {
      var rand = Math.floor(Math.random() * adjectiveResults.length) % 6;
      var adj = adjectiveResults[rand];
      var randWord = adj.get("word");

      // lookup user by name or email

      var user = new Parse.Query("UserInfo");
      user.equalTo("userEmail", email);

      user.find({
        success: function(results) {
          var userLength = results.length;
          if (results.length == 1) {
            var usernew = results[0];
            usernew.set("inviteCode", randWord);
            usernew.set("status", "invited");
            usernew.save();
          } else if (results.length == 0) {
            var userClass = Parse.Object.extend("UserInfo");
            var usernew = new userClass();
            usernew.set("userEmail", email);
            usernew.set("inviteCode", randWord);
            usernew.set("status", "invited");
            usernew.save();
          }
        },
        error: function() {
          response.error("Failed to identify recipient")
          return;
        }
      });

      if (firstname == "" && lastname == "") {
        fromAdd = email;
      } else {
        fromAdd = firstname + " " + lastname;
      }


      var html = getMailHeader();
      html += "<p>You have a new message from " + firstname + " via <a href='http://www.nitkan.com'>Nitkan</a>.</p>";
      html += "<p>“<em> " + msg + " </em>”</p>";
      html += "To view this message and cheer others on, please <a href='https://itunes.apple.com/us/app/nitkan/id975445397?ls=1&mt=8'>download</a> our iOS App and register using the following code:";
      html += " <br> <strong>email</strong>:" + email + " <br> <strong>code</strong>: " + randWord + "<br>" +
        "<p> </p>" +

        "<p> </p>" +

        "<p><a href='http://www.nitkan.com'>Nitkan</a> is currently available only on iOS.</p>" +

        "<p>If you are a non-iOS user, we apologize that you aren't able to create an account right away. Until the time that your device specific version is made available, our thoughtful engineers have figured out a way to safeguard this note. Thanks for being patient!</p>";
      //html += getMailFooter();


      var Mailgun = require('mailgun');
      Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');

      var fromMail = firstname + "via Nitkan (" + from + ")";
      var subject = "New message from " + fromAdd;
      Mailgun.sendEmail({
        to: email,
        from: "love@nitkan.com",
        subject: subject,
        html: html
      }, {
        success: function(httpResponse) {
          // console.log(httpResponse);
          response.success("Congrats! Your message has been sent");

        },
        error: function(httpResponse) {
          console.error("Failed to send message: " + httpResponse);
          response.error("Uh oh, something went wrong");
        }

      });

    },
    error: function(result1) {
      console.error("No code found");
      response.error("No code found");
    }

  });

});

//Sending message via mail to registered user.
Parse.Cloud.define("SendMail", function(request, response) {

  console.log("SendMail");

  if (!request.params.to) {
	console.error("Error: no recipient specified");
    response.error("Error: no recipient specified");
  }

  var recipientEmailOrUsername = safeCase(request.params.to); // normalize to lowercase
  var msg = request.params.message;
  var from = request.params.from;
  //var senderName = request.params.senderName;
  var firstname = request.params.firstName;
  var lastname = request.params.lastName;

  if (firstname == "" && lastname == "") {
    fromAdd = recipientEmailOrUsername;
  } else {
    fromAdd = firstname + " " + lastname;
  }

	// console.log("Querying UserInfo table with recipient's email address");

  // query recipient by email or user name
  var queryRecipientEmail = new Parse.Query("UserInfo");
  queryRecipientEmail.equalTo("userEmail", recipientEmailOrUsername); // normalized
  var queryRecipientName = new Parse.Query("UserInfo");
  queryRecipientName.equalTo("userName", recipientEmailOrUsername); // normalized
  var queryRecipient = Parse.Query.or(queryRecipientEmail, queryRecipientName)
  queryRecipient.find({
    success: function(results) {

      // console.log("Found possible recipient(s): " + String(results));

      var userLength = results.length;
      if (results.length == 1) {

        // console.log("Found unique recipient: " + String(results[0]));

        var recipient = results[0];

        var html = getMailHeader();
        html += "<p>You have a new message from " + firstname + " via <a href='http://www.nitkan.com'>Nitkan</a>.</p>";
        html += "<p>“<em> " + msg + " </em>”</p>";
        html += "<p> </p>" +

          "<p> </p>" +

          "<p><a href='http://www.nitkan.com'>Nitkan</a> is currently available for <a href='https://itunes.apple.com/us/app/nitkan/id975445397?ls=1&mt=8'>download</a> in the iOS App Store.</p>" +

          "<p>If you are a non-iOS user, we apologize that you aren't able to create an account right away. Until the time that your device specific version is made available, our thoughtful engineers have figured out a way to safeguard this note. Thanks for being patient!</p>";
        //html += getMailFooter();


        var Mailgun = require('mailgun');
        Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');

        var email = recipient.get("userEmail") // should be normalized in database
        var fromMail = firstname + "via Nitkan (" + from + ")";
        var subject = "New message from " + fromAdd;
        // console.log("Sending message to " + email);

        Mailgun.sendEmail({
          to: email,
          from: "love@nitkan.com",
          subject: subject,
          html: html
        }, {
          success: function(httpResponse) {
            // console.log(httpResponse);
            response.success("Congrats! Your message has been sent");

          },
          error: function(httpResponse) {
            console.error(httpResponse);
            response.error("We are sorry, but could not send your message at this time.  If the problem persists, please contact Nitkan.");
          }});
      }

      // case  of multiple possible recipients
      else if (results.length > 1) {
        console.error("Error: muliple possible recipients!");
        response.error("Error: muliple possible recipients!");
      }

      // case of no recipient (should be handled by error, should it not?)
      else {
        console.error("Error: failed to find recipient");
        response.error("Error: failed to find recipient");
      }

    },

    error: function() {
      console.error("Error: failed to find the intended recipient.");
    	response.error("Error: failed to find the intended recipient.");
    }
  });

  // console.log("SendMessage: done");

});



//email footer template
function getMailFooter() {

  var html = "<p>If you have any questions, we are here to help. Email us at <a href='mailto:hello@nitkan.com'>hello@nitkan.com</a> or follow us on twitter <a href='https://www.twitter.com/sharenitkan'>@sharenitkan</a>.</p>" +

    "<p>Happy Cheering!<br />" +
    "- Adi & the Nitkan Team</p>" +
    "</div>" +
    "</body>" +
    "</html>";

  return html;

}

//email header template
function getMailHeader() {

  var html = "<html>" +
    "<head>" +
    "<style type='text/css'>" +
    "body {" +
    "padding: 20px;" +
    "}" +
    ".content {" +
    "background-color: #ffffff;" +
    "color: #000000;" +
    "font-family: HelveticaNeue-Light;" +
    "font-size: 14px;" +
    "padding: 20px;" +
    "width: 80%;" +
    "border-radius: 10px;" +
    "}" +
    "</style>" +
    "</head>" +
    "<body>" +
    "<div class='content'>";
  return html;

}



Parse.Cloud.define("GetUserMessages", function(request, response) {

  var toId = request.params.to;

  var message = new Parse.Query("Message");
  message.equalTo("toId", toId);

  message.find({
    success: function(results) {
      var success_params = [];
      var success_params1 = {};
      var peopleArr = [];

      for (var i = 0; i < results.length; ++i) {

        var messageId = results[i].get("objectId");
        var fromId = results[i].get("fromId");
        var text = results[i].get("text");
        var imageUrl = results[i].get("imageUrl");
        var audioUrl = results[i].get("audioUrl");
        var videoUrl = results[i].get("videoUrl");
        var collectionId = results[i].get("collectionId");
        var isFavorite = results[i].get("isFavorite");
        var isPublic = results[i].get("isPublic");
        var status = results[i].get("status");
        var makeMyDay = results[i].get("makeMyDay");
        var timeMadeMyDay = results[i].get("timeMadeMyDay");
        var createdAt = results[i].get("createdAt");

        peopleArrCount = peopleArr.length;
        if (peopleArr.indexOf(fromId) == -1) {
          peopleArr[peopleArrCount + 1 - 1] = fromId
        }


        success_params[i] = {};
        success_params[i]['messageId'] = '843758';
        success_params[i]['fromId'] = fromId;
        success_params[i]['text'] = text;
        success_params[i]['imageUrl'] = imageUrl;
        success_params[i]['audioUrl'] = audioUrl;
        success_params[i]['videoUrl'] = videoUrl;
        success_params[i]['collectionId'] = collectionId;
        success_params[i]['isFavorite'] = isFavorite;
        success_params[i]['isPublic'] = isPublic;
        success_params[i]['status'] = status;
        success_params[i]['makeMyDay'] = makeMyDay;
        success_params[i]['createdAt'] = createdAt;

      }

      var success_params2 = [];

      for (var j = 0; j < peopleArr.length; j++) {

        var peopleId = peopleArr[j];

        var people = new Parse.Query("People");
        people.equalTo("userId", toId);
        people.equalTo("peopleId", peopleId);

        people.find({
          success: function(peopleResults) {
            var peopleLength = peopleResults.length;
            var people_results = peopleResults[0];

            if (peopleLength > 0) {

              var peopleEmail = people_results.get("peopleEmail");
              var nickName = people_results.get("nickName");
              var fName = people_results.get("fName");
              var lName = people_results.get("lName");
              var group = people_results.get("group");
              var imageUrl = people_results.get("imageUrl");
              var thumbImageUrl = people_results.get("thumbImageUrl");

            } else {

            }

            success_params2[j] = {};
            success_params2[j]['peopleId'] = peopleId;
            success_params2[j]['peopleEmail'] = peopleEmail;
            success_params2[j]['nickName'] = nickName;
            success_params2[j]['fName'] = fName;
            success_params2[j]['lName'] = lName;
            success_params2[j]['imageUrl'] = imageUrl;
            success_params2[j]['thumbImageUrl'] = thumbImageUrl;
            success_params2[j]['group'] = group;

          },
          error: function() {
            response.error("Error found");
          }

        });


      }


      //success_params1['messages']=success_params;
      response.success(success_params2);

    },
    error: function() {
      response.error("Error found");
    }

  });

});



var userResults = null;
//sending invitation code to the user
Parse.Cloud.define("RequestInvitation", function(request, response) {

  if (!request.params.email) {
    response.success("Email id has to be given");
  }

  var email = safeCase(request.params.email); // normalize to lower case

  var user = new Parse.Query("UserInfo");
  user.equalTo("userEmail", email); // normalized
  // user.equalTo("status", "requested");

  user.find({
    success: function(results) {
      var userLength = results.length;
      userResults = results;

      if (userLength == 0) {

        var adjectives = new Parse.Query("Invitation");

        adjectives.find({
          success: function(adjectiveResults) {
            var rand = Math.floor(Math.random() * adjectiveResults.length) % 6;
            var adj = adjectiveResults[rand];
            var randWord = adj.get("word");

            var html = getMailHeader();
            html += "<p>You’re in!</p>" +

              "<p>I’m excited to invite you to join Nitkan - a private, positivity sharing app for the people who matter in our life.</p>" +

              "<p>If you haven’t done so already, please <a href='https://itunes.apple.com/us/app/nitkan/id975445397?ls=1&mt=8'>download</a> the iPhone App (Android version will come soon!).</p>" +

              "<p>You can create your Nitkan account by using this email address and invitation code within the app.</p>" +

              "<p><strong>email</strong>: " + email + " <br />" +
              "<strong>code</strong>: " + randWord + " </p>" +

              "<p><br />" +
              "<strong>Guide to Nitkan</strong>:</p>" +

              "<ul>" +
              "<li>Use Nitkan to share positive, kind, and heartfelt messages with people you love, care for and work with.</li>" +
              "<li>Make it personal and genuine. What you notice about others and how you compliment, cheer or empathize with them, say a lot about you.</li>" +
              "<li>Send something that they will care for and will make them think of you positively.</li>" +
              "<li>Do your best to see and share the goodness others. It’ll come back!</li>" +
              "</ul>";
            html += getMailFooter();

            var userClass = Parse.Object.extend("UserInfo");
            var user = new userClass();

            user.set("userEmail", email); // normalized above
            user.set("inviteCode", randWord);
            user.set("status", "invited");
            user.save();

            var invitationCode = "Invitation code : " + randWord;

            var Mailgun = require('mailgun');
            Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');

            Mailgun.sendEmail({
              to: email,
              from: "admin@nitkan.com",
              subject: "You’ve Been Invited to Join Nitkan",
              html: html
            }, {
              success: function(httpResponse) {
                // console.log(httpResponse);
                response.success("Email sent!");
              },
              error: function(httpResponse) {
                console.error(httpResponse);
                response.error("Uh oh, something went wrong");
              }
            });


            // response.success("We'll email you the invitation code as soon as one becomes available");

            // return the verification code immediately
            console.log("RequestInvitation - Success: Returning dictionary with message and code");
            response.success({
              message: "We'll email you the invitation code as soon as one becomes available",
              code:randWord
            });
          },
          error: function(result1) {
            response.error("No code found");
          }

        });
      } else {
        response.error("This user has already been invited. Please check your inbox!");
      }
    },
    error: function() {
      response.error("Error found");
    }
  });

});

//categorisation of user in the people table
Parse.Cloud.define("Categorisation", function(request, response) {
  var from = request.params.from;
  var to = request.params.to;
  var group = request.params.group;

  var user = new Parse.Query("UserInfo");
  user.equalTo("objectId", to);

  user.find({
    success: function(results) {
      var userResult = results[0];

      var firstName = userResult.get("firstName");
      var lastName = userResult.get("lastName");
      var imageURL = userResult.get("imageUrl");
      var imageThumbURL = userResult.get("imageThumbUrl");
      var email = userResult.get("userEmail"); // normalized in database

      var PeopleClass = Parse.Object.extend("People");
      var people = new PeopleClass();
      people.set("userId", from);
      people.set("peopleId", to);
      people.set("peopleEmail", safeCase(email));

      people.set("fName", firstName);
      people.set("lName", lastName);
      people.set("nickName", firstName);
      people.set("imageUrl", imageURL);
      people.set("imageThumbUrl", imageThumbURL);
      people.set("group", group);
      people.set("word", "");
      people.set("triggerWord", "0");
      people.save();

      response.success("Successfully updated");


    },
    error: function() {
      response.error("Error found");
    }

  });

});

//This will update word voting count and send the push notifications to the intended user
Parse.Cloud.beforeSave("WordVoting", function(request, response) {

  var dirtyFlag;
  var message;
  var voteCount;
  var alertMsg;

  if (request.object.get("voteCount") && request.object.dirty("voteCount")) {

    dirtyFlag = "true";
    voteCount = request.object.get("voteCount");
  }

  if (dirtyFlag == "true") {

    if (voteCount == 5) {
      message = "Your tribe are a persistent bunch! They got together and found a word that fits you well. Tap to discover and share it on your profile.";
      alertMsg = "New Personality Type available for Profile";
    } else {
      message = "Surprise! You were described by people you know.";
      alertMsg = "New Personality Type";
    }

    var objectId = request.object.id;
    var word = request.object.get("word");
    var userId = request.object.get("userId");

    var user = new Parse.Query("UserInfo");
    user.equalTo("objectId", userId);

    user.find({

      success: function(results) {

        var userResult = results[0];

        var firstName = userResult.get("firstName");
        var lastName = userResult.get("lastName");
        var email = userResult.get("userEmail"); // normalized in database

        var Alert = Parse.Object.extend("Alert");
        var alert = new Alert();
        alert.set("toId", userId);
        alert.set("message", message);
        alert.set("objId", objectId);
        alert.set("objType", "text");
        alert.set("alertType", alertMsg);
        alert.set("status", "unread");
        alert.save();
        //var alertObjId = alert.get("id");

        var pushQuery = new Parse.Query(Parse.Installation);
        pushQuery.matchesQuery('UserInfo', user);

        // Send push notification to query
        Parse.Push.send({
          where: pushQuery,
          data: {
            alert: message,
            objectid: objectId,
            objectType: "text",
            alertType: alertMsg,
            badge: "Increment",
          }
        }, {
          success: function() {
            // Push was successful
          },
          error: function(error) {
            // Handle error
          }
        });



        response.success();


      },
      error: function() {
        response.error("Error found");
      }


    });



  }



});


//This triggers the push notification when user made their day,favorites a message,make message as public
Parse.Cloud.beforeSave("Message", function(request, response) {


  var dirtyFlag;
  var message;

  // check for tag
  if (request.object.get("madeMyDay") && request.object.dirty("madeMyDay")) {
    var madeMyDay = request.object.get("madeMyDay");
    if (madeMyDay == 0) {
      dirtyFlag = "false";
    } else {
      dirtyFlag = "true";
    }
  } else if (request.object.get("isFavorite") && request.object.dirty("isFavorite")) {
    var isFavorite = request.object.get("isFavorite");
    if (isFavorite == 0) {
      dirtyFlag = "false";
    } else {
      dirtyFlag = "true";
    }
  } else if (request.object.get("isPublic") && request.object.dirty("isPublic")) {
    var isPublic = request.object.get("isPublic");
    if (isPublic == 0) {
      dirtyFlag = "false";
    } else {
      dirtyFlag = "true";
    }
  }

  if (dirtyFlag == "true") {

    var toId = request.object.get("toId");
    var fromId = request.object.get("fromId");
    var messageId = request.object.id;
    var msg = request.object.get("text");

    if (madeMyDay == 1 || isFavorite == 1 || isPublic == 1) {

      var user = new Parse.Query('UserInfo');
      user.equalTo('objectId', fromId);

      user.find().then(function(results) {

        var promises = [];

        _.each(results, function(result) {

          promises.push((function(result) {
            var promise = new Parse.Promise();

            firstName = result.toJSON().firstName;

            var toUser = new Parse.Query('UserInfo');
            toUser.equalTo('objectId', toId);

            toUser.find({ // this doesnt seem to ever run, i have tried .each as well
              success: function(userResult1) {
                resultUser1 = userResult1[0];

                firstName1 = resultUser1.get("firstName");
                registerStatus = resultUser1.get("status");
                toEmail = resultUser1.get("userEmail"); // normalized in database


                //  message = firstName+' has made your message as public';
                //message = "Your message has just made the day for " + firstName + "<br />";
                var alertMsg;
                var skipUpdate = false;
                if (madeMyDay == 1) {
                  message = "Your message to " + firstName1 + " made their day!";
                  alertMsg = "Made Their Day!";
                } else if (isFavorite == 1) {
                  message = firstName1 + " loves your message so much that they made it one of their favorites!";
                  alertMsg = "favorite";
                } else if (isPublic == 1) {
                  message = "You really make people feel special! " + firstName1 + " would like to share one of your messages publicly on their profile. Tap to check out the message and take action.";
                  alertMsg = "public";
                } else if (isPublic == 2) {
                  message = "Requested message has made public by " + firstName;
                  alertMsg = "public";
                } else {
                  skipUpdate = true;
                }

                if (!skipUpdate) {
                  var pushQuery = new Parse.Query(Parse.Installation);
                  if (isPublic == 2) {
                    pushQuery.matchesQuery('UserInfo', toUser);
                  } else {
                    pushQuery.matchesQuery('UserInfo', user);
                  }


                  // Send push notification to query
                  Parse.Push.send({
                    where: pushQuery,
                    data: {
                      alert: message,
                      objectid: messageId,
                      objectType: "message",
                      alertType: alertMsg,
                      badge: "Increment",
                    }
                  }, {
                    success: function() {
                      // Push was successful
                    },
                    error: function(error) {
                      // Handle error
                    }
                  });



                  var Alert = Parse.Object.extend("Alert");
                  var alert = new Alert();
                  if (isPublic == 2) {
                    alert.set("toId", toId);
                    alert.set("fromId", fromId);
                  } else {
                    alert.set("toId", fromId);
                    alert.set("fromId", toId);
                  }
                  alert.set("message", message);
                  alert.set("objId", messageId);
                  alert.set("objType", "message");
                  alert.set("alertType", alertMsg);
                  alert.set("status", "unread");
                  alert.save();


                }

                promise.resolve();

              },
              error: function(error) {
                response.error(error);
              }
            });

            return promise;

          })(result));


        });
        return Parse.Promise.when(promises);


      }).then(function() {
        response.success();
      });



    } else {
      response.success();
    }


  } else if (request.object.get("fromId")) {
    //This means fromId is changed
    //In this case, check whether the toId and fromId mapping exists in the db
    //So new message insertion
    var fromId = request.object.get("fromId");
    var toId = request.object.get("toId");

    var people = new Parse.Query('People');
    people.equalTo('userId', toId);
    people.equalTo('peopleId', fromId);
    //Checking reverse mapping
    people.find({
      success: function(userResults) {
        console.log("S");
        console.log(userResults.length);
        console.log("T");

        if (userResults.length == 0) {
          var user2 = new Parse.Query('UserInfo');
          user2.equalTo('objectId', fromId);
          console.log("fetching data for " + fromId);
          user2.find({
            success: function(userResults2) {
              console.log("Got data for " + fromId);

              var userResult = userResults2[0];

              var firstName = userResult.get("firstName");
              var lastName = userResult.get("lastName");
              var imageURL = userResult.get("imageUrl");
              var imageThumbURL = userResult.get("imageThumbUrl");
              var email = userResult.get("userEmail"); // normalized in database

              console.log(firstName);

              var PeopleClass = Parse.Object.extend("People");
              var people = new PeopleClass();
              people.set("userId", toId);
              people.set("peopleId", fromId);
              people.set("peopleEmail", email);
              people.set("fName", firstName);
              people.set("lName", lastName);
              people.set("nickName", firstName);
              people.set("word", "");
              people.set("triggerWord", "0");
              if (imageURL != null) {
                people.set("imageUrl", imageURL);
                people.set("imageThumbUrl", imageThumbURL);
              }
              people.save();
              response.success();
            },
            error: function(error) {
              response.error(error);
            }
          });
        } else {
          response.success();
        } //userResultcount is 0
      },
      error: function(error) {
        response.error(error);
      }
    });

  }

});



//push notifications get trigger when ever message created
Parse.Cloud.afterSave("Message", function(request) {

  console.log("Parse.Cloud.afterSave Message...")

  var mId = request.object.id;
  var toId = request.object.get("toId");
  var fromId = request.object.get("fromId");
  var text = request.object.get("text");
  var imageUrl = request.object.get("imageUrl");
  var videoUrl = request.object.get("videoUrl");
  var audioUrl = request.object.get("audioUrl");
  var updateTime = request.object.updatedAt;
  var update = JSON.stringify(updateTime);
  var createTime = request.object.createdAt;
  var create = JSON.stringify(createTime);
  var message;
  var fromAdd;

  // if we are creating a message
  if (create == update) {

    // var query = new Parse.Query("Message");
    // query.equalTo("objectId", mId);

    // lookup sender
    var querySender = new Parse.Query('UserInfo');
    querySender.equalTo('objectId', fromId);
    querySender.find().then(function(senders) {

      // for each (only) sender record
      var promises = [];
      _.each(senders, function(sender) {

        // build promise list (really just one)
        promises.push((function(sender) {

          var promise = new Parse.Promise();
          var firstName = sender.toJSON().firstName;
          var lastName = sender.toJSON().lastName;

          // lookup recipient
          var queryRecipient = new Parse.Query('UserInfo');
          queryRecipient.equalTo('objectId', toId);
          queryRecipient.find({ // this doesnt seem to ever run, i have tried .each as well
            success: function(recipientList) {

              recipient = recipientList[0];

// CHRISCO DELETEME DEADCODE: msgFormat is never used
              // registerStatus = recipient.get("status");
              // // set message format
              // if (registerStatus == "Registered") {
              //   if (text != '') {
              //     msgFormat = 'text';
              //   } else if (audio != '') {
              //     msgFormat = 'audio';
              //   } else if (video != '') {
              //     msgFormat = 'video';
              //   } else if (image != '') {
              //     msgFormat = 'image';
              //   }
              // }

              message = firstName + ' sent you a new message';

              // check for an installation of the recipient (has the app been installed)
              var pushQuery = new Parse.Query(Parse.Installation);
              pushQuery.matchesQuery('UserInfo', queryRecipient);

              // Send push notification each of recipient's installed devices
              Parse.Push.send({
                where: pushQuery,
                data: {
                  alert: message,
                  objectid: mId,
                  objectType: "message",
                  alertType: "message",
                  badge: "Increment",
                }
              }, {
                success: function() {
                  // Push was successful
                },
                error: function(error) {
                  // Handle error
                  console.log("Failed to push message from " + firstname + " " + lastname)
                }
              });

              var Alert = Parse.Object.extend("Alert");
              var alert = new Alert();
              alert.set("toId", toId);
              alert.set("fromId", fromId);
              alert.set("message", message);
              alert.set("objId", mId);
              alert.set("objType", "message");
              alert.set("alertType", "message");
              alert.set("status", "unread");
              alert.save();


              promise.resolve();

            },

            error: function(error) {
              console.log("\tERROR in Parse.Cloud.afterSave(\"Message\"): failed to find recipient on system!")
              status.error(error);
            }
          });


          console.log("\tCHRISCO: return promise;")
          return promise;

        })(sender));  // execute outer sender loop, sending notifications


      }); // for each sender

      // execute promises
      return Parse.Promise.when(promises);

    }); // end query senders

  } // end create message
});



var Image = require("parse-image");
//email will get trigger when user completed the registration process.
Parse.Cloud.beforeSave("UserInfo", function(request, response) {

  // normalize email and username to lower case before saving UserInfo record to database
  var userInfo = request.object
  
  // if email is defined (and it should be)  
  if (userInfo.get("userEmail")) {
    // convert to lowercase
    userInfo.set("userEmail", safeCase(userInfo.get("userEmail"))); // normalize email to lower case
  }

  // if username is defined (it won't be for initial invites)
  if (userInfo.get("userName")) {
    // convert to lowercase
    userInfo.set("userName", safeCase(userInfo.get("userName")));   // normalize username to lower case
  }

  if (request.object.get("status") && request.object.dirty("status")) {
    var dirtyFlag;
    var status = request.object.get("status");
    dirtyFlag = "true";

    if (status == "Registered") {
      dirtyFlag = "true";
    } else {
      dirtyFlag = "false";
    }

    if (dirtyFlag == "true") {

      var firstname = request.object.get("firstName");
      var username = request.object.get("userName");  // normalized to lowercase above
      var email = request.object.get("userEmail");    // normalized to lowercase above

      var html = getMailHeader();

      html += "<p>Welcome to Nitkan, " + firstname + "!" + "</p>" +

        "<p>Your user name is " + username + ".</p>" +

        "<p>Here are few things that will help you get started:</p>" +

        "<ul>" +
        "<li>The people you exchange messages with are categorized in four groups: Dear, Near, Work and Peeps.</li>" +
        "<li>Your activity over the last seven days is reflected through the Nitkan circle. It helps visualize your focus.</li>" +
        "<li>Tap the <strong>sunrise</strong> to tell the sender that their note made your day.</li>" +
        "<li>Tap the <strong>star</strong> to mark the note as a favorite.</li>" +
        "<li>Every interaction on Nitkan is private. If you want a message to be displayed on your public profile (for instance, a note from your boss), tap on the <strong>eye</strong> icon. Once the sender approves, the message, it’ll be made visible.</li>" +
        "</ul>" +

        "<p><strong>Ready?</strong> Think of the person you love the most and send them something they’ll cherish.</p>";

      html += getMailFooter();

      var Mailgun = require('mailgun');
      Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');

      Mailgun.sendEmail({
        to: email,
        from: "Nitkan <love@nitkan.com>",
        subject: "Welcome to Nitkan - let’s get started",
        html: html
      }, {
        success: function(httpResponse) {
          console.log(httpResponse);
          response.success("Email sent!");
        },
        error: function(httpResponse) {
          console.error(httpResponse);
          response.error("Uh oh, something went wrong");
        }
      });



      //response.success();



    }


  }

  var user = request.object;
  if (!user.get("imageUrl")) {
    //  response.error("Users must have a profile photo.");
    response.success();
    return;
  }

  if (!user.dirty("imageUrl")) {
    // The profile photo isn't being modified.
    response.success();
    return;
  }

  Parse.Cloud.httpRequest({
    url: user.get("imageUrl").url()
  }).then(function(response) {
    var image = new Image();
    return image.setData(response.buffer);

  }).then(function(image) {
    // Crop the image to the smaller of width or height.
    var size = Math.min(image.width(), image.height());
    console.log("Attempting to crop image " + String(image) + " to size " + String(size))
    return image.crop({
      left: (image.width() - size) / 2,
      top: (image.height() - size) / 2,
      width: size,
      height: size
    });

  }).then(function(image) {
    // Resize the image to 64x64.
    return image.scale({
      width: 300,
      height: 300
    });

  }).then(function(image) {
    // Make sure it's a JPEG to save disk space and bandwidth.
    return image.setFormat("JPEG");

  }).then(function(image) {
    // Get the image data in a Buffer.
    return image.data();

  }).then(function(buffer) {
    // Save the image into a new file.
    var base64 = buffer.toString("base64");
    var cropped = new Parse.File("thumbnail.jpeg", {
      base64: base64
    });
    return cropped.save();

  }).then(function(cropped) {
    // Attach the image file to the original object.
    user.set("imageThumbUrl", cropped);

  }).then(function(result) {
    response.success();
  }, function(error) {
    response.error(error);
  });

  if (request.object.get("imageUrl") && request.object.dirty("imageUrl")) {
    var userId = request.object.id;
    var people = new Parse.Query("People");
    people.equalTo("peopleId", userId);
    var imageMod = request.object.get("imageUrl");
    var imageThumbMod = request.object.get("imageThumbUrl");

    people.find({
      success: function(results) {
        var userLength = results.length;
        for (var i = 0; i < results.length; i++) {
          var usernew = results[i];
          usernew.set("imageUrl", imageMod);
          usernew.set("imageThumbUrl", imageThumbMod);
          usernew.save();
        }
      },
      error: function() {

      }
    });


  }

});

//Image re-size
Parse.Cloud.beforeSave("People", function(request, response) {
  var user = request.object;

  console.log("beforeSave(\"People\")...")

  if (!user.get("imageUrl")) {
    console.log("\t - no imageUrl provided, returning success")

    //  response.error("Users must have a profile photo.");
    response.success();
    return;
  }

  if (!user.dirty("imageUrl")) {
    console.log("\t - no change to the image, returning success")
    // The profile photo isn't being modified.
    response.success();
    return;
  }

  console.log("\t - updating image...")

  Parse.Cloud.httpRequest({
    url: user.get("imageUrl").url()
  }).then(function(response) {
    var image = new Image();
    return image.setData(response.buffer);

  }).then(function(image) {
    // Crop the image to the smaller of width or height.
    var size = Math.min(image.width(), image.height());
    return image.crop({
      left: (image.width() - size) / 2,
      top: (image.height() - size) / 2,
      width: size,
      height: size
    });

  }).then(function(image) {
    // Resize the image to 64x64.
    return image.scale({
      width: 300,
      height: 300
    });

  }).then(function(image) {
    // Make sure it's a JPEG to save disk space and bandwidth.
    return image.setFormat("JPEG");

  }).then(function(image) {
    // Get the image data in a Buffer.
    return image.data();

  }).then(function(buffer) {
    // Save the image into a new file.
    var base64 = buffer.toString("base64");
    var cropped = new Parse.File("thumbnail.jpeg", {
      base64: base64
    });
    return cropped.save();

  }).then(function(cropped) {
    // Attach the image file to the original object.
    user.set("imageThumbUrl", cropped);

  }).then(function(result) {
    response.success();

  }, function(error) {
    console.log("\t - XXXXXX FAILURE XXXXXX when updating People record")
    response.error(error);
  });
});


function getNextID(parameter, callback) {

  var html = "<html>" +
    "<head>" +
    "<style type='text/css'>" +
    "body {" +
    "padding: 20px;" +
    "}" +
    ".content {" +
    "background-color: #000000;" +
    "color: #ffffff;" +
    "font-family: Times New Roman;" +
    "font-size: 14px;" +
    "padding: 20px;" +
    "width: 80%;" +
    "border-radius: 10px;" +
    "}" +
    "</style>" +
    "</head>" +
    "<body>" +
    "<div class='content'>" +
    "<span>Hello" + parameter + ",</span>" +
    "<span><br>We are happy to welcome you to an exciting community.<br> <br>Please find the invitation code to login to the app. <br> <strong>Username</strong>:" + parameter + " <br> <strong>Code</strong>: A0Fx1Fe1<br><br>For any queries you can contact us at support@nitkan.com<br><br>Thank you for signing up with us! <br> <br>Regards,<br>Team Nitkan</span>" +
    "</div>" +
    "</body>" +
    "</html>";


  if (html) {
    callback.success(html);
  } else {
    callback.error("Error");
  }


