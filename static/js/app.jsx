/** @jsx React.DOM */

(function() {

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

  var AppComponent = React.createClass({

    render: function() {
      return (
      <div className="row">

        <div className="col-md-3">
          <CategoryList data={['General', 'Academics', 'Fun']} />
        </div>

        <div className="col-md-9">

          <div className="row">

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                  <h4 className="pull-right">$24.99</h4>
                  <h4><a href="#">First Product</a>
                  </h4>
                  <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">15 reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                  <h4 className="pull-right">$64.99</h4>
                  <h4><a href="#">Second Product</a>
                  </h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">12 reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                  <h4 className="pull-right">$74.99</h4>
                  <h4><a href="#">Third Product</a>
                  </h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">31 reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                  <h4 className="pull-right">$84.99</h4>
                  <h4><a href="#">Fourth Product</a>
                  </h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">6 reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt="" />
                <div className="caption">
                  <h4 className="pull-right">$94.99</h4>
                  <h4><a href="#">Fifth Product</a>
                  </h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">18 reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent />, document.getElementById('react-binding'));


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




})()
