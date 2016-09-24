var teamData = {
  "Arsenal" : {
    nickname: "Gunners",
    year: "1886",
    summary: {
      text: "Arsenal was the first club from the South of England to join The Football League, in 1893. They entered the First Division in 1904, and have since accumulated the second most points. Relegated only once, in 1913, they continue the longest streak in the top division. In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.",
      citation: "https://en.wikipedia.org/wiki/Arsenal_F.C."
    },
    stadium: {
      name: "Emirates Stadium",
      url: "https://goo.gl/maps/k4CSxDuqveG2"
    },
    social: {
      website: "http://www.arsenal.com/home",
      twitter: "https://twitter.com/Arsenal"
    },
    logo: {
      src: "./img/arsenal-logo.png",
      name: "Arsenal F.C."
    }
  },
  "Chelsea" : {
    nickname: "Blues",
    year: "1905",
    summary: {
      text: "Chelsea had their first major success in 1955, when they won the league championship. They then won various cup competitions between 1965 and 1996. The club's greatest period of success has come during the last two decades; winning 17 major trophies, and 21 in total, since 1997.[5] Chelsea have won five national league titles, seven FA Cups, five League Cups and four FA Community Shields, one UEFA Champions League, two UEFA Cup Winners' Cups, one UEFA Europa League and one UEFA Super Cup.",
      citation: "https://en.wikipedia.org/wiki/Chelsea_F.C."
    },
    stadium: {
      name: "Stamford Bridge",
      url: "https://goo.gl/maps/2ZDUMZ1NeP12"
    },
    social: {
      website: "https://www.chelseafc.com/",
      twitter: "https://twitter.com/chelseafc"
    },
    logo: {
      src: "./img/chelsea-logo.png",
      name: "Chelsea F.C."
    }
  },
  "Leicester City" : {
    nickname: "Foxes",
    year: "1884",
    summary: {
      text: "Leicester won the 2015–16 Premier League, their first top-level football championship. A number of newspapers have described it as the greatest sporting upset ever: multiple bookmakers had never paid out at such long odds for any sport. Their previous highest ever finish was second place in the top flight, in Division One in 1928–29. Throughout Leicester's history, they have spent all but one season within the top two tiers of English football. The club holds a joint-highest seven second-tier titles (six Second Division and one Championship).",
      citation: "https://en.wikipedia.org/wiki/Leicester_City_F.C."
    },
    stadium: {
      name: "King Power Stadium",
      url: "https://goo.gl/maps/TR61citdGf72"
    },
    social: {
      website: "http://www.lcfc.com/",
      twitter: "https://twitter.com/lcfc"
    },
    logo: {
      src: "./img/leicester-logo.png",
      name: "Leicester City F.C."
    }
  },
  "Liverpool" : {
    nickname: "Reds",
    year: "1892",
    summary: {
      text: "Liverpool F.C. was founded in 1892 and joined the Football League the following year. The club has played at Anfield since its formation and has won five European Cups, three UEFA Cups, three UEFA Super Cups, 18 League titles, seven FA Cups, a record eight League Cups, and 15 FA Community Shields. Liverpool was the ninth highest-earning football club in the world for 2014–15, with an annual revenue of €391 million, and the world's eighth most valuable football club in 2016, valued at $1,550 million. The club holds many long-standing rivalries, most notably the North West Derby against Manchester United and the Merseyside derby with Everton.",
      citation: "https://en.wikipedia.org/wiki/Liverpool_F.C."
    },
    stadium: {
      name: "Anfield",
      url: "https://goo.gl/maps/Q9pAHDFygKo"
    },
    social: {
      website: "http://www.liverpoolfc.com/",
      twitter: "https://twitter.com/LFC"
    },
    logo: {
      src: "./img/liverpool-logo.png",
      name: "Liverpool F.C."
    }
  },
  "Man City" : {
    nickname: "City",
    year: "1880",
    summary: {
      text: "The club's most successful period was in the late 1960s and early 1970s when they won the League Championship, FA Cup, League Cup and European Cup Winners' Cup under the management team of Joe Mercer and Malcolm Allison. By 2014–15, Manchester City had the sixth-highest revenue in the footballing world with an annual revenue of €463.5 million. In 2016, Forbes magazine estimated they were the world's sixth most valuable football club, worth $1.92 billion.",
      citation: "https://en.wikipedia.org/wiki/Manchester_City_F.C."
    },
    stadium: {
      name: "Etihad Stadium",
      url: "https://goo.gl/maps/6Yw8LAWLdpo"
    },
    social: {
      website: "http://www.mancity.com/",
      twitter: "https://twitter.com/mancity"
    },
    logo: {
      src: "./img/city-logo.png",
      name: "Manchester City F.C."
    }
  },
  "Man United" : {
    nickname: "Red Devils",
    year: "1878",
    summary: {
      text: "Manchester United have won a record 20 league titles, a joint-record 12 FA Cups, four League Cups and a record 21 FA Community Shields. The club has also won three European Cups, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the treble of the Premier League, the FA Cup and the UEFA Champions League. Manchester United was the second highest-earning football club in the world for 2013–14, with an annual revenue of €518 million, and the world's third most valuable football club in 2015, valued at $1.98 billion. As of June 2015, it is the world's most valuable football brand, estimated to be worth $1.2 billion.",
      citation: "https://en.wikipedia.org/wiki/Manchester_United_F.C."
    },
    stadium: {
      name: "Old Trafford",
      url: "https://goo.gl/maps/R8hGdLo2ThK2"
    },
    social: {
      website: "http://www.manutd.com/",
      twitter: "https://twitter.com/ManUtd"
    },
    logo: {
      src: "./img/united-logo.png",
      name: "Manchester United F.C."
    }
  },
};
var results;


