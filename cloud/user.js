// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
//Parse.Cloud.define("hello", function(request, response) {
//response.success("Hello world!");
//});
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
// Parse.Cloud.define("hello", function(request, response) {
//   response.success("Hello sagar,How r u?");
// });
// Parse.Cloud.define("averageAge", function(request, response) {
//  var query = new Parse.Query("Age");
//  query.equalTo("gender", request.params.gender);
//  query.find({
//  success: function(results) {
//  var sum = 0;
//  for (var i = 0; i < results.length; ++i) {
//  sum += results[i].get("age");
//  }
//  response.success(sum / results.length);
//  },
//   error: function() {
//  response.error("age lookup failed");
//  }
//  });
//  });
Parse.Cloud.define("CreateAdjectives", function(request, response) {
  //var emailId=request.emailId;
   
 
  var objArray   = new Array();
  //var inviteList = ["Good", "Caring", "Purposeful", "Unique", "Charming", "Beautiful", "Charismatic", "Bold", "Strong","cool","dynamic"];
  var inviteList=[
  "affectionate","amazeballs","amazing","authentic","awesome","badass","beautiful","bold","brilliant","caring","charming","chill","confident","cool",
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
    var invites    = new Invitation();
    invites.set("word", inviteList[i]);
    objArray[i] = invites;
  }
 
  Parse.Object.saveAll(objArray,{
    success: function(list) {
      // All the objects were saved.
      response.success("ok " );  //saveAll is now finished and we can properly exit with confidence :-)
},
error: function(error) {
      // An error occurred while saving one of the objects.
      response.error("failure on saving list ");
    },
  });
   
});
 
 
 
