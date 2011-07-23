(function() {
  $(function() {
    var beers, viewModel;
    beers = [
      {
        name: "Dragon's Milk",
        brewery: "New Holland Brewing Company",
        style: "Imperial Stout"
      }, {
        name: "Oberon",
        brewery: "Bell's",
        style: "Wheat"
      }, {
        name: "El Mole Ocho",
        brewery: "New Holland Brewery Company",
        style: "Mole Ale"
      }
    ];
    viewModel = {
      beers: ko.observableArray(beers),
      query: ko.observable(''),
      search: function(value) {
        var beer, _i, _len, _results;
        viewModel.beers.removeAll();
        _results = [];
        for (_i = 0, _len = beers.length; _i < _len; _i++) {
          beer = beers[_i];
          if (beer.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            _results.push(viewModel.beers.push(beer));
          }
        }
        return _results;
      }
    };
    viewModel.query.subscribe(viewModel.search);
    return ko.applyBindings(viewModel);
  });
}).call(this);