function rightLogo(team){
  var teamName = team;

  $('.window.right > img').attr("src", teamData[teamName].logo.src);
  $('.window.right > p').text(teamData[teamName].logo.name);
};

function updateContent(selectedTeam){
  var $teams = $('.team-info');
  $teams.each(function(index, team){
    var currentTeam = selectedTeam;
    var resultsTeam = $.grep(results.data.standings, function(item){
      return item.team === currentTeam;
    });

    // Top Team Info
    $(team).find('.nickname').text(teamData[currentTeam].nickname);
    $(team).find('.founded').text('Est. ' + teamData[currentTeam].year);
    $(team).find('.summary').text(teamData[currentTeam].summary.text);
    $(team).find('.cite').attr("href", teamData[currentTeam].summary.citation);
    $(team).find('.fa-twitter').attr("href", teamData[currentTeam].social.twitter);
    $(team).find('.fa-globe').attr("href", teamData[currentTeam].social.website);
    $(team).find('.grounds > a').attr("href", teamData[currentTeam].stadium.url).text(teamData[currentTeam].stadium.name);
    $(team).find('.print-points').text(resultsTeam[0].overall.points);
    $(team).find('.print-rank').text(resultsTeam[0].position);
    $(team).find('.print-win').text(resultsTeam[0].overall.wins);
    $(team).find('.print-draw').text(resultsTeam[0].overall.draws);
    $(team).find('.print-loss').text(resultsTeam[0].overall.losts);
  });
};

function showContent() {
  $('.team-bottom-content').show();
}

$(function(){
  // 1. On Load Make Request, Store as Variable.

  $.ajax({
    url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/standings', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
      results = data;
      updateContent('Arsenal');
      showContent();
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "Sk57SDuVt6mshNdKA7qOnv9GZSgep1VsOFdjsnfxG3soAdJM2F"); // Enter here your Mashape key
    }
});

  // 2. Loop through page, insert data from response.

  // 3. Menu on-click function to show desired club.
  $('#top-nav > a').on('click', function(element){
    var $ele = $(element.currentTarget);
    var team = $ele.data('team');

    $('#top-nav > a').removeClass('current-team');
    $ele.addClass('current-team');

    rightLogo(team);
    updateContent(team);
  });
});