Parse.Cloud.define("CreatePositiveWords", function(request, response) {
  //var emailId=request.emailId;
   
  var positiveList = ["adventurous","advocate","affable","affectionate","affluent","agile","agreeable","allocentric","alluring","altruistic","amazeballs","amazing","ambitious","ambivert","amiable","amicable","amusing","analytical","angel","angelic","animated","anticipative","appreciative","articulate","artistic","artsy","aspiring","assertive","assured","astonishing","astounding","astute","athletic","attentive","attractive","attracts","austere","authentic","authoritarian","aware","awe-inspiring","awesome","badass","balanced","baller","beaming","beautiful","beloved","benevolent","bewitching","big-hearted","big-thinker","blessed","blissful","blithesome","bold","bountiful","brave","breathtaking","bright","brightens","brilliant","broad-minded","bubbly","calm","candid","captivate","captivating","carefree","careful","caregiver","caring","cerebral","certain","challenging","champion","charismatic","charitable","charm","charming","cheeky","cheerful","cherish","chill","chivalrous","chocoholic","classy","clear-headed","clever","collaborative","colorful","colossal","comedian","comfortable","committed","communicator","compassion","compassionate","competitive","complex","comraderie","conceptualist","confidante","confident","connected","connoisseur","conscientious","conscious","conservative","considerate","consistent","consummate","contemplative","content","contributor","conviction","cool","cooperative","coordinator","coquette","cordial","counsel","courageous","courteous","creative","creator","crisp","cuddler","cuddly","cultured","curious","cute","dainty","dapper","daring","darling","daydreamer","dazzle","dazzling","dear","debonair","decisive","dedicated","deep","delicate","delight","delightful","dependable","detail-oriented","determined","develop","devoted","devout","dignified","diligent","diplomatic","direct","disciplined","distinguished","divine","dope","doting","down-to-earth","dreamer","dreamy","driving","dutiful","dynamic","dynamo","eager","earnest","earthy","easy-going","ebullient","eco-concious","educated","effective","effervescent","efficient","effortless","elated","electrifying","elegance","elegant","eloquent","embracer","eminent","empathetic","empathy","empowered","empowering","enchant","enchanting","encouraging","energetic","energized","energy","engaging","enigmatic","enlightened","entertaining","enthusiast","enthusiastic","entrust","epic","erudite","established","esteemed","esthetic","ethical","evergreen","excellence","exceptional","excited","exciting","exemplary","exhilarated","exhilarating","expansive","experimental","expert","explorer","expressive","exquisite","extraordinary","extravagant","extrovert","exuberant","exultant","fab","fabulous","facilitates","facilitator","fair","fair-minded","faith in others","faithful","familial","famous","fancy","fantabulous","fantastic","farsighted","fascinated","fascinating","fashionable","fashionista","father-figure","favorable","fearless","feisty","felicific","feminist","femme fatale","fierce","fighter","firm","fit","flamboyant","flatter","flawless","flexible","flirt","flirtatious","flirty","flourishing","focused","foodie","forceful","forgiving","forthright","fortuitous","fortunate","foxy","frank","freedom","freethinker","fresh","friend","friendly","frugal","fun","fun-loving","funny","gab","gallant","gathers","generative","generosity","generous","genial","genius","gentle","gentle soul","gentlewoman","genuine","giddy","gifted","giggly","giver","giving","glamorous","glorious","glow","goal-oriented","goddess","godly","good","good-natured","gorgeous","grace","graceful","gracious","grand","grateful","great","green","gregarious","grounded","growth","guide","handsome","happy","hard-working","harmonizer","harmony","healer","healer","healing","healthy","hearty","heavenly","help","helpful","herioc","high-energy","high-minded","high-spirited","highest good","hilarious","hip","holy","honest","honorable","hopeful","hot","hottie","hug","huggable","humanistic","humanitarian","humble","humility","humorous","hypnotic","iconoclastic","idealist","idealistic","ideator","idiosyncratic","idolized","imaginative","immaculate","impartial","impassioned","impeccable","impressive","impulsive","incomparable","incorruptible","incredible","independent","indestructible","individualistic","indomitable","industrious","ineffable","ingenious","initiates","initiator","innocent","innovative","inquiring","insightful","insouciant","inspirational","inspires","inspiring","integrates","integrator","integrity","intellectual","intelligence","intelligent","intense","intentional","interesting","intimate","intoxicating","introvert","introvert","intuitive","inventive","invincible","involved","irreplaceable","jolly","jovial","joy","joyful","joyous","jubilant","judicious","just","keen","keeper","kind","kind soul","kindhearted","kindred spirit","knowledgeable","ladylike","laid-back","laughter","lavish","leader","learner","legendary","leisurely","liberal","life coach","life-saver","lift spirits","light","lighthearted","likable","listener","lively","logical","lovable","love","lovely","lover","loving","loyal","luminous","luxurious","lyrical","magnanimous","magnetic","magnificent","majestic","marvelous","master","mature","meaningful","mellow","melodic","memorable","mends","mentor","mesmerizing","methodical","meticulous","mind-blowing","mindful","mirthful","mischievous","moderate","modern","modest","moralistic","mother-figure","motivated","motivates","motivational","musical","mysterious","mystical","natural","neat","networker","nice","nimble","non-conformist","notable","noteworthy","nourishes","nurture","nurturer","nurturing","obedient","objective","observant","old soul","old-fashioned","open","open-minded","opinionated","optimist","opulent","organized","original","outgoing","outspoken","outstanding","overcomes","passionate","patient","patriotic","peace-loving","peaceful","peacekeeper","people person","perceptive","perfect","perfectionist","persistent","personable","persuasive","petite","phenomenal","philanthropic","philosophical","pioneering","pious","planner","playful","pleasant","poetic","poise","poised","polished","polite","popular","posh","positive","powerful","practical","pragmatic","precious","precise","precocious","prepared","prestigious","pretty","principled","private","proactive","problem-solver","prodigious","productive","profound","progressive","prominent","proper","prosperous","protective","protector","provider","provocative","prudent","punctual","pure","purposeful","queen","queen bee","questioning","quick","quick-witted","quiet","quintessential","quirky","rad","radiant","radical","rare","rational","ravishing","realist","realistic","reasonable","rebel","rebellious","receptive","refined","reflective","relaxed","reliable","religious","remarkable","renowned","reserved","resilient","resourceful","respectful","resplendent","responsible","responsive","reverent","revolutionary","rewarding","rich","risk-taker","rocking","rockstar","romantic","royal","rustic","sacred","sacrifice","sacrificing","safe","sane","sassy","scholar","scholarly","scrupulous","secure","seductive","selective","self-aware","self-confident","self-directed","self-disciplined","self-driven","self-generating","self-reliant","self-sufficent","selfless","sensational","sensible","sensitive","sensual","sentimental","serene","serious","serves others","sexual","sexy","sharing","sharp","shines","shoulder","shrewd","shy","simple","simplistic","sincere","sizzling","skillful","smart","smashing","smiling","smooth","snuggler","sociable","social","social butterfly","soft","soft-spoken","solemn","solid","sophisticated","soulful","sparkling","special","spectacular","spirited","spiritual","splendid","spontaneous","sporty","spunky","stable","steadfast","steady","stellar","stimulating","straightforward","striking","strong","strong-willed","studious","stunner","stunning","stupefying","stupendous","stylish","suave","subjective","sublime","subtle","successful","sultry","sunny","super","superb","superman","superstar","superwoman","supporter","supportive","supreme","surprising","survivor","sweet","swift","sympathetic","systematic","tactful","take charge","takes ownership","talented","talkative","tasteful","tech-maven","temperate","tender","tender-hearted","terrific","thankful","the best","therapeutic","thinker","thorough","thought-leader","thoughtful","thrifty","thrilled","thriving","tidy","tolerant","tough","tranquil","transformational","treasure","treasured","triumphant","triumphs","true","trust","trusting","trustworthy","trusty","truthful","unafraid","unassuming","unbeatable","unconventional","understanding","understated","unique","unites","unmatched","unpretentious","unrivaled","unwavering","upbeat","uplift","upright","urbane","valued","venturesome","versatile","vibrant","vigorous","virtuous","visionary","vital","vivacious","warm","warm-hearted","welcoming","well-bred","well-educated","well-mannered","well-read","well-rounded","whimsical","whole","willing","winning","wise","witty","womanly","wonder","wonderful","wondrous","workaholic","worldly","young","youthful","zeal","zealous","zest","zippy"];
  var objArray     = new Array();
  for (var i = 0; i < positiveList.length; i++) {
    var PositiveWord = Parse.Object.extend("PositiveWord");
    var pos          = new PositiveWord();
    pos.set("word", positiveList[i]);
    objArray[i]      = pos;
  }
   
 
  Parse.Object.saveAll(objArray,{
    success: function(list) {
      // All the objects were saved.
      response.success("ok " );  //saveAll is now finished and we can properly exit with confidence :-)
},
error: function(error) {
      // An error occurred while saving one of the objects.
      response.error("failure on saving list ");
    },
  });
 
});
 
 
var _ = require('underscore.js');
 
 
 
