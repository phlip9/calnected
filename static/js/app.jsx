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

  String.prototype.contains = function(substring) {
    return this.toLowerCase().indexOf(substring) !== -1;
  };

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
      filterText = filterText.toLowerCase();

      var data = this.props.data;
      if (filterText !== '') {
        data =
          _(this.props.data)
          .filter(function (datum) {
            var nameMatches = datum.name.contains(filterText);
            var tagsMatch = _(datum.tags)
                              .map(function(tag) { return tag.contains(filterText); })
                              .any();
            return tagsMatch || nameMatches;
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
          <SearchBar onUserInput={ this.onUserInput }/>
          <Tiles data={ this.state.filteredData } />
        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent data={sites} />, document.getElementById('react-binding'));
})()
