/** @jsx React.DOM */

(function() {

  var sites = [
    {
      name: 'BearFacts',
      url: 'http://bearfacts.berkeley.edu',
      tags: ['Financial Aid', 'Registration', 'General']
    },
    {
      name: 'My Financial Aid',
      url: 'http://myfinaid.berkeley.edu',
      tags: ['Financial Aid']
    },

  ];

  var general=[
    {url:'https://auth.berkeley.edu/', name:'CalNet Authentication System', description:'AKA CalNet Login - login to Berkeley services.'},

    {url:'http://calcentral.berkeley.edu/', name:'CalCentral',  description:'Currently in the works by the university staff, CalCentral is a portal to connect BearFacts, bSpace, Telebears, etc. all into ONE easy-to-use site.'},

    {url:'http://bearfacts.berkeley.edu/', name:'Bearfacts',  description:'Telebears appointments, CARS, registration, etc.},

    {url:'http://bmail.berkeley.edu/',name:'bMail'},

    {url:'http://calmail.berkeley.edu/', name:'CalMail', description:'Gmail/email for Berkeley.'},

    {url:'http://bdrive.berkeley.edu/', name:'bDrive', description:'Google Drive for Berkeley.'},

    {url:'http://bcal.berkeley.edu/', name:'bCal', description:'Google Calendar for Berkeley.'},

    {url:'http://services.housing.berkeley.edu/c1c/static/index.htm', name:'Cal 1 Card', description:'Cal 1 Card is your student ID/debit card/bus pass.},

    {url:'https://calnet.berkeley.edu/directory/index.pl', name:'Directory', description:'Stalk Search for people at Berkeley. Colleges of Berkeley'},

    {url:'http://ls.berkeley.edu/', name:'Letters and Science (L&S)'},

    {url:'http://chemistry.berkeley.edu/', name:'College of Chemistry (CoC)'},

    {url:'http://coe.berkeley.edu/', name:'College of Engineering (CoE)'},

    {url:'http://nature.berkeley.edu/site/index.php', name:'College of Natural Resources (CNR)'},

    {url:'http://www.haas.berkeley.edu/', name:'Haas School of Business'}
    ];

    var academic=[

    {url:'http://bspace.berkeley.edu/', name:'bSpace'},

    {url:'https://www.facebook.com/groups/176230269085268/', name:'STUDY TIPS and OTHER USEFUL THINGS', description:'A place to find study tips and general tips for Berkeley classes', tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'https://www.facebook.com/groups/groupsatberkeley/', name:'Find your class year's and major's Facebook group',
    tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'http://academicservices.berkeley.edu/advising/gpa/', name:'GPA Calculator', description:'GPA calculator from the ASC',
    tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'https://www.refworks.com/refworks2/default.aspx?r=authentication::init&groupcode=ucberkeleybears', name:'RefWorks', description:'Organize and cite the research papers used in a project/paper in any format.',
    tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'http://easybib.com/', name:'EasyBib', description:'Easily make a bibliography in MLA format.',
    tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'https://tbp.berkeley.edu/students/exams/', name:'Tau Beta Pi Test Bank',  description:'Old exams from pretty much all STEM classes, both upper- and lower-div. SUPER helpful.',
    tags: 'Homework, calendars, files, etc. for all of your classes. Facebook Group'},

    {url:'https://hkn.eecs.berkeley.edu/exams/', name:'HKN's Test Bank', description:'Old exams from all EE & CS classes, both upper- and lower-div. HKN's site also has course guides (descriptions, reviews, etc.) for most EE & CS classes.'},

    {url:'http://thequad.com/share/75tqFD', name:'Quad', description:'Quad inputs all of your assignments/projects using your class's syllabus to create a calendar with due dates. Currently only for Berkeley students.'},

    {url:'http://oneclass.com/a/146154', name:'OneClass', description:'Organize your notes, share class notes with others, and get recommended notes/videos for your class. Also, when you join, you're entered into a'},

    {url:'http://oneclass.com/scholarships', name:'scholarship'},

    {url:'http://oneclass.com/freetextbooks', name:'free textbooks'},

    . {url:'http://beta.classmint.com/', name:'Classmint',description:'An interactive browser-based note-taking tool with text and image annotations.'},

    {url:'http://s.tudy.it/twkpdup', name:'StudyBlue',description:'Make and share flashcards accessible by computer and smartphone for all of your classes. (Get a free month of Pro with the url above.)'},

    {url:'http://uguru.me/r/jwt7c', name:'Uguru.me', description:'Tutor someone in a Berkeley class or a skill to earn some money'},

    {url:'http://writtenkitten.net/', name:'Written? Kitten!', description:'Need some motivation to start writing that paper? Every 100 words, you'll be rewarded with a new kitten.'},

    {url:'http://essaytyper.com/', name:'EssayTyper', description:'Need a BS essay? Input your topic, and watch the essay fly out as you type.'},

    {url:'http://hackertyper.net/', name:'HackerTyper', description:'Need some BS code? Input your topic, and watch it fly out as you type.'}
    ];

    var library=[{url:'http://www.lib.berkeley.edu/Catalogs/guide.html', name:'Library Catalog'},
    {url:'http://www.lib.berkeley.edu/hours', name:'Library Hours'},
    {url:'http://www.lib.berkeley.edu/Help/connecting_off_campus.html', name:'Library Proxy/VPN'}];


    var classes=[{url:'http://telebears.berkeley.edu/', name:'Telebears', descriptions:'SIGN UP FOR YOUR CLASSES HERE.'},
    {url:'http://schedule.berkeley.edu/', name:'Schedule of Classes', descriptions:'All the classes and their times.'},
    {url:'http://userscripts.org/scripts/show/105611', name:'UC Berkeley Schedule Enhancer (UCBSE)',  descriptions:'Reorganizes and decorates the Berkeley Schedule of Classes and provides helpful urls.'},
    {url:'http://decal.org/courses', name:'DeCals', descriptions:'Student-run 1-2 unit P/NP classes.'},
    {url:'http://ninjacourses.com/', name:'NinjaCourses', descriptions:'Helps you plan out your schedule, see reviews of classes & professors'},
    {url:'https://schedulebuilder.berkeley.edu/', name:'ScheduleBuilder',  descriptions:'Like NinjaCourses, but includes grade distributions, but no reviews.},
    {url:'https://www.facebook.com/groups/hackberkeley/permaurl/653113241387937/', name:'NinjaCommuters',  descriptions:'Script that overlays traveling time between classes based on Google Maps's predictions to pick your best schedule.'},
    {url:'http://telebearsoracle.com/', name:'Telebears Oracle', descriptions:'It lets you see how classes fill up over time in the current and last semesters. Fantastic for seeing what classes to Phase I or Phase II.'},
    {url:'http://berkeleytime.com/', name:'BerkeleyTime',  descriptions:'Lets you filter what kind of classes you want - by requirement, number of units, grade average, etc. Also has a campus map, grade distributions, and enrollment charts.'},

    {url:'http://courserank.com/', name:'CourseRank',  descriptions:'Like BerkeleyTime, but also has a 4-year planner, official and unofficial grade distributions, class reviews, and other cool things. '},
    {url:'http://www.ratemyprofessors.com/SelectTeacher.jsp?sid=1072', name:'Rate My Professors', descriptions:'Ratings for professors.'},
     {url:'http://bearcheck.herokuapp.com/', name:'BearCheck',  descriptions:'Get notified when a seat opens up in a class you want!'},

     {url:'https://kloudless.com/cal/', name:'Kloudless',  descriptions:'Does the same thing as BearCheck - notifies you of an open space in a class.'}];

  var CategoryList = React.createClass({
    render: function() {
      var categories = this.props.categories.map(function(category) {
        return (
          <a href="#" className="list-group-item">{category}</a>
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
        return (
          <div className="col-sm-4 col-lg-4 col-md-4">
            <a href={ datum.url }>
              <div className="thumbnail">
                <img src="http://placehold.it/300x300" alt="" />
                <h4 className="caption">{ datum.name }</h4>
              </div>
            </a>
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
        selectedCategory: null,
        filterText: '',
        filteredData: this.props.data
      };
    },

    onUserInput: function(filterText) {
      var data = this.props.data;
      if (filterText !== '') {
        data =
          _(this.props.data)
          .filter(function (datum) {
            return datum.name.indexOf(filterText) !== -1;
          })
          .value();
      }

      this.setState({ filterText: filterText, filteredData: data });
    },

    render: function() {
      return (
      <div className="row">

        <div className="col-md-3">
          <CategoryList categories={['General', 'Academics', 'Fun']} />
        </div>

        <div className="col-md-9">
          <SearchBar onUserInput={this.onUserInput}/>
          <Tiles data={ this.state.filteredData } />
        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent data={sites} />, document.getElementById('react-binding'));
})()
