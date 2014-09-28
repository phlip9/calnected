/** @jsx React.DOM */

(function() {

  imgMap = {
    'Academics': 'academic.jpg',
    'Advice': 'advice.jpg',
    'Calendar': 'events.jpg',
    'Classes': 'classes.png',
    'Clubs': 'free.png',
    'Dining': 'food.png',
    'Events': 'events.jpg',
    'Files': 'software.png',
    'Fun': 'fun.png',
    'General': 'general.png',
    'Homework': 'academic.jpg',
    'Housing': 'housing.png',
    'Jobs': 'jobs.jpg',
    'Library': 'classes.png',
    'Miscellaneous': 'miscellaneous.jpg',
    'Money': 'money.png',
    'Software': 'software.png',
    'Tools': 'software.png',
    'Trading': 'trading.jpg',
    'Transportation': 'transportation.png'
  };

  var sites = [

    {url:'https://auth.berkeley.edu/', name:'CalNet Authentication System', description:'AKA CalNet Login - login to Berkeley services.', tags: ['General']},

    {url:'http://calcentral.berkeley.edu/', name:'CalCentral',  description:'Currently in the works by the university staff, CalCentral is a portal to connect BearFacts, bSpace, Telebears, etc. all into ONE easy-to-use site.', tags: ['General']},

    {url:'http://bearfacts.berkeley.edu/', name:'Bearfacts',  description:'Telebears appointments, CARS, registration, etc.', tags: ['General']},

    {url:'http://bmail.berkeley.edu/',name:'bMail', tags: ['General']},

    {url:'http://calmail.berkeley.edu/', name:'CalMail', description:'Gmail/email for Berkeley.', tags: ['General']},

    {url:'http://bdrive.berkeley.edu/', name:'bDrive', description:'Google Drive for Berkeley.', tags: ['General']},

    {url:'http://bcal.berkeley.edu/', name:'bCal', description:'Google Calendar for Berkeley.', tags: ['General']},

    {url:'http://services.housing.berkeley.edu/c1c/static/index.htm', name:'Cal 1 Card', description:'Cal 1 Card is your student ID/debit card/bus pass.', tags: ['General']},

    {url:'https://calnet.berkeley.edu/directory/index.pl', name:'Directory', description:'Stalk Search for people at Berkeley. Colleges of Berkeley', tags: ['General']},

    {url:'http://ls.berkeley.edu/', name:'Letters and Science (L&S)', tags: ['General']},

    {url:'http://chemistry.berkeley.edu/', name:'College of Chemistry (CoC)', tags: ['General']},

    {url:'http://coe.berkeley.edu/', name:'College of Engineering (CoE)', tags: ['General']},

    {url:'http://nature.berkeley.edu/site/index.php', name:'College of Natural Resources (CNR)', tags: ['General']},

    {url:'http://www.haas.berkeley.edu/', name:'Haas School of Business', tags: ['General']},

    {url:'http://bspace.berkeley.edu/', name:'bSpace', tags: ['Academics']},

    {url:'https://www.facebook.com/groups/176230269085268/', name:'STUDY TIPS and OTHER USEFUL THINGS', description:'A place to find study tips and general tips for Berkeley classes', tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group', tags: ['Academics']},

    {url:'https://www.facebook.com/groups/groupsatberkeley/', name:'Find your class years and majors Facebook group', tags: ['Homework', 'Calendar', 'Files']},

    {url:'http://academicservices.berkeley.edu/advising/gpa/', name:'GPA Calculator', description:'GPA calculator from the ASC', tags: ['Homework', 'Calendar', 'Files']},

    {url:'https://www.refworks.com/refworks2/default.aspx?r=authentication::init&groupcode=ucberkeleybears', name:'RefWorks', description:'Organize and cite the research papers used in a project/paper in any format.', tags: ['Homework', 'Calendar', 'Files']},

    {url:'http://easybib.com/', name:'EasyBib', description:'Easily make a bibliography in MLA format.', tags: ['Homework', 'Calendar', 'Files']},

    {url:'https://tbp.berkeley.edu/students/exams/', name:'Tau Beta Pi Test Bank',  description:'Old exams from pretty much all STEM classes, both upper- and lower-div. SUPER helpful.', tags: ['Homework', 'Calendar', 'Files']},

    {url:'https://hkn.eecs.berkeley.edu/exams/', name:'HKNs Test Bank', description:'Old exams from all EE & CS classes, both upper- and lower-div. HKNs site also has course guides (descriptions, reviews, etc.) for most EE & CS classes.', tags: ['Academics']},

    {url:'http://thequad.com/share/75tqFD', name:'Quad', description:'Quad inputs all of your assignments/projects using your classs syllabus to create a calendar with due dates. Currently only for Berkeley students.', tags: ['Academics']},

    {url:'http://oneclass.com/a/146154', name:'OneClass', description:'Organize your notes, share class notes with others, and get recommended notes/videos for your class. Also, when you join, youre entered into a', tags: ['Academics']},

    {url:'http://oneclass.com/scholarships', name:'scholarship', tags: ['Academics']},

    {url:'http://oneclass.com/freetextbooks', name:'free textbooks', tags: ['Academics']},

    {url:'http://beta.classmint.com/', name:'Classmint',description:'An interactive browser-based note-taking tool with text and image annotations.', tags: ['Academics']},

    {url:'http://s.tudy.it/twkpdup', name:'StudyBlue',description:'Make and share flashcards accessible by computer and smartphone for all of your classes. (Get a free month of Pro with the url above.)', tags: ['Academics']},

    {url:'http://uguru.me/', name:'Uguru.me', description:'Tutor someone in a Berkeley class or a skill to earn some money', tags: ['Academics']},

    {url:'http://www.lib.berkeley.edu/Catalogs/guide.html', name:'Library Catalog', tags: ['Academics', 'Library']},

    {url:'http://www.lib.berkeley.edu/hours', name:'Library Hours', tags: ['Academics', 'Library']},

    {url:'http://www.lib.berkeley.edu/Help/connecting_off_campus.html', name:'Library Proxy/VPN', tags: ['Academics', 'Library']},

    {url:'http://telebears.berkeley.edu/', name:'Telebears', descriptions:'SIGN UP FOR YOUR CLASSES HERE.', tags: ['Academics', 'Classes']},

    {url:'http://schedule.berkeley.edu/', name:'Schedule of Classes', descriptions:'All the classes and their times.', tags: ['Academics', 'Classes']},

    {url:'http://userscripts.org/scripts/show/105611', name:'UC Berkeley Schedule Enhancer (UCBSE)',  descriptions:'Reorganizes and decorates the Berkeley Schedule of Classes and provides helpful urls.', tags: ['Academics', 'Classes']},

    {url:'http://decal.org/courses', name:'DeCals', descriptions:'Student-run 1-2 unit P/NP classes.', tags: ['Academics', 'Classes']},

    {url:'http://ninjacourses.com/', name:'NinjaCourses', descriptions:'Helps you plan out your schedule, see reviews of classes & professors', tags: ['Academics', 'Classes']},

    {url:'https://schedulebuilder.berkeley.edu/', name:'ScheduleBuilder',  descriptions:'Like NinjaCourses, but includes grade distributions, but no reviews.}', tags: ['Academics', 'Classes']},

    {url:'https://www.facebook.com/groups/hackberkeley/permaurl/653113241387937/', name:'NinjaCommuters',  descriptions:'Script that overlays traveling time between classes based on Google Mapss predictions to pick your best schedule.', tags: ['Academics', 'Classes']},

    {url:'http://telebearsoracle.com/', name:'Telebears Oracle', descriptions:'It lets you see how classes fill up over time in the current and last semesters. Fantastic for seeing what classes to Phase I or Phase II.', tags: ['Academics', 'Classes']},

    {url:'http://berkeleytime.com/', name:'BerkeleyTime',  descriptions:'Lets you filter what kind of classes you want - by requirement, number of units, grade average, etc. Also has a campus map, grade distributions, and enrollment charts.', tags: ['Academics', 'Classes']},

    {url:'http://courserank.com/', name:'CourseRank',  descriptions:'Like BerkeleyTime, but also has a 4-year planner, official and unofficial grade distributions, class reviews, and other cool things. ', tags: ['Academics', 'Classes']},

    {url:'http://www.ratemyprofessors.com/SelectTeacher.jsp?sid=1072', name:'Rate My Professors', descriptions:'Ratings for professors.', tags: ['Academics', 'Classes']},

    {url:'http://bearcheck.herokuapp.com/', name:'BearCheck',  descriptions:'Get notified when a seat opens up in a class you want!', tags: ['Academics', 'Classes']},

    {url:'https://kloudless.com/cal/', name:'Kloudless',  descriptions:'Does the same thing as BearCheck - notifies you of an open space in a class.', tags: ['Academics', 'Classes']},

    {url:'http://roomres.fuqu.jp/', name:'Room Reservation System', description:'Have you ever tried to reserve rooms for events in Berkeley? The results often turn out something like this. Refresh it! ', tags: ['Fun']},

    {url:'http://ucbbg.tumblr.com/', name:'UC Berkeley Bathroom Graffiti', description:'A collection of Berkeleys bathroom graffiti. ', tags: ['Fun']},

    {url:'https://www.facebook.com/ucberkeley.love?fref=ts', name:'Berkeley Love',  description:'Spread the love...', tags: ['Fun']},

    {url:'https://www.facebook.com/humans.berkeley', name:'Humans of Berkeley',  description:'Berkeleys version of Humans of New York.', tags: ['Fun']},

    {url:'https://www.facebook.com/berkeley.story.collective', name:'Berkeley Story Collective',  description:'Similar to Humans of Berkeley, but with longer narratives; professors included.', tags: ['Fun']},

    {url:'https://www.facebook.com/groups/295317910489086/', name:'Overheard at Cal',  description:'Silly things heard at Berkeley.', tags: ['Fun']},

    {url:'http://ist.berkeley.edu/software-central', name:'Software for UC Berkeley students', tags: ['Software']},

    {url:'https://berkeley.box.com/files', name:'50 GB of free storage from box.com for UC Berkeley students', description:'FIFTY GIGS of free space! In Fall 2012, Dropbox also ran its Space Race, which gave all Berkeley students that signed up with their .edu emails 25 gigs for free for getting so many signups. Not sure if this is still true, but you could always try.', tags: ['Software']},

    {url:'http://ocf.berkeley.edu/', name:'Open Computing Facility (OCF)',  description:'The OCF is a student-run organization that provides a lot of free stuff. Make an account, and you get 250 pages of free printing per semester, an @ocf.berkeley.edu email, SSH, a database, and 2 GB of web space if you want them. This webpage is hosted by the OCF.', tags: ['Software']},

    {url:'https://www.facebook.com/groups/266259930135554/', name:'Free and For Sale', description:'Buy and sell anything you want here.', tags: ['Trading']},

    {url:'http://buynear.me/', name:'Buynear.me',  description:'Buynear.me lets on Berkeley students input what they want to sell. You can filter by items and see prices. It also helps you auto-post to several Facebook groups.', tags: ['Trading']},

    {url:'http://www.ucbmealpoints.com/', name:'Berkeley Meal Points Exchange', description:' Lets you do exchanges for meal points (keep this hush-hush!). I wish I had found this earlier. Excess meal points is an extremely common issue. ', tags: ['Trading']},

    {url:'http://www.uloop.com/', name:'Uloop',  description:'Classifieds for college students', tags: ['Trading']},

    {url:'http://www.uskarma.com/', name:'Karma', description:'Exchange favors with other students. (Coming soon)', tags: ['Trading']},

    {url:'http://housing.berkeley.edu/', name:'Housing',  description:'Official housing site.', tags: ['Housing']},

    {url:'https://maintenance.housing.berkeley.edu/', name:'Maintenance Requests', description:'Submit a request here if anything in your residence hall is broken or malfunctioning.', tags: ['Housing']},

    {url:'http://services.housing.berkeley.edu/c1c/dyn/laundry.asp', name:'Laundry Web', description:'Check the status of the laundry machines in your building.', tags: ['Housing']},

    {url:'http://rescomp.berkeley.edu/', name:'ResComp',  description:'Login to Helpdesk to view your quota or for help with your in-room internet connection.', tags: ['Housing']},

    {url:'http://calrentals.housing.berkeley.edu/', name:'Cal Rentals',  description:'Official UC Berkeley listing of places for rent.', tags: ['Housing']},

    {url:'http://www.bsc.coop/', name:'Berkeley Co-ops',  description:'Berkeley cooperative housing.', tags: ['Housing']},

    {url:'https://www.padmapper.com/', name:'PadMapper',  description:'Find apartments up for rent here. ', tags: ['Housing']},

    {url:'https://www.facebook.com/groups/groupsatberkeley/', name:'Find your buildings Facebook group.', tags: ['Housing']},

    {url:'http://www.berkeley.edu/map/', name:'Campus Map',  description:'Go somewhere on campus.', tags: ['Transportation']},

    {url:'http://admissions.berkeley.edu/map/', name:'3D Campus Map',  description:'Really cool 3D campus map.', tags: ['Transportation']},

    {url:'http://bearwalk.berkeley.edu/', name:'Bearwalk',  description:'If you want to go from one place to another at night, Bearwalk can walk you. You can request one and check the status of your request from this site.', tags: ['Transportation']},

    {url:'http://pt.berkeley.edu/around/transit/routes', name:'Parking and Transportation',  description:'Shuttle routes and schedules.', tags: ['Transportation']},

    {url:'http://www.actransit.org/maps/', name:'AC Transit',  description:'AC Transit maps and schedules.', tags: ['Transportation']},

    {url:'http://www.nextbus.com/predictor/stopSelector.jsp?a=actransit', name:'NextBus',  description:'Check when the next AC Transit bus to your stop is coming.', tags: ['Transportation']},

    {url:'https://www.clippercard.com/ClipperWeb/index.do', name:'Clipper Card', description:'RFID card means you go "beep" at the Clipper stand to pay for public transportation anywhere in the Bay Area.', tags: ['Transportation']},

    {url:'http://bart.gov/', name:'BART',  description:'Subway all around the Bay Area.', tags: ['Transportation']},

    {url:'http://www.zipcar.com/calstudent', name:'ZipCar',  description:'Rent a car to drive somewhere.', tags: ['Transportation']},

    {url:'https://www.uber.com//', name:'Uber',  description:'Uber is essentially a higher-end on-call taxi service.'},

    {url:'http://services.housing.berkeley.edu/FoodPro/dining/static/todaysentrees.asp', name:'CalDinings Menu for Today',  description:'Check here to decide where to eat.', tags: ['Dining']},

    {url:'http://inst.cr/t/6m4sgy', name:'Instacart',  description:'Get food from Trader Joes, Whole Foods, or Safeway shipped right to your door!', tags: ['Dining']},

    {url:'https://www.spoonrocket.com/', name:'SpoonRocket',  description:'Pick from a few different choices and get it delivered to your door for $6. Menu changes every day.', tags: ['Dining']},

    {url:'http://ghettodelivery.com/', name:'Ghetto Delivery',  description:'Food delivery service from (Southside) Asian Ghetto/Durant Food Court. Heres a code for free delivery: getitnow', tags: ['Dining']},

    {url:'https://myfinaid.berkeley.edu/myfinaid/home.html', name:'MyFinAid', description:' View your financial aid for Berkeley.', tags: ['Money']},

    {url:'https://eftstudent.berkeley.edu/', name:'Electronic Funds Transfer',  description:'url your bank account to receive refunds from CARS.', tags: ['Money']},

    {url:'http://callisto.berkeley.edu/', name:'Callisto',  description:'The Career Centers site for helping you find a job. There are so many internships and jobs listed here.', tags: ['Money', 'Jobs']},

    {url:'http://workstudy.berkeley.edu/JobSearch.aspx', name:'Work Study',  description:'Work study listing of jobs.', tags: ['Jobs']},

    {url:'https://blu.is.berkeley.edu/', name:'Blu', description:'The employee portal designed to be your one-stop employee resource for personalized access to information, services and online resources.', tags: ['Jobs']},

    {url:'http://atyourservice.ucop.edu/', name:'At Your Service',  description:'Resouces for Berkeley employees.', tags: ['Jobs']},

    {url:'http://research.berkeley.edu/urap/index.php', name:'URAP',  description:'URAP, or the Undergraduate Research Apprentice Program, is a program where students can apply to assist in the research of Berkeley faculty.', tags: ['Jobs']},

    {url:'http://www.urledin.com/', name:'urledIn',  description:'The ever-important urledIn - basically like Facebook but centered around your resume, where your friends are your connections.', tags: ['Jobs']},

    {url:'http://www.internmatch.com/', name:'InternMatch',  description:'Find an internship here.', tags: ['Jobs']},
    
    {url:'http://www.firstjob.com/', name:'FirstJob',  description:'Find a job here. ', tags: ['Jobs']},

    {url:'http://www.mycloverink.com/', name:'Clover Ink',  description:'Post your resume and easily find and apply to job offers.', tags: ['Jobs']},

    {url:'http://occuhunt.com/', name:'Occuhunt',  description:'Map of tables at Berkeleys career fairs with descriptions of the companies - updated every career fair. Now with resume critiques too.', tags: ['Jobs']},

    {url:'http://join.hired.com/x/RUGWAE', name:'Hired',  description:'Hired makes tech companies bid to hire you (and you can choose who to interview with) - all you have to do is fill out a profile similar to that of urledIn.', tags: ['Jobs']},

    {url:'https://calurl.berkeley.edu/', name:'Calurl',  description:'Search clubs/organizations and events going on on campus. ', tags: ['Events']},

    {url:'http://events.berkeley.edu/', name:'UC Berkeley Events',  description:'Official listing of all events in Berkeley.', tags: ['Events']},

    {url:'http://studentcentral.berkeley.edu/calendar', name:'Student Calendar', tags: ['Calendar']},

    {url:'http://www.calbeat.com/', name:'CalBeat',  description:'A better way to search clubs/organizations on campus.', tags: ['Clubs', 'Events']},

    {url:'http://www.socialplex.com/', name:'Socialplex',  description:'A site that lists events at Berkeley, it seems like... not yet open. ', tags: ['Events']},

    {url:'http://calask.com/', name:'CalAsk',  description:'Have any questions about Berkeley? Find the answer here!', tags: ['Advice']},

    {url:'http://tinyurl.com/berkeleyfaq', name:'Berkeley FAQ',  description:'The Google Docs predecessor version of CalAsk.', tags: ['Advice']},

    {url:'http://bearablygolden.tumblr.com/', name:'Bearably Golden',  description:'One of my friends Berkeley Tumblr filled with advice (and pictures)', tags: ['Advice']},

    {url:'http://blog.admissions.berkeley.edu/', name:'Golden Bear Blog',  description:'Blog written for incoming Berkeley students by the Office of Undergraduate Admissions. ', tags: ['Advice']},

    {url:'http://www.jamesmaa.com/2012/12/02/james-maas-productivity-hacking-guide/', name:'Productivity Hacking Guide',  description:'The most helpful guide ever written to help you become more productive. Written by James Maa from the Class of 2016.', tags: ['Advice']},

    {url:'http://www.jamesmaa.com/2013/08/26/a-beginners-guide-to-computer-science/', name:'A Beginners Guide to Computer Science', tags: ['Advice']},

    {url:'https://idc.berkeley.edu/mmk/', name:'Manage My Keys',  description:'Set your keys to use AirBears2 or bConnected on your devices.', tags: ['Software']},

    {url:'https://net-auth.berkeley.edu/cgi-bin/krbsync', name:'Synchronize CalNet PassPhrase',  description:'If your passphrases arent synchronized, use this to fix it.', tags: ['Software']},

    {url:'https://kb.berkeley.edu/campus-shared-services/', name:'bConnected FAQ',  description:'Have any questions about using bConnected? Check here. ', tags: ['Software']},

    {url:'https://developer.berkeley.edu/', name:'Berkeley API Central', description:'Want to make a tool/web app for Berkeley students and need to pull data from Berkeley? Heres APIs for you to use.', tags: ['Software']},

    {url:'https://github.com/edu', name:'Github Educational Accounts',  description:'Github is a great tool to backup, collaborate, and merge code together. Anyone with a .edu email can get a free upgrade to a Micro plan, which includes free private repositories. ', tags: ['Software']},

    {url:'http://szhu.me/subl', name:'Install Sublime in Soda',  description:'A super-awesome script to install Sublime Text editor on the lab machines in Soda. Woo, no more Emacs/Vi(m).', tags: ['Software']},

    {url:'https://www.rescuetime.com/ref/580690~', name:'Rescuetime',  description:'Track how much time youre spending at your computer, and at which sites and which programs. Gives you a weekly report with exactly how many hours you spent at your computer, and your productivity score. Highly recommended. ', tags: ['Software']},

    {url:'http://bit.ly/Prezi4Cal', name:'Prezi',  description:'Make animated, detailed infographics to give presentations from - basically like a really fancy slideshow. Sign up with your .edu email to get free edu membership, which removes the logo and gives you more storage space, in addition to some other features.', tags: ['Software', 'Tools']},

    {url:'http://bit.ly/LastPass4Cal', name:'LastPass',  description:'Super-handy add-on to save your passwords on Firefox/Chrome/etc. Apparently having an .edu email gives you 6 free months of LastPass Premium as opposed to the free version.', tags: ['Software', 'Tools']},

    {url:'http://police.berkeley.edu/newselist.html/', name:'UCPD Email List', tags: ['Miscellaneous']},

    {url:'http://police.berkeley.edu/lostnfound/', name:'UCPD Lost and Found', tags: ['Miscellaneous']},

    {url:'https://www.facebook.com/berkeleylostkeys', name:'UC Berkeley Lost Keys',  description:'Lost or found keys? Post here.', tags: ['Miscellaneous']},

    {url:'http://dailycal.org/', name:'The Daily Californian',  description:'The Daily Cal, official newspaper of UC Berkeley.', tags: ['Miscellaneous']},

    {url:'http://calibermag.org/', name:'Caliber',  description:'Caliber, the magazine for UC Berkeley.', tags: ['Miscellaneous']},

    {url:'http://www.innod.net/request/', name:'Innovative Design',  description:'Innovative Design (or Inno D) is a student-run organization for students to learn and practice graphic design and photography. If you are part of a student organization, you can request for Inno D to make a gorgeous logo or flyers for your organization for free, under the "Request" tab. ', tags: ['Miscellaneous']}

  ];

  sites = _.sortBy(sites, 'name');

  String.prototype.contains = function(substring) {
    return this.toLowerCase().indexOf(substring) !== -1;
  };


  var CategoryList = React.createClass({
    render: function() {
      var props = this.props;

      var categories = this.props.categories.map(function(category) {
        var clickHandler = props.onCategorySelect;
        var selected = props.selectedCategory === category;
        var onClick = function () {
          if (props.selectedCategory === category) {
            clickHandler('');
          } else {
            clickHandler(category)
          }
        };
        var className = "list-group-item" + (selected ? " selected" : "");
        return (
          <a href="#" className={className} onClick={onClick}>{category}</a>
        );
      });

      return (
        <div className="list-group">
          { categories }
        </div>
      );
    }
  });

  var Tiles = React.createClass({
    render: function() {
      var tiles = this.props.data.map(function(datum) {
  
        var urlBase = 'static/img/';
        var imgUrl = imgMap[_.first(datum.tags)];

        if (imgUrl) {
          imgUrl = urlBase + imgUrl;
        } else {
          imgUrl = 'http://placehold.it/300x300';
        }

        return (
          <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src={imgUrl} alt="" />
                <div className="colored-box"></div>
                <a href={ datum.url }><h4 className="caption">{ datum.name }</h4></a>
              </div>
          </div>
        );
      });

      return (
        <div className="row">
          { tiles }
        </div>
      );
    }
  });

  var SearchBar = React.createClass({
    handleChange: function() {
      this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
    },

    render: function() {
      return (
        <div className="row search-bar">
          <input type="text" className="form-control" placeholder="Search..."
                 value={this.props.filterText} onChange={this.handleChange}
                 ref="filterTextInput" />
        </div>
      );
    }
  });

  var AppComponent = React.createClass({

    getInitialState: function() {
      return {
        filterText: '',
        selectedCategory: '',
        selectedTile: '',
        filteredData: this.props.data
      };
    },

    filterData: function(filterText, selectedCategory) {
      var filter = filterText.toLowerCase();
      var category = selectedCategory.toLowerCase();

      var data = _(this.props.data);
      if (filter !== '') {
        data = data.filter(function (datum) {
            var nameMatches = datum.name.contains(filter);
            var tagsMatch = _(datum.tags)
                              .map(function(tag) { return tag.contains(filter); })
                              .any();
            return tagsMatch || nameMatches;
          });
      }

      if (category !== '') {
        data = data.filter(function (datum) {
          return _(datum.tags)
                   .map(function (tag) { return tag.contains(category); })
                   .any();
        });
      }

      data = data.first(25).sortBy('name');

      this.setState({ filterText: filterText, selectedCategory: selectedCategory, filteredData: data.value() });
    },

    onCategorySelect: function(category) {
      this.filterData(this.state.filterText, category);
    },

    onUserInput: function(filterText) {
      this.filterData(filterText, this.state.selectedCategory);
    },

    render: function() {
      var categories = _(this.props.data)
                         .map(function(datum) { return datum.tags; })
                         .flatten()
                         .uniq()
                         .sortBy()
                         .value();

      return (
      <div className="row">

        <div className="col-md-3">
          <CategoryList selectedCategory={this.state.selectedCategory} onCategorySelect={this.onCategorySelect} categories={categories} />
        </div>

        <div className="col-md-9">
          <SearchBar onUserInput={ this.onUserInput }/>
          <Tiles data={ this.state.filteredData } />
        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent data={sites} />, document.getElementById('react-binding'));
})()