Parse.Cloud.define("ForgotPassword", function(request, response) {
  if (!request.params.email) {
    response.success("Email id has to be given");
  }
 
  var email = request.params.email;
 
 
  var adjectives = new Parse.Query("Invitation");
  adjectives.find({
    success: function(adjectiveResults) {
      var rand = Math.floor(Math.random() * adjectiveResults.length) % 6;
      var adj = adjectiveResults[rand];
      var randWord = adj.get("word");
      var html = getMailHeader();
 
     html += "<p>Hey "+email+",</p>"+
 
"<p>We’ve reset your password on Nitkan. You can pick a new password after you log into the app using the following credentials. You can also change your password under the Settings section.</p>"+
 
"<p><strong>username:</strong>"+email+"<br />"+
"<strong>password:</strong>"+randWord+"</p>";
      html += getMailFooter();
 
      var user = new Parse.Query("_User");
      user.equalTo("email", email);
 
      user.find({
        success: function(results) {
          var userLength = results.length;
          if (results.length == 1) {
            var usernew = results[0];
            usernew.set("password", randWord);
            usernew.save();
          }
        },
        error: function() {
 
        }
      });
 
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
          response.success("Your password has been reset and the mail has been sent.");
 
        },
        error: function(httpResponse) {
          console.error(httpResponse);
          response.error("Uh oh, something went wrong");
        }
 
      });
 
 
 
    },
    error: function() {
 
    }
  });
 
 
});
 
 
 
