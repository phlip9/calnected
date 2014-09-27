/** @jsx React.DOM */

(function() {

  var sites = [
    {
      name: 'BearFacts',
      url: 'http://bearfacts.berkeley.edu',
      tags: ['financial aid', 'registration', 'general']
    },
    {
      name: 'Financial Aid',
      url: 'http://myfinaid.berkeley.edu',
      tags: ['financial aid']
    },
  ];

  var CategoryList = React.createClass({
    render: function() {
      var categories = this.props.data.map(function(category) {
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

  var TilesComponent = React.createClass({
    render: function() {
      var tiles = this.props.data.map(function(datum) {
        return (
          <div className="col-sm-4 col-lg-4 col-md-4">
            <a href="http://google.com/">
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

  var AppComponent = React.createClass({

    render: function() {
      return (
      <div className="row">

        <div className="col-md-3">
          <CategoryList data={['General', 'Academics', 'Fun']} />
        </div>

        <div className="col-md-9">
          <TilesComponent data={ [ {name:'Foo Bar'}, {name:'Baz Quxx'}] } />
        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent />, document.getElementById('react-binding'));
})()
