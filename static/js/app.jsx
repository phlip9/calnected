/** @jsx React.DOM */

(function() {

  var sites = [
    { name: 'BearFacts', url: 'http://bearfacts.berkeley.edu', tags: ['Financial Aid', 'Registration', 'General'] },

    { name: 'My Financial Aid', url: 'http://myfinaid.berkeley.edu', tags: ['Financial Aid'] },

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

    {url:'https://www.facebook.com/groups/groupsatberkeley/', name:'Find your class years and majors Facebook group', tags: ['Homework', 'Calendars', 'Files']},

    {url:'http://academicservices.berkeley.edu/advising/gpa/', name:'GPA Calculator', description:'GPA calculator from the ASC', tags: ['Homework', 'Calendars', 'Files']},

    {url:'https://www.refworks.com/refworks2/default.aspx?r=authentication::init&groupcode=ucberkeleybears', name:'RefWorks', description:'Organize and cite the research papers used in a project/paper in any format.', tags: ['Homework', 'Calendars', 'Files']},

    {url:'http://easybib.com/', name:'EasyBib', description:'Easily make a bibliography in MLA format.', tags: ['Homework', 'Calendars', 'Files']},

    {url:'https://tbp.berkeley.edu/students/exams/', name:'Tau Beta Pi Test Bank',  description:'Old exams from pretty much all STEM classes, both upper- and lower-div. SUPER helpful.', tags: ['Homework', 'Calendars', 'Files']},

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

    {url:'https://kloudless.com/cal/', name:'Kloudless',  descriptions:'Does the same thing as BearCheck - notifies you of an open space in a class.', tags: ['Academics', 'Classes']}
  ];


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
        var colSize = "col-sm-4 col-lg-4"
        return (
          <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/300x300" alt="" />
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