Parse.Cloud.define("SendMessageToNewUser", function(request, response) {
 
  if (!request.params.to) {
    response.success("Email id has to be given");
  }
  var email = request.params.to;
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
 
 
 
      var user = new Parse.Query("_User");
      user.equalTo("email", email);
 
      user.find({
        success: function(results) {
          var userLength = results.length;
          if (results.length == 1) {
            var usernew = results[0];
            usernew.set("inviteCode", randWord);
            usernew.set("status", "invited");
            usernew.save();
          } else if (results.length == 0) {
            var userClass = Parse.Object.extend("_User");
            var usernew = new userClass();
            var user_name = str.replace("@","");
               usernew.set("username", user_name);
               usernew.set("password", "");
               usernew.set("email", email);
               usernew.set("inviteCode", randWord);
               usernew.set("status", "invited");
               usernew.save();
             
          }
        },
        error: function() {
 
        }
      });
 
      if(firstname == "" && lastname == ""){
        fromAdd = email;
      }else{
        fromAdd = firstname+" "+lastname;
      }
 
 
      var html = getMailHeader();
      html += "<p>You have a new message from "+firstname+" via <a href='http://www.nitkan.com'>Nitkan</a>.</p>";
      html += "<p>“<em> "+msg+" </em>”</p>";
      html += "To view this message on app, please logon to the app.";
      html += "<span><br><br>Please find the invitation code to login to the app.";
      html += " <br> <strong>Username</strong>:" + email + " <br> <strong>Code</strong>: " + randWord + "<br>"+
      "<p> </p>"+
 
"<p> </p>"+
 
"<p><a href='http://www.nitkan.com'>Nitkan</a> is currently available only on iOS.</p>"+
 
"<p>If you are a non-iOS user, we apologize that you aren't able to create an account right away. Until the time that your device specific version is made available, our thoughtful engineers have figured out a way to safeguard this note. Thanks for being patient!</p>";
      //html += getMailFooter();
 
 
      var Mailgun = require('mailgun');
      Mailgun.initialize('sandbox430955059c4f45fbb51a299930a5126e.mailgun.org', 'key-ab3605be45cbad3a91d1ec9e9212baad');
 
      var fromMail = firstname+"via Nitkan ("+from+")";
      var subject  = "New message from "+ fromAdd;
      Mailgun.sendEmail({
        to: email,
                from: "love@nitkan.com",
                subject: subject,
                html: html
              }, {
                success: function(httpResponse) {
                  console.log(httpResponse);
                  response.success("Congrats! Your message has been sent");
 
                },
                error: function(httpResponse) {
                  console.error(httpResponse);
                  response.error("Uh oh, something went wrong");
                }
 
              });
 
    },
    error: function(result1) {
      response.error("No code found");
    }
 
  });
 
});
 
 
 
 
function getMailFooter() {
 
  var html = "<p>If you have any questions, we are here to help. Email us at <a href='mailto:hello@nitkan.com'>hello@nitkan.com</a> or follow us on twitter <a href='https://www.twitter.com/sharenitkan'>@sharenitkan</a>.</p>"+
 
"<p>Happy Cheering!<br />"+
"- Adi & the Nitkan Team</p>" +
  "</div>" +
  "</body>" +
  "</html>";
 
  return html;
 
}
 
 
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
 
 
 
Parse.Cloud.define("GetUserMsg", function(request, response) {
  var toId = request.params.to;
  var peopleArr = [];
  var success_params2 = [];
  var message = new Parse.Query("Message");
  message.equalTo("toId", toId);
  var pplId;
  message.find().then(function(results) {
 
    var success_params = [];
    var success_params1 = {};
 
 
        // for (var i = 0; i < results.length; ++i) {
 
          _.each(results, function(result) {
 
            var messageId = result.get("objectId");
            var fromId = result.get('fromId');
            var text = result.get("text");
            var imageUrl = result.get("imageUrl");
            var audioUrl = result.get("audioUrl");
            var videoUrl = result.get("videoUrl");
            var collectionId = result.get("collectionId");
            var isFavorite = result.get("isFavorite");
            var isPublic = result.get("isPublic");
            var status = result.get("status");
            var makeMyDay = result.get("makeMyDay");
            var timeMadeMyDay = result.get("timeMadeMyDay");
            var createdAt = result.get("createdAt");
 
            peopleArrCount = peopleArr.length;
            if (peopleArr.indexOf(fromId) == -1) {
              peopleArr[peopleArrCount + 1 - 1] = fromId
            }
 
 
            // success_params[i]={};
            // success_params[i]['messageId']  = '843758';
            // success_params[i]['fromId']   = fromId;
            // success_params[i]['text']   = text;
            // success_params[i]['imageUrl']   = imageUrl;
            // success_params[i]['audioUrl']   = audioUrl;
            // success_params[i]['videoUrl']   = videoUrl;
            // success_params[i]['collectionId'] = collectionId;
            // success_params[i]['isFavorite']   = isFavorite;
            // success_params[i]['isPublic']   = isPublic;
            // success_params[i]['status']   = status;
            // success_params[i]['makeMyDay']   = makeMyDay;
            // success_params[i]['createdAt']   = createdAt;
 
          });
 
}).then(function() {
  var promises = [];
  var j = 0;
  _.each(peopleArr, function(peopleId) {
 
 
            // var peopleId = peopleArr[j];
            var people = new Parse.Query("People");
            people.equalTo("userId", toId);
            people.equalTo("peopleId", peopleId);
            //pplId="a1";
            people.find().then(function(peopleResults) {
                //success: function(peopleResults) {
                pplId = "a"; //peopleResults;
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
                j++;
                //promises.push("a");
                // },
                // error: function() {
                //   response.error("Error found");
                // }
 
              }, function(error) {
                pplId = "b" + error;
              });
            // }
            //return Parse.Promise.when(promises);
          });
}).then(function() {
  response.success(pplId);
});
 
 
 
 
});
 
 
var userResults = null;
 
Parse.Cloud.define("RequestInvitation", function(request, response) {
 
  if (!request.params.email) {
    response.success("Email id has to be given");
  }
 
  var email = request.params.email;
 
  var user = new Parse.Query("_User");
  user.equalTo("email", email);
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
             html += "<p>You’re in!</p>"+
 
"<p>I’m excited to invite you to join Nitkan - a private, positivity sharing app for the people who matter in our life.</p>"+
 
"<p>If you haven’t done already, please <a href='http://applestore'>download</a> the iPhone App (Android version will come soon!).</p>"+
 
"<p>You can create your Nitkan account by using this email address and invitation code within the app.</p>"+
 
"<p><strong>email</strong>: "+ email +" <br />"+
"<strong>code</strong>: "+ randWord +" </p>"+
 
"<p><br />"+
"<strong>Guide to Nitkan</strong>:</p>"+
 
"<ul>"+
"<li>Use Nitkan to share positive, kind, and heartfelt messages with people you love, care for and work with.</li>"+
"<li>Make it personal and genuine. What you notice about others and how you compliment, cheer or empathize with them, say a lot about you.</li>"+
"<li>Send something that they will care for and will make them think of you positively.</li>"+
"<li>Do your best to see and share the goodness others. It’ll come back!</li>"+
"</ul>";
              html += getMailFooter();
 
              var userClass = Parse.Object.extend("_User");
              var user = new userClass();
 
               var user_name = email.replace("@","");
               user.set("username", user_name);
               user.set("password", "");
               user.set("email", email);
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
                  console.log(httpResponse);
                  response.success("Email sent!");
                },
                error: function(httpResponse) {
                  console.error(httpResponse);
                  response.error("Uh oh, something went wrong");
                }
              });
 
 
              response.success("Congrats! The user is invited");
 
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
 
 
Parse.Cloud.define("Categorisation", function(request, response) {
  var from = request.params.from;
  var to = request.params.to;
  var group = request.params.group;
 
  var user = new Parse.Query("_User");
  user.equalTo("objectId", to);
 
  user.find({
    success: function(results) {
      var userResult = results[0];
 
      var firstName = userResult.get("firstName");
      var lastName = userResult.get("lastName");
      var imageURL = userResult.get("imageUrl");
      var imageThumbURL = userResult.get("imageThumbUrl");
      var email = userResult.get("email");
 
      var PeopleClass = Parse.Object.extend("People");
      var people = new PeopleClass();
      people.set("userId", from);
      people.set("peopleId", to);
      people.set("peopleEmail", email);
 
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
 
 
Parse.Cloud.beforeSave("WordVoting", function(request, response) {
 
  var dirtyFlag;
  var message;
  var voteCount;
  var alertMsg;
 
  if (request.object.get("voteCount") && request.object.dirty("voteCount")) {
 
    dirtyFlag      = "true";
    voteCount      = request.object.get("voteCount");
  }
 
  if(dirtyFlag == "true"){
 
    if(voteCount == 5){
      message  = "Your tribe are a persistent bunch! They got together and found a word that fits you well. Tap to discover and share it on your profile.";
      alertMsg = "New Personality Type available for Profile";
    }else {
      message  = "Surprise! You were described by people you know.";
      alertMsg = "New Personality Type";
    }
 
    var objectId = request.object.id;
    var word     = request.object.get("word");
    var userId   = request.object.get("userId");
 
    var user = new Parse.Query("_User");
    user.equalTo("objectId", userId);
 
    user.find({
 
      success: function(results) {
 
        var userResult = results[0];
 
        var firstName = userResult.get("firstName");
        var lastName  = userResult.get("lastName");
        var email     = userResult.get("email");
 
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
        pushQuery.matchesQuery('_User', user);
 
                                  // Send push notification to query
                                  Parse.Push.send({
                                    where: pushQuery,
                                    data: {
                                      alert: message,
                                      objectid : objectId,
                                      objectType : "text",
                                      alertType : alertMsg
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
 
Parse.Cloud.beforeSave("Message", function(request, response) {
 
 
  var dirtyFlag;
  var message;
 
  if (request.object.get("madeMyDay") && request.object.dirty("madeMyDay")) {
    var madeMyDay  = request.object.get("madeMyDay");
    dirtyFlag      = "true";
    if(madeMyDay==0) {
     dirtyFlag="false";}
     else {
      dirtyFlag      = "true";
    }
  }else if(request.object.get("isFavorite") && request.object.dirty("isFavorite")){
    var isFavorite = request.object.get("isFavorite");
    if(isFavorite==0) {
     dirtyFlag="false";}
     else {
      dirtyFlag      = "true";
    }
  }else if(request.object.get("isPublic") && request.object.dirty("isPublic")){
    var isPublic = request.object.get("isPublic");
    if(isPublic==0) {
      dirtyFlag="false";}
     else {
      dirtyFlag      = "true";
    }
  }
 
  if(dirtyFlag == "true"){
 
    var toId      = request.object.get("toId");
    var fromId    = request.object.get("fromId");
    var messageId = request.object.id;
    var msg       = request.object.get("text");
 
    if (madeMyDay == 1 || isFavorite == 1 || isPublic == 1) {
 
      var user = new Parse.Query('_User');
      user.equalTo('objectId', fromId);
 
      user.find().then(function(results) {
 
        var promises = [];
 
        _.each(results, function(result) {
 
          promises.push((function(result) {
            var promise = new Parse.Promise();
 
            firstName = result.toJSON().firstName;
 
            var user1 = new Parse.Query('_User');
            user1.equalTo('objectId', toId);
 
                        user1.find({ // this doesnt seem to ever run, i have tried .each as well
                          success: function(userResult1) {
                            resultUser1 = userResult1[0];
 
                            firstName1 = resultUser1.get("firstName");
                            registerStatus = resultUser1.get("status");
                            toEmail = resultUser1.get("email");
 
 
                                //  message = firstName+' has made your message as public';
                                //message = "Your message has just made the day for " + firstName + "<br />";
                                var alertMsg;
                                var skipUpdate=false;
                                if(madeMyDay ==1){  
                                  message = "Your message to "+ firstName +" made their day!";
                                  alertMsg= "mademyday";
                                }else if(isFavorite ==1){
                                  message = firstName+" loves your message so much that they made it one of their favorites!";
                                  alertMsg= "favorite";
                                }else if(isPublic==1){
                                  message = firstName+" has requested you to make your message public!";
                                  alertMsg= "public";                           
                                }else if(isPublic==2){
                                  message = "Requested message has made public by "+firstName1;
                                  alertMsg= "public";                           
                                }else {
                                  skipUpdate=true;
                                }
 
                                if(!skipUpdate) {
                                var pushQuery = new Parse.Query(Parse.Installation);
                                pushQuery.matchesQuery('_User', user1);
 
                                  // Send push notification to query
                                  Parse.Push.send({
                                    where: pushQuery,
                                    data: {
                                      alert: message,
                                      objectid : messageId,
                                      objectType : "message",
                                      alertType : alertMsg
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
                                  if(isPublic==2){
                                    alert.set("toId", toId);
                                    alert.set("fromId", fromId);
                                  }else{
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
        var fromId= request.object.get("fromId");
        var toId= request.object.get("toId");
 
        var user1 = new Parse.Query('People');
        user1.equalTo('userId', toId);
        user1.equalTo('peopleId', fromId);
        //Checking reverse mapping
        user1.find({
          success: function(userResults) {
            console.log("S");
            console.log(userResults.length);
            console.log("T");
 
            if (userResults.length == 0) {
              var user2 = new Parse.Query('_User');
              user2.equalTo('objectId', fromId);
              console.log("fetching data for "+fromId);
              user2.find({
                success: function(userResults2) {
                 console.log("Got data for "+fromId);
 
                 var userResult = userResults2[0];
 
                 var firstName = userResult.get("firstName");
                 var lastName = userResult.get("lastName");
                 var imageURL = userResult.get("imageUrl");
                 var imageThumbURL = userResult.get("imageThumbUrl");
                 var email = userResult.get("email");
 
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
                 if(imageURL != null){
                  people.set("imageUrl", imageURL);
                  people.set("imageThumbUrl", imageThumbURL);                        
                }
                people.save();
                response.success();
              },error:function(error){
               response.error(error);
             }
           });
}else {
  response.success();
                } //userResultcount is 0
              },
              error:function(error) {
                response.error(error);
              }
            });
 
}
 
});
 
 
 
Parse.Cloud.afterSave("Message", function(request) {
 
  var mId = request.object.id;
  var toId = request.object.get("toId");
  var fromId = request.object.get("fromId");
  var text = request.object.get("text");
  var imageUrl = request.object.get("imageUrl");
  var videoUrl = request.object.get("videoUrl");
  var audioUrl = request.object.get("audioUrl");
  var firstName;
  var firstName1;
  var resultUser;
  var resultUser1;
  var message;
 
 
  var user = new Parse.Query('_User');
  user.equalTo('objectId', fromId);
 
    // var query = new Parse.Query("Message");
    // query.equalTo("objectId", mId);
 
    user.find().then(function(results) {
 
      var promises = [];
 
      _.each(results, function(result) {
 
        promises.push((function(result) {
          var promise = new Parse.Promise();
 
                //toId   = result.toJSON().toId;
                firstName = result.toJSON().firstName;
 
 
 
                var user1 = new Parse.Query('_User');
                user1.equalTo('objectId', toId);
 
                user1.find({ // this doesnt seem to ever run, i have tried .each as well
                  success: function(userResult1) {
                    resultUser1 = userResult1[0];
 
                    firstName1 = resultUser1.get("firstName");
                    registerStatus = resultUser1.get("status");
 
 
 
                    if (registerStatus == "Registered") {
                      if (text != '') {
                        msgFormat = 'text';
                      } else if (audio != '') {
                        msgFormat = 'audio';
                      } else if (video != '') {
                        msgFormat = 'video';
                      } else if (image != '') {
                        msgFormat = 'image';
                      }
 
                    }
                    message = firstName + ' has sent you a ' + msgFormat + ' message';
 
                    var Test = Parse.Object.extend("Test");
                    var test = new Test();
                    test.set("toName", firstName1);
                    test.set("fromName", firstName);
                    test.save();
 
                    var pushQuery = new Parse.Query(Parse.Installation);
                    pushQuery.matchesQuery('_User', user1);
 
                        // Send push notification to query
                        Parse.Push.send({
                          where: pushQuery,
                          data: {
                            alert: message
                          }
                        }, {
                          success: function() {
                                // Push was successful
                              },
                              error: function(error) {
                                // Handle error
                              }
                            });
 
                        promise.resolve();
 
                      },
                      error: function(error) {
                        status.error(error);
                      }
                    });
 
 
return promise;
 
})(result));
 
 
});
return Parse.Promise.when(promises);
 
 
}).then(function() {
  response.success(message);
});
 
 
});
 
 
 
 
var Image = require("parse-image");
Parse.Cloud.beforeSave("_User", function(request, response) {
 
  if (request.object.get("status") && request.object.dirty("status")) {
      var dirtyFlag;
      var status  = request.object.get("status");
      dirtyFlag      = "true";
 
      if(status == "Registered"){
        dirtyFlag      = "true";
      }else{
        dirtyFlag      = "false";
      }
     
     var Test = Parse.Object.extend("Test");
                    var test = new Test();
                    test.set("toName", dirtyFlag);
                    test.set("fromName", "s2");
                    test.save();
 
      if(dirtyFlag == "true"){
 
          var firstname  = request.object.get("firstName");
          var username   = request.object.get("username");
          var email      = request.object.get("email");
 
          var html = getMailHeader();
 
          html += "<p>Welcome to Nitkan, "+firstname+"!"+"</p>"+
 
          "<p>Your user name is "+username+".</p>"+
 
"<p>Here are few things that will help you get started:</p>"+
 
"<ul>"+
"<li>The people you exchange messages with are categorized in four groups: Dear, Near, Work and Peeps.</li>"+
"<li>Your activity over the last seven days is reflected through the Nitkan circle. It helps visualize your focus.</li>"+
"<li>Tap the <strong>sunrise</strong> to tell the sender that their note made your day.</li>"+
"<li>Tap the <strong>star</strong> to mark the note as a favorite.</li>"+
"<li>Every interaction on Nitkan is private. If you want a message to be displayed on your public profile (for instance, a note from your boss), tap on the <strong>eye</strong> icon. Once the sender approves, the message, it’ll be made visible.</li>"+
"</ul>"+
 
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
    });
 
 
Parse.Cloud.beforeSave("People", function(request, response) {
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
 
 
}
